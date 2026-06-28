import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: calc(100vh - 64px);
`

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`

export const BannerHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f5f9')};
  padding: 20px;
  margin-bottom: 20px;
`

export const IconContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#383838' : '#e2e8f0')};
  padding: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeadingText = styled.h1`
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const VideosList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  list-style-type: none;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

export const FailureImage = styled.img`
  width: 280px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 8px;
`

export const FailureText = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  margin-bottom: 16px;
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
`
