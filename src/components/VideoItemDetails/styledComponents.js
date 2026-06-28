import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: calc(100vh - 64px);
`

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 900px;
`

export const PlayerContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 16px;
`

export const VideoTitle = styled.h1`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 12px;
`

export const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
`

export const ViewsAndDate = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 20px;
`

// REQUIRED COLORS per spec: active button -> #2563eb, inactive -> #64748b
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid ${props => (props.isDarkTheme ? '#383838' : '#e2e8f0')};
  margin-bottom: 16px;
`

export const ChannelContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export const ChannelDetails = styled.div``

export const ChannelName = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 4px;
`

export const SubscriberCount = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#1e293b')};
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
