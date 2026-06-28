import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  // ADD: spread into a new array, never push directly onto state.
  addSavedVideo = videoDetails => {
    this.setState(prevState => {
      // Guard against duplicates if Save is somehow clicked twice
      // without a re-render in between.
      const alreadySaved = prevState.savedVideos.some(
        video => video.id === videoDetails.id,
      )
      if (alreadySaved) {
        return {savedVideos: prevState.savedVideos}
      }
      return {savedVideos: [...prevState.savedVideos, videoDetails]}
    })
  }

  // REMOVE: filter by id, same pattern used in every list project so far.
  removeSavedVideo = id => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(video => video.id !== id),
    }))
  }

  render() {
    const {isDarkTheme, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          savedVideos,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
