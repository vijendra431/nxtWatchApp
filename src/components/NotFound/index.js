import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Header />
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not found"
            />
            <NotFoundHeading isDarkTheme={isDarkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundText isDarkTheme={isDarkTheme}>
              we are sorry, the page you requested could not be found
            </NotFoundText>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
