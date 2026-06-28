import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaMoon, FaSun} from 'react-icons/fa'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  LogoLink,
  WebsiteLogo,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  PopupContent,
  PopupText,
  PopupButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

class Header extends Component {
  onConfirmLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <HeaderContainer isDarkTheme={isDarkTheme}>
              <LogoLink to="/">
                <WebsiteLogo src={logoUrl} alt="website logo" />
              </LogoLink>
              <ActionsContainer>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={toggleTheme}
                  isDarkTheme={isDarkTheme}
                >
                  {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
                </ThemeButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={triggerProps => (
                    <LogoutButton
                      type="button"
                      {...triggerProps}
                      isDarkTheme={isDarkTheme}
                    >
                      Logout
                    </LogoutButton>
                  )}
                  className="popup-content"
                >
                  {close => (
                    <PopupContent isDarkTheme={isDarkTheme}>
                      <PopupText isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout?
                      </PopupText>
                      <PopupButtonsContainer>
                        <CancelButton
                          type="button"
                          isDarkTheme={isDarkTheme}
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={this.onConfirmLogout}
                        >
                          Confirm
                        </ConfirmButton>
                      </PopupButtonsContainer>
                    </PopupContent>
                  )}
                </Popup>
              </ActionsContainer>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
