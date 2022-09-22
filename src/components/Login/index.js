import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  FormContainer,
  ImageLogo,
  Label,
  Input,
  LabelAndInputContainer,
  CheckBoxContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitFormDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      showErrorMsg,
      errorMsg,
      username,
      password,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <LoginContainer mode={isDark}>
              <FormContainer mode={isDark} onSubmit={this.onSubmitFormDetails}>
                {isDark ? (
                  <ImageLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" />
                ) : (
                  <ImageLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                )}
                <LabelAndInputContainer>
                  <Label htmlFor="username" mode={isDark}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Username"
                    width="100%"
                    id="username"
                    onChange={this.onChangeUserInput}
                    value={username}
                  />
                </LabelAndInputContainer>
                <LabelAndInputContainer>
                  <Label htmlFor="password" mode={isDark}>
                    PASSWORD
                  </Label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    width="100%"
                    id="password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </LabelAndInputContainer>
                <CheckBoxContainer>
                  <Input
                    type="checkbox"
                    size="20px"
                    id="checkbox"
                    onClick={this.onClickShowPassword}
                  />
                  <Label htmlFor="checkbox" mode={isDark}>
                    Show Password
                  </Label>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
