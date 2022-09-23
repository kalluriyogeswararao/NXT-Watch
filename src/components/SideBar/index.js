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
          <ul className="nav-links">
            <li>
              <Link to="/" className="link">
                <SelectPageButton mode={isDark}>
                  <AiFillHome className="icons" />
                  <NavLinks mode={isDark}>Home</NavLinks>
                </SelectPageButton>
              </Link>
            </li>
            <li>
              <Link to="/trending" className="link">
                <SelectPageButton mode={isDark}>
                  <HiFire className="icons" />
                  <NavLinks mode={isDark}>Trending</NavLinks>
                </SelectPageButton>
              </Link>
            </li>
            <li>
              <Link to="/gaming" className="link">
                <SelectPageButton mode={isDark}>
                  <IoLogoGameControllerB className="icons" />
                  <NavLinks mode={isDark}>Gaming</NavLinks>
                </SelectPageButton>
              </Link>
            </li>
            <li>
              <Link to="/saved-videos" className="link">
                <SelectPageButton mode={isDark}>
                  <MdPlaylistAdd className="icons" />
                  <NavLinks mode={isDark}>Saved Videos</NavLinks>
                </SelectPageButton>
              </Link>
            </li>
          </ul>
          <div>
            <NavLinks mode={isDark}>CONTACT US</NavLinks>
            <div className="logos-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="logos"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="logos"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                className="logos"
              />
            </div>
            <NavLinks mode={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </NavLinks>
          </div>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
