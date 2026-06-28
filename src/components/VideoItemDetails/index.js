import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {RiPlayListAddLine, RiPlayListAddFill} from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Loader from '../Loader'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemDetailsContainer,
  MainContent,
  PlayerContainer,
  VideoTitle,
  MetaContainer,
  ViewsAndDate,
  ActionsContainer,
  ActionButton,
  Separator,
  Description,
  ChannelContainer,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  SubscriberCount,
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

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    // isLiked / isDisliked are independent booleans, but onClickLike
    // and onClickDislike enforce mutual exclusivity - the spec
    // explicitly requires that activating one deactivates the other.
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const {video_details: videoDetailsApi} = data
      const updatedVideoDetails = {
        id: videoDetailsApi.id,
        title: videoDetailsApi.title,
        videoUrl: videoDetailsApi.video_url,
        thumbnailUrl: videoDetailsApi.thumbnail_url,
        channel: {
          name: videoDetailsApi.channel.name,
          profileImageUrl: videoDetailsApi.channel.profile_image_url,
          subscriberCount: videoDetailsApi.channel.subscriber_count,
        },
        viewCount: videoDetailsApi.view_count,
        publishedAt: videoDetailsApi.published_at,
        description: videoDetailsApi.description,
      }
      this.setState({
        videoDetails: updatedVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  // Like and Dislike are mutually exclusive - clicking one always
  // forces the other off, regardless of its previous state.
  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onClickSave = () => {
    const {videoDetails} = this.state
    const {addSavedVideo, removeSavedVideo, savedVideos} = this.context

    const isAlreadySaved = savedVideos.some(
      video => video.id === videoDetails.id,
    )

    if (isAlreadySaved) {
      removeSavedVideo(videoDetails.id)
    } else {
      addSavedVideo(videoDetails)
    }
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

  renderSuccessView = isDarkTheme => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {savedVideos} = this.context
    const {
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
      id,
    } = videoDetails

    const isSaved = savedVideos.some(video => video.id === id)

    return (
      <>
        <PlayerContainer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
        </PlayerContainer>
        <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
        <MetaContainer>
          <ViewsAndDate isDarkTheme={isDarkTheme}>
            {viewCount} views ·{' '}
            {publishedAt
              ? `${formatDistanceToNow(new Date(publishedAt))} ago`
              : ''}
          </ViewsAndDate>
          <ActionsContainer>
            <ActionButton
              type="button"
              isActive={isLiked}
              onClick={this.onClickLike}
            >
              {isLiked ? <AiFillLike size={18} /> : <AiOutlineLike size={18} />}
              <span>Like</span>
            </ActionButton>
            <ActionButton
              type="button"
              isActive={isDisliked}
              onClick={this.onClickDislike}
            >
              {isDisliked ? (
                <AiFillDislike size={18} />
              ) : (
                <AiOutlineDislike size={18} />
              )}
              <span>Dislike</span>
            </ActionButton>
            <ActionButton
              type="button"
              isActive={isSaved}
              onClick={this.onClickSave}
            >
              {isSaved ? (
                <RiPlayListAddFill size={18} />
              ) : (
                <RiPlayListAddLine size={18} />
              )}
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </ActionButton>
          </ActionsContainer>
        </MetaContainer>
        <Separator isDarkTheme={isDarkTheme} />
        <ChannelContainer>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
          <ChannelDetails>
            <ChannelName isDarkTheme={isDarkTheme}>{channel.name}</ChannelName>
            <SubscriberCount isDarkTheme={isDarkTheme}>
              {channel.subscriberCount} subscribers
            </SubscriberCount>
          </ChannelDetails>
        </ChannelContainer>
        <Description isDarkTheme={isDarkTheme}>{description}</Description>
      </>
    )
  }

  renderContentBasedOnStatus = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
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
              <VideoItemDetailsContainer
                data-testid="videoItemDetails"
                isDarkTheme={isDarkTheme}
              >
                <Sidebar />
                <MainContent>
                  {this.renderContentBasedOnStatus(isDarkTheme)}
                </MainContent>
              </VideoItemDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

VideoItemDetails.contextType = ThemeContext

export default VideoItemDetails
