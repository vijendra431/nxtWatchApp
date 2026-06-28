import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Loader from '../Loader'
import Banner from '../Banner'
import VideoCard from '../VideoCard'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  MainContent,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosContainer,
  VideosList,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onRetry = () => {
    this.getVideos()
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

  renderNoVideosView = isDarkTheme => (
    <NoVideosContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideosHeading isDarkTheme={isDarkTheme}>
        No Search results found
      </NoVideosHeading>
      <NoVideosText isDarkTheme={isDarkTheme}>
        Try different key words or remove search filter
      </NoVideosText>
      <RetryButton type="button" onClick={this.onRetry}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return null
    }

    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosList>
    )
  }

  renderVideosBasedOnStatus = isDarkTheme => {
    const {apiStatus, videosList} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return videosList.length === 0
          ? this.renderNoVideosView(isDarkTheme)
          : this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {searchInput, showBanner} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
                <Sidebar />
                <MainContent>
                  {showBanner && <Banner onCloseBanner={this.onCloseBanner} />}
                  <SearchContainer isDarkTheme={isDarkTheme}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      isDarkTheme={isDarkTheme}
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearch}
                      isDarkTheme={isDarkTheme}
                    >
                      <AiOutlineSearch size={20} />
                    </SearchButton>
                  </SearchContainer>
                  <VideosContainer>
                    {this.renderVideosBasedOnStatus(isDarkTheme)}
                  </VideosContainer>
                </MainContent>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
