import {Component} from 'react'
import {RiPlayListAddFill} from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosContainer,
  MainContent,
  BannerHeading,
  IconContainer,
  HeadingText,
  VideosList,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedText,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSavedVideosView = isDarkTheme => (
    <NoSavedContainer>
      <NoSavedImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHeading isDarkTheme={isDarkTheme}>
        No saved videos found
      </NoSavedHeading>
      <NoSavedText isDarkTheme={isDarkTheme}>
        You can save your videos while watching them
      </NoSavedText>
    </NoSavedContainer>
  )

  renderSavedVideosList = savedVideos => (
    <VideosList>
      {savedVideos.map(eachVideo => (
        <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
      ))}
    </VideosList>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value

          return (
            <>
              <Header />
              <SavedVideosContainer
                data-testid="savedVideos"
                isDarkTheme={isDarkTheme}
              >
                <Sidebar />
                <MainContent>
                  <BannerHeading isDarkTheme={isDarkTheme}>
                    <IconContainer isDarkTheme={isDarkTheme}>
                      <RiPlayListAddFill size={28} color="#ff0000" />
                    </IconContainer>
                    <HeadingText isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </HeadingText>
                  </BannerHeading>
                  {savedVideos.length === 0
                    ? this.renderNoSavedVideosView(isDarkTheme)
                    : this.renderSavedVideosList(savedVideos)}
                </MainContent>
              </SavedVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
