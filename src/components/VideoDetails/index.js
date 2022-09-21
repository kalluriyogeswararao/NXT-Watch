import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import SideBar from '../SideBar'
import Navbar from '../Navbar'
import {HomeContainer, Title} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstraints.initial,
    videoList: {},
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstraints.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

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

  onRenderSuccessVideo = () => {
    const {videoList} = this.state
    const {
      id,
      title,
      thumbnailUrl,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoList
    const {profileImageUrl, subscriberCount, name} = channel
    const date = formatDistanceToNow(new Date(publishedAt))

    return (
      <div className="video-item-container">
        <div className="video-Details-container">
          <ReactPlayer url={videoUrl} controls muted />
          <Title>{title}</Title>
          <div className="details-container">
            <div className="view-container">
              <p className="views">{viewCount} views </p>
              <p className="views">*</p>
              <p className="views">{date}</p>
            </div>
            <div className="like-main-container">
              <div className="like-container">
                <button type="button" className="like-button">
                  <BiLike className="like-icon" />
                </button>
                <p className="like-icon-name">Like</p>
              </div>
              <div className="dislike-container">
                <button type="button" className="like-button">
                  <BiDislike className="like-icon" />
                </button>
                <p className="like-icon-name">Dislike</p>
              </div>
              <div className="dislike-container">
                <button type="button" className="like-button">
                  <MdPlaylistAdd className="like-icon" />
                </button>
                <p className="like-icon-name">Save</p>
              </div>
            </div>
          </div>
          <hr className="hr-line" />
          <div>
            <img src={profileImageUrl} alt="profile" className="profile" />
          </div>
        </div>
      </div>
    )
  }

  onRenderFailurePage = () => (
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

  onRenderVideoPlay = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.inprogress:
        return this.onRenderInprogress()
      case apiStatusConstraints.success:
        return this.onRenderSuccessVideo()
      case apiStatusConstraints.failure:
        return this.onRenderFailurePage()
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
                {this.onRenderVideoPlay()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
