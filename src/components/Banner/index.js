import {Component} from 'react'

import {
  BannerContainer,
  BannerLogo,
  BannerText,
  GetItButton,
  CloseButton,
} from './styledComponents'

class Banner extends Component {
  render() {
    const {onCloseBanner} = this.props

    return (
      <BannerContainer data-testid="banner">
        <CloseButton type="button" data-testid="close" onClick={onCloseBanner}>
          X
        </CloseButton>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetItButton type="button">GET IT NOW</GetItButton>
      </BannerContainer>
    )
  }
}

export default Banner
