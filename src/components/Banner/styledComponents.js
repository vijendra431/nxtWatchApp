import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-bottom: 20px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #1e293b;
`

export const BannerLogo = styled.img`
  width: 150px;
  margin-bottom: 12px;
`

export const BannerText = styled.p`
  font-size: 14px;
  color: #1e293b;
  margin-bottom: 12px;
`

export const GetItButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
`
