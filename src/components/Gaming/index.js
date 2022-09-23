import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoLogoGameControllerB} from 'react-icons/io'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItem'
import {
  HomeContainer,
  GameContainer,
  GameHeading,
  FailureHeading,
  FailurePara,
} from './styledComponent'
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
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="40" width="40" />
    </div>
  )

  onClickRetry = () => {
    this.onRenderVideos()
  }

  onRenderDisplayVideos = isDark => {
    const {videoList} = this.state

    return (
      <>
        <div className="gaming-top-container">
          <GameContainer mode={isDark}>
            <div className="gaming-fire-container">
              <IoLogoGameControllerB className="gaming-fire-icon" />
            </div>
            <GameHeading mode={isDark}>Gaming</GameHeading>
          </GameContainer>
          <ul className="gaming-all-videos">
            {videoList.map(video => (
              <GamingVideoItem videoDetails={video} key={video.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  onRenderFailureStatus = isDark => (
    <div className="failure-container">
      <img
        src={
          isDark === 'true'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
        className="failure-view"
      />
      <FailureHeading mode={isDark}>Oops! Something Went Wrong</FailureHeading>
      <FailurePara mode={isDark}>
        We are having some trouble ot complete your request. Please try again.
      </FailurePara>
      <button type="button" className="retry-btn" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  onRenderAllVideos = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.inprogress:
        return this.onRenderInprogress()
      case apiStatusConstraints.success:
        return this.onRenderDisplayVideos(isDark)
      case apiStatusConstraints.failure:
        return this.onRenderFailureStatus(isDark)
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
            <HomeContainer mode={isDark} data-testid="gaming">
              <Header />
              <div className="gaming-container">
                <SideBar />
                {this.onRenderAllVideos(isDark)}
              </div>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
