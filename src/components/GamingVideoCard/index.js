import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {CardLink, Thumbnail, VideoTitle, ViewCount} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <CardLink to={`/videos/${id}`}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
            <ViewCount isDarkTheme={isDarkTheme}>
              {viewCount} Watching Worldwide
            </ViewCount>
          </CardLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
