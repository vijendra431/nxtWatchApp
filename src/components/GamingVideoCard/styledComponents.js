import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardLink = styled(Link)`
  text-decoration: none;
  display: block;
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 4px;
`

export const ViewCount = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`
