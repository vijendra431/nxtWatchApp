import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const NotFoundImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const NotFoundHeading = styled.h1`
  font-size: 22px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 8px;
`

export const NotFoundText = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`
