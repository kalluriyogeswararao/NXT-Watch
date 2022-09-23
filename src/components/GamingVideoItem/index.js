import {Link} from 'react-router-dom'
import {VideosContainer, TitlePara} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideosContainer mode={isDark}>
            <Link to={`/videos/${id}`} className="game-link">
              <div className="game-video">
                <img
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  className="game-video-image"
                />
                <div className="game-profile-container">
                  <TitlePara mode={isDark}>{title}</TitlePara>
                  <div>
                    <div className="game-views-count-container">
                      <p className="game-channel-name">
                        {viewCount} Watching Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </VideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
