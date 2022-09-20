import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {HiOutlineSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import {
  NavbarContainer,
  Image,
  CustomButton,
  PopupContainer,
  ThemeButton,
} from './styledComponent'
import './index.css'

const Navbar = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const onClickChangeTheme = () => {
          changeTheme()
        }

        return (
          <NavbarContainer mode={isDark}>
            {isDark && (
              <Image
                width="130px"
                pad="30px"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              />
            )}
            {!isDark && (
              <Image
                width="130px"
                pad="30px"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              />
            )}
            <NavbarContainer mode={isDark}>
              {isDark && (
                <ThemeButton
                  type="button"
                  onClick={onClickChangeTheme}
                  mode={isDark}
                >
                  <HiOutlineSun className="sun-icon" />
                </ThemeButton>
              )}
              {!isDark && (
                <ThemeButton
                  type="button"
                  onClick={onClickChangeTheme}
                  mode={isDark}
                >
                  <FaMoon className="sun-icon" />
                </ThemeButton>
              )}
              <Image
                width="32px"
                pad="0"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                show="none"
              />
              <GiHamburgerMenu className="menu-icon" />
              <Popup
                modal
                trigger={
                  <CustomButton
                    type="button"
                    bgColor="transparent"
                    border="#ffffff"
                  >
                    Logout
                  </CustomButton>
                }
              >
                {close => (
                  <PopupContainer>
                    <CustomButton
                      type="button"
                      onClick={() => close()}
                      bgColor="transparent"
                      border="#ffffff"
                    >
                      Cancel
                    </CustomButton>
                    <CustomButton
                      type="button"
                      bgColor="#3b82f6"
                      border="transparent"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </CustomButton>
                  </PopupContainer>
                )}
              </Popup>
            </NavbarContainer>
          </NavbarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
