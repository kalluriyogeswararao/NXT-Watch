import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {VideosContainer, TitlePara} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name} = channel
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <li>
            <VideosContainer mode={isDark}>
              <Link to={`/videos/${id}`} className="trend-link-t">
                <div className="trend-video">
                  <img
                    src={thumbnailUrl}
                    alt="video thumbnail"
                    className="trend-video-image-t"
                  />
                  <div className="trend-profile-container">
                    <TitlePara mode={isDark}>{title}</TitlePara>
                    <div>
                      <p className="trend-channel-name">{name}</p>
                      <div className="trend-views-count-container">
                        <p className="trend-channel-name">{viewCount}</p>
                        <p className="trend-channel-name">{date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </VideosContainer>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItem
