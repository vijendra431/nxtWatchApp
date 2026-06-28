import React from 'react'

// isDarkTheme: boolean - current theme state
// toggleTheme: function - flips light/dark
// Every component that needs theme-aware colors consumes this context,
// rather than each route managing its own separate theme state.
const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default ThemeContext
