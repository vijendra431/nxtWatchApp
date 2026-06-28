import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: calc(100vh - 64px);
`

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid ${props => (props.isDarkTheme ? '#606060' : '#cbd5e1')};
  border-radius: 4px;
  max-width: 300px;
  margin-bottom: 20px;
  overflow: hidden;
`

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px 12px;
  font-size: 14px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const SearchButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#383838' : '#f1f5f9')};
  border: none;
  border-left: 1px solid ${props => (props.isDarkTheme ? '#606060' : '#cbd5e1')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  padding: 0 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const VideosContainer = styled.div``

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

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

export const NoVideosImage = styled.img`
  width: 280px;
  margin-bottom: 20px;
`

export const NoVideosHeading = styled.h1`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 8px;
`

export const NoVideosText = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  margin-bottom: 16px;
`
