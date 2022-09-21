import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {MdPlaylistAdd} from 'react-icons/md'
import {SideBarContainer, NavLinks, SelectPageButton} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <SideBarContainer mode={isDark}>
          <Link to="/" className="link">
            <SelectPageButton mode={isDark}>
              <AiFillHome className="icons" />
              <NavLinks mode={isDark}>Home</NavLinks>
            </SelectPageButton>
          </Link>
          <Link to="/trending" className="link">
            <SelectPageButton mode={isDark}>
              <HiFire className="icons" />
              <NavLinks mode={isDark}>Trending</NavLinks>
            </SelectPageButton>
          </Link>
          <Link to="/gaming" className="link">
            <SelectPageButton mode={isDark}>
              <IoLogoGameControllerB className="icons" />
              <NavLinks mode={isDark}>Gaming</NavLinks>
            </SelectPageButton>
          </Link>
          <Link to="/saved-videos" className="link">
            <SelectPageButton mode={isDark}>
              <MdPlaylistAdd className="icons" />
              <NavLinks mode={isDark}>Saved Videos</NavLinks>
            </SelectPageButton>
          </Link>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
