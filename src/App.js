import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'

import './App.css'

class App extends Component {
  state = {isDark: true, savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onRemoveVideo = id => {
    const {savedVideosList} = this.state
    const filterData = savedVideosList.filter(item => item.id !== id)
    this.setState({savedVideosList: filterData})
  }

  addVideoItem = video => {
    const {savedVideosList} = this.state
    const repeatVideo = savedVideosList.find(each => each.id === video.id)
    if (repeatVideo === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    } else {
      this.onRemoveVideo(video.id)
    }
  }

  render() {
    const {isDark, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          savedVideosList,
          changeTheme: this.changeTheme,
          addVideoItem: this.addVideoItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
