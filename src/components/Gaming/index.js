import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoLogoGameControllerB} from 'react-icons/io'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import Navbar from '../Navbar'
import GamingVideoItem from '../GamingVideoItem'
import {HomeContainer} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    videoList: [],
    apiStatus: apiStatusConstraints.initial,
  }

  componentDidMount() {
    this.onRenderVideos()
  }

  onRenderVideos = async () => {
    this.setState({apiStatus: apiStatusConstraints.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstraints.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstraints.failure})
    }
  }

  onRenderInprogress = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="40" width="40" />
    </div>
  )

  onRenderDisplayVideos = () => {
    const {videoList} = this.state

    return (
      <ul className="gaming-all-videos">
        {videoList.map(video => (
          <GamingVideoItem videoDetails={video} key={video.id} />
        ))}
      </ul>
    )
  }

  onRenderFailureStatus = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1 className="oops-error">Oops! Something Went Wrong</h1>
      <p className="failure-error-msg">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" className="retry-btn" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  onRenderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.inprogress:
        return this.onRenderInprogress()
      case apiStatusConstraints.success:
        return this.onRenderDisplayVideos()
      case apiStatusConstraints.failure:
        return this.onRenderFailureStatus()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Navbar />
              <HomeContainer mode={isDark}>
                <SideBar />
                <div className="gaming-top-container">
                  <div className="gaming-trending-container">
                    <div className="gaming-fire-container">
                      <IoLogoGameControllerB className="fire-icon" />
                    </div>
                    <h1 className="gaming-trending-heading">Gaming</h1>
                  </div>
                  {this.onRenderAllVideos(isDark)}
                </div>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
