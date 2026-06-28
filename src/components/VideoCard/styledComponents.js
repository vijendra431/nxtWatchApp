import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-bottom: 24px;
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
`

export const DetailsContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

export const TextContainer = styled.div`
  flex: 1;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 4px;
`

export const ChannelName = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  margin-bottom: 2px;
`

export const MetaText = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`
