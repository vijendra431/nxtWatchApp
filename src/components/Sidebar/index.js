import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
  SidebarContainer,
  NavLinksContainer,
  NavLink,
  LinkText,
  ContactContainer,
  ContactHeading,
  SocialIconsContainer,
  SocialIcon,
  ContactText,
} from './styledComponents'

const Sidebar = props => {
  const {location} = props

  const isActive = path => location.pathname === path

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <SidebarContainer isDarkTheme={isDarkTheme}>
            <NavLinksContainer>
              <NavLink
                to="/"
                isActive={isActive('/')}
                isDarkTheme={isDarkTheme}
              >
                <AiFillHome size={20} />
                <LinkText isActive={isActive('/')}>Home</LinkText>
              </NavLink>
              <NavLink
                to="/trending"
                isActive={isActive('/trending')}
                isDarkTheme={isDarkTheme}
              >
                <HiFire size={20} />
                <LinkText isActive={isActive('/trending')}>Trending</LinkText>
              </NavLink>
              <NavLink
                to="/gaming"
                isActive={isActive('/gaming')}
                isDarkTheme={isDarkTheme}
              >
                <SiYoutubegaming size={20} />
                <LinkText isActive={isActive('/gaming')}>Gaming</LinkText>
              </NavLink>
              <NavLink
                to="/saved-videos"
                isActive={isActive('/saved-videos')}
                isDarkTheme={isDarkTheme}
              >
                <RiPlayListAddFill size={20} />
                <LinkText isActive={isActive('/saved-videos')}>
                  Saved Videos
                </LinkText>
              </NavLink>
            </NavLinksContainer>
            <ContactContainer>
              <ContactHeading isDarkTheme={isDarkTheme}>
                CONTACT US
              </ContactHeading>
              <SocialIconsContainer>
                <SocialIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linkedin logo"
                />
              </SocialIconsContainer>
              <ContactText isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </ContactText>
            </ContactContainer>
          </SidebarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Sidebar)
