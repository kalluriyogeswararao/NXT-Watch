import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {HomeContainer, TitlePara} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

class VideoItem extends Component {
  onRenderVideoItem = isDark => {
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
      <li>
        <Link to={`/videos/${id}`} className="link">
          <div className="video">
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="video-image"
            />
            <div className="profile-container">
              <img
                src={profileImageUrl}
                alt="channel logo"
                className="profileImage"
              />
              <div>
                <TitlePara mode={isDark}>{title}</TitlePara>
                <p className="channel-name">{name}</p>
                <div className="views-count-container">
                  <p className="channel-name">{viewCount}</p>
                  <p className="channel-name">{date}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return <HomeContainer>{this.onRenderVideoItem(isDark)}</HomeContainer>
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItem
