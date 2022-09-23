import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {HiOutlineSun} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import {
  NavbarContainer,
  CustomButton,
  PopupContainer,
  ThemeButton,
} from './styledComponent'
import './index.css'

const Header = props => {
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
            <Link to="/">
              <img
                src={
                  isDark === 'true'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
                className="website-logo"
              />
            </Link>

            <div className="navbar-container">
              <ThemeButton
                type="button"
                onClick={onClickChangeTheme}
                mode={isDark}
                data-testid="theme"
              >
                {isDark === 'true' ? <HiOutlineSun /> : <FaMoon />}
              </ThemeButton>

              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile"
              />
              <GiHamburgerMenu className="menu-icon" />

              <Popup
                modal
                trigger={
                  <CustomButton type="button" mode={isDark}>
                    Logout
                  </CustomButton>
                }
              >
                {close => (
                  <PopupContainer>
                    <p className="logout-msg">
                      Are you sure, you want to logout
                    </p>
                    <div className="logout-container">
                      <button
                        type="button"
                        onClick={() => close()}
                        className="cancel-button"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={onClickLogout}
                        type="button"
                        className="confirm-button"
                      >
                        Confirm
                      </button>
                    </div>
                  </PopupContainer>
                )}
              </Popup>
            </div>
          </NavbarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
