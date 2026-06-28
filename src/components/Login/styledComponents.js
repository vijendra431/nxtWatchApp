import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const LoginFormContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  border: 1px solid ${props => (props.isDarkTheme ? '#424242' : '#cccccc')};
  border-radius: 8px;
  padding: 32px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  width: 180px;
  margin-bottom: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#231f20')};
  margin-bottom: 6px;
`

export const InputField = styled.input`
  border: 1px solid ${props => (props.isDarkTheme ? '#606060' : '#94a3b8')};
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 14px;
  margin-bottom: 16px;
  outline: none;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const CheckboxInput = styled.input`
  margin-right: 8px;
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#231f20')};
  cursor: pointer;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin-top: 10px;
`
