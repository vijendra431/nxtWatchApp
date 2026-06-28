import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: none;
  width: 220px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  min-height: calc(100vh - 64px);

  @media (min-width: 768px) {
    display: flex;
  }
`

export const NavLinksContainer = styled.ul`
  list-style-type: none;
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 24px;
  text-decoration: none;
  background-color: ${props =>
    props.isActive
      ? props.isDarkTheme
        ? '#383838'
        : '#f1f5f9'
      : 'transparent'};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
`

export const LinkText = styled.span`
  font-size: 14px;
  font-weight: ${props => (props.isActive ? '700' : '400')};
`

export const ContactContainer = styled.div`
  padding: 0 24px;
`

export const ContactHeading = styled.h1`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  margin-bottom: 12px;
`

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`

export const SocialIcon = styled.img`
  width: 24px;
`

export const ContactText = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  line-height: 1.5;
`
