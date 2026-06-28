import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  border-bottom: 1px solid
    ${props => (props.isDarkTheme ? '#383838' : '#e2e8f0')};
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const WebsiteLogo = styled.img`
  width: 130px;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 32px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 13px;
  cursor: pointer;
`

export const PopupContent = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PopupText = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-size: 16px;
  margin-bottom: 20px;
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#909090' : '#94a3b8')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  border-radius: 4px;
  padding: 6px 20px;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 6px 20px;
  cursor: pointer;
`
