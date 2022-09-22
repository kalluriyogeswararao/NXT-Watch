import {MdPlaylistAdd} from 'react-icons/md'
import {HomeContainer} from './styledComponent'

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

        const onRenderSavedVideos = () => (
          <ul>
            {savedVideosList.map(eachVideo => (
              <SavedVideoItem eachVideo={eachVideo} key={eachVideo.id} />
            ))}
          </ul>
        )

        return (
          <>
            <Navbar />
            <HomeContainer mode={isDark}>
              <SideBar />
              <div className="top-container">
                <div className="trending-container">
                  <div className="fire-container">
                    <MdPlaylistAdd className="fire-icon" />
                  </div>
                  <h1 className="trending-heading">Saved Videos</h1>
                </div>
                {onRenderSavedVideos()}
              </div>
            </HomeContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default SavedVideos
