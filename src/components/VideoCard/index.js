import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  CardLink,
  Thumbnail,
  DetailsContainer,
  ChannelLogo,
  TextContainer,
  VideoTitle,
  ChannelName,
  MetaText,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <CardLink to={`/videos/${id}`}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <DetailsContainer>
              <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
              <TextContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <ChannelName isDarkTheme={isDarkTheme}>
                  {channel.name}
                </ChannelName>
                <MetaText isDarkTheme={isDarkTheme}>
                  {viewCount} views{' '}
                  {publishedAt
                    ? `· ${formatDistanceToNow(new Date(publishedAt))} ago`
                    : ''}
                </MetaText>
              </TextContainer>
            </DetailsContainer>
          </CardLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
