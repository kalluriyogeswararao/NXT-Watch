import {MdPlaylistAdd} from 'react-icons/md'
import {
  HomeContainer,
  NoSavedVideos,
  NoSavedVideosDescription,
  SavedContainer,
  SavedHeading,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import Navbar from '../Navbar'
import SavedVideoItem from '../SavedVideoItem'
import './index.css'

const SavedVideos = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value

        const onRenderVideos = () => (
          <div className="top-container">
            <SavedContainer mode={isDark}>
              <div className="fire-container">
                <MdPlaylistAdd className="fire-icon" />
              </div>
              <SavedHeading mode={isDark}>Saved Videos</SavedHeading>
            </SavedContainer>
            <ul className="all-saved-videos">
              {savedVideosList.map(eachVideo => (
                <SavedVideoItem eachVideo={eachVideo} key={eachVideo.id} />
              ))}
            </ul>
          </div>
        )

        const onRenderNoVideosPage = () => (
          <div className="no-saved-videos-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no-saved-videos"
              className="no-saved-videos"
            />
            <NoSavedVideos mode={isDark}>No Saved Videos Found</NoSavedVideos>
            <NoSavedVideosDescription mode={isDark}>
              You can save your videos while watching them
            </NoSavedVideosDescription>
          </div>
        )

        const onRenderSavedVideos = () => {
          if (savedVideosList.length > 0) {
            return onRenderVideos()
          }
          return onRenderNoVideosPage()
        }

        return (
          <>
            <Navbar />
            <HomeContainer mode={isDark}>
              <SideBar />
              <div className="saved-videos-page">{onRenderSavedVideos()}</div>
            </HomeContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default SavedVideos
