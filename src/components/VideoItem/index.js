import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import SideBar from '../SideBar'
import {HomeContainer} from './styledComponent'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

class VideoItem extends Component {
  onRenderVideoItem = () => {
    const {videoDetails} = this.props
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
    } = videoDetails
    const {name, profileImageUrl} = channel
    const date = formatDistanceToNow(new Date(publishedAt))
    return (
      <Link to={`/videos/${id}`} className="link">
        <li className="video">
          <img src={thumbnailUrl} alt={title} className="video-image" />
          <div className="profile-container">
            <img
              src={profileImageUrl}
              alt={profileImageUrl}
              className="profileImage"
            />
            <div>
              <p className="title">{title}</p>
              <p className="channel-name">{name}</p>
              <div className="views-count-container">
                <p className="channel-name">{viewCount}</p>
                <p className="channel-name">{date}</p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return <HomeContainer>{this.onRenderVideoItem()}</HomeContainer>
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItem
