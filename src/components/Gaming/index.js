import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Loader from '../Loader'
import GamingVideoCard from '../GamingVideoCard'
import ThemeContext from '../../context/ThemeContext'

import {
  GamingContainer,
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

class Gaming extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      // NOTE: Gaming API has no channel object - different shape
      // than Home/Trending, hence the separate GamingVideoCard.
      const updatedVideos = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
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
    this.getGamingVideos()
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
          <GamingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
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
              <GamingContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
                <Sidebar />
                <MainContent>
                  <BannerHeading isDarkTheme={isDarkTheme}>
                    <IconContainer isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming size={28} color="#ff0000" />
                    </IconContainer>
                    <HeadingText isDarkTheme={isDarkTheme}>Gaming</HeadingText>
                  </BannerHeading>
                  {this.renderContentBasedOnStatus(isDarkTheme)}
                </MainContent>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
