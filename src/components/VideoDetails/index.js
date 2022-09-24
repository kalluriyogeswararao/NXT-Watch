import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import SideBar from '../SideBar'
import Header from '../Header'
import {
  ReactHomeContainer,
  Title,
  LikeAndDislikeButton,
} from './styledComponent'
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
    isLike: false,
    isDislike: false,
    isSaveVideo: false,
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

  onClickLikeButton = () => {
    this.setState({isLike: true, isDislike: false})
  }

  onClickDislikeButton = () => {
    this.setState({isDislike: true, isLike: false})
  }

  onRenderInprogress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="40" width="40" />
    </div>
  )

  onRenderSuccessVideo = isDark => {
    const {videoList, isLike, isDislike, isSaveVideo} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {addVideoItem} = value
          const {
            title,
            videoUrl,
            channel,
            viewCount,
            publishedAt,
            description,
          } = videoList
          const {profileImageUrl, subscriberCount, name} = channel
          const date = formatDistanceToNow(new Date(publishedAt))

          const onSaveVideoButton = () => {
            this.setState(prevState => ({
              isSaveVideo: !prevState.isSaveVideo,
            }))
            addVideoItem({...videoList, isLike, isDislike})
          }

          return (
            <div className="video-item-container">
              <div className="video-Details-container">
                <div className="react-player-container">
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    muted
                    width="99%"
                    height="560px"
                    className="large-page-player"
                  />
                </div>
                <Title mode={isDark}>{title}</Title>
                <div className="details-container">
                  <div className="view-container">
                    <p className="views">{viewCount} views </p>
                    <p className="views">*</p>
                    <p className="views">{date}</p>
                  </div>
                  <div className="like-main-container">
                    <div className="like-container">
                      <LikeAndDislikeButton
                        type="button"
                        onClick={this.onClickLikeButton}
                        like={isLike}
                      >
                        <BiLike className="like-icon" />
                        Like
                      </LikeAndDislikeButton>
                    </div>
                    <div className="dislike-container">
                      <LikeAndDislikeButton
                        type="button"
                        onClick={this.onClickDislikeButton}
                        like={isDislike}
                      >
                        <BiDislike className="like-icon" />
                        Dislike
                      </LikeAndDislikeButton>
                    </div>
                    <div className="dislike-container">
                      <button
                        type="button"
                        onClick={onSaveVideoButton}
                        className={isSaveVideo ? 'save-btn' : 'not-save-btn'}
                      >
                        <MdPlaylistAdd className="media" />
                        {isSaveVideo ? 'Saved' : 'Save'}
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="hr-line" />
                <div className="subscriber-container">
                  <img
                    src={profileImageUrl}
                    alt="channel logo"
                    className="profile"
                  />
                  <div>
                    <Title mode={isDark}>{name}</Title>
                    <p className="channel-name">
                      {subscriberCount} subscribers
                    </p>
                    <Title mode={isDark}>{description}</Title>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onClickRetry = () => {
    this.getVideoItemDetails()
  }

  onRenderFailurePage = isDark => (
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
      <h1 className="oops-error">Oops! Something Went Wrong</h1>
      <p className="failure-error-msg">
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" className="retry-btn" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  onRenderVideoPlay = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.inprogress:
        return this.onRenderInprogress()
      case apiStatusConstraints.success:
        return this.onRenderSuccessVideo(isDark)
      case apiStatusConstraints.failure:
        return this.onRenderFailurePage(isDark)
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
            <ReactHomeContainer mode={isDark} data-testid="videoItemDetails">
              <Header />
              <div className="vide-details-container">
                <SideBar />
                {this.onRenderVideoPlay(isDark)}
              </div>
            </ReactHomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
