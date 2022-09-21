import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'

import './App.css'

class App extends Component {
  state = {isDark: true}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider value={{isDark, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
