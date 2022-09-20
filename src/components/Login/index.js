import {Component} from 'react'

import {
  LoginContainer,
  FormContainer,
  ImageLogo,
  Label,
  Input,
  LabelAndInputContainer,
  CheckBoxContainer,
  LoginButton,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value
          console.log(isDark)

          const onClickChangeTheme = () => {
            changeTheme()
          }

          return (
            <LoginContainer mode={isDark}>
              <LoginButton type="button" onClick={onClickChangeTheme}>
                DarkMode
              </LoginButton>
              <FormContainer mode={isDark}>
                <ImageLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                <LabelAndInputContainer>
                  <Label>USERNAME</Label>
                  <Input
                    type="text"
                    placeholder="Enter Username"
                    width="100%"
                  />
                </LabelAndInputContainer>
                <LabelAndInputContainer>
                  <Label>PASSWORD</Label>
                  <Input
                    type="text"
                    placeholder="Enter Password"
                    width="100%"
                  />
                </LabelAndInputContainer>
                <CheckBoxContainer>
                  <Input type="checkbox" size="20px" />
                  <Label>Show Password</Label>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
              </FormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
