import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Loader from '../Loader'
import VideoCard from '../VideoCard'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingContainer,
  MainContent,
  BannerHeading,
  IconContainer,
  HeadingText,
  VideosList,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedVideos = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        videosList: updatedVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderLoadingView = () => <Loader />

  renderFailureView = isDarkTheme => {
    const failureImageUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer>
        <FailureImage src={failureImageUrl} alt="failure view" />
        <FailureHeading isDarkTheme={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureText isDarkTheme={isDarkTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureText>
        <RetryButton type="button" onClick={this.onRetry}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosList>
    )
  }

  renderContentBasedOnStatus = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <TrendingContainer
                data-testid="trending"
                isDarkTheme={isDarkTheme}
              >
                <Sidebar />
                <MainContent>
                  <BannerHeading isDarkTheme={isDarkTheme}>
                    <IconContainer isDarkTheme={isDarkTheme}>
                      <HiFire size={28} color="#ff0000" />
                    </IconContainer>
                    <HeadingText isDarkTheme={isDarkTheme}>
                      Trending
                    </HeadingText>
                  </BannerHeading>
                  {this.renderContentBasedOnStatus(isDarkTheme)}
                </MainContent>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
