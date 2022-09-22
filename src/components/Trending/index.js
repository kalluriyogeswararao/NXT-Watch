import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import Navbar from '../Navbar'
import TrendingVideoItem from '../TrendingVideoItem'
import {HomeContainer} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Trending extends Component {
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
    const url = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
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
      <ul className="trend-all-videos">
        {videoList.map(video => (
          <TrendingVideoItem videoDetails={video} key={video.id} />
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
                <div className="top-container">
                  <div className="trending-container">
                    <div className="fire-container">
                      <HiFire className="fire-icon" />
                    </div>
                    <h1 className="trending-heading">Trending</h1>
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

export default Trending
