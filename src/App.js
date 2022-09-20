import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDark: false}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider value={{isDark, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
