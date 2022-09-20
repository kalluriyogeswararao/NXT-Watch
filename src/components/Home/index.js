import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import {ImCross} from 'react-icons/im'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import Navbar from '../Navbar'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'
import {HomeContainer, VideosContainer, Input} from './styledComponent'
import './index.css'

const apiStatusConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    isPrime: true,
    apiStatus: apiStatusConstraints.initial,
  }

  componentDidMount() {
    this.onRenderVideos()
  }

  onRenderVideos = async () => {
    this.setState({apiStatus: apiStatusConstraints.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=`
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

  onClickRemovePrime = () => {
    this.setState({isPrime: false})
  }

  renderPrimePoster = () => (
    <div className="prime-poster-container">
      <button
        className="cross-btn"
        type="button"
        onClick={this.onClickRemovePrime}
      >
        <ImCross className="cross-icon" />
      </button>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
        className="web-logo"
      />
      <p className="para">Buy Nxt Watch Premium prepaid plans with UPI</p>
      <button type="button" className="get-it-now-btn">
        GET IT NOW
      </button>
    </div>
  )

  onRenderInprogress = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="40" width="40" />
    </div>
  )

  onRenderDisplayVideos = () => {
    const {videoList} = this.state

    return (
      <ul className="all-videos">
        {videoList.map(video => (
          <VideoItem videoDetails={video} key={video.id} />
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
    const {isPrime} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Navbar />
              <HomeContainer>
                <SideBar />
                <VideosContainer mode={isDark}>
                  {isPrime && this.renderPrimePoster()}
                  <div className="input-container">
                    <Input
                      mode={isDark}
                      type="search"
                      className="input"
                      placeholder="Search"
                    />
                    <button type="button" className="search-button">
                      <BiSearch className="search-icon" />
                    </button>
                  </div>

                  <div className="display-videos">
                    {this.onRenderAllVideos()}
                  </div>
                </VideosContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
