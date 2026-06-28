import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginFormContainer,
  WebsiteLogo,
  Form,
  InputLabel,
  InputField,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = isDarkTheme => {
    const {password, showPassword} = this.state

    return (
      <>
        <InputLabel htmlFor="password" isDarkTheme={isDarkTheme}>
          PASSWORD
        </InputLabel>
        <InputField
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          isDarkTheme={isDarkTheme}
        />
      </>
    )
  }

  renderUsernameField = isDarkTheme => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username" isDarkTheme={isDarkTheme}>
          USERNAME
        </InputLabel>
        <InputField
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          isDarkTheme={isDarkTheme}
        />
      </>
    )
  }

  render() {
    const {showPassword, showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer isDarkTheme={isDarkTheme}>
                <WebsiteLogo src={logoUrl} alt="website logo" />
                <Form onSubmit={this.onSubmitForm}>
                  {this.renderUsernameField(isDarkTheme)}
                  {this.renderPasswordField(isDarkTheme)}
                  <CheckboxContainer>
                    <CheckboxInput
                      type="checkbox"
                      id="showPassword"
                      checked={showPassword}
                      onChange={this.onToggleShowPassword}
                    />
                    <CheckboxLabel
                      htmlFor="showPassword"
                      isDarkTheme={isDarkTheme}
                    >
                      Show Password
                    </CheckboxLabel>
                  </CheckboxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
                </Form>
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
