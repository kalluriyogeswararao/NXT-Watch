import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {VideosContainer, TitlePara} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const SavedVideoItem = props => {
  const {eachVideo} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {
          id,
          title,
          thumbnailUrl,
          channel,
          viewCount,
          publishedAt,
        } = eachVideo
        const {name} = channel
        const date = formatDistanceToNow(new Date(publishedAt))

        return (
          <li>
            <VideosContainer mode={isDark}>
              <Link to={`/videos/${id}`} className="trend-link">
                <div className="trend-video">
                  <img
                    src={thumbnailUrl}
                    alt="video thumbnail"
                    className="trend-video-image"
                  />
                  <div className="trend-profile-container">
                    <TitlePara mode={isDark}>{title}</TitlePara>
                    <div>
                      <TitlePara mode={isDark}>{name}</TitlePara>
                      <div className="trend-views-count-container">
                        <TitlePara className="trend-channel-name" mode={isDark}>
                          {viewCount}
                        </TitlePara>
                        <TitlePara className="trend-channel-name" mode={isDark}>
                          {date}
                        </TitlePara>
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

export default SavedVideoItem
