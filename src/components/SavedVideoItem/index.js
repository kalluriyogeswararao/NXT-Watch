import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const SavedVideoItem = props => {
  const {eachVideo} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = eachVideo
  const {name} = channel
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <li>
      <Link to={`/videos/${id}`} className="trend-link">
        <div className="trend-video">
          <img
            src={thumbnailUrl}
            alt="video thumbnail"
            className="trend-video-image"
          />
          <div className="trend-profile-container">
            <p className="trend-channel-title">{title}</p>
            <div>
              <p className="trend-channel-title">{name}</p>
              <div className="trend-views-count-container">
                <p className="trend-channel-name">{viewCount}</p>
                <p className="trend-channel-name">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SavedVideoItem
