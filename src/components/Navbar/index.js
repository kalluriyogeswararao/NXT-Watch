import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {HiOutlineSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import {
  NavbarContainer,
  CustomButton,
  PopupContainer,
  ThemeButton,
  Button,
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
            {isDark === 'true' && (
              <Link to="/">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website-logo"
                  className="website-logo"
                />
              </Link>
            )}
            {isDark === 'false' && (
              <Link to="/">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website-logo"
                  className="website-logo"
                />
              </Link>
            )}
            <div className="navbar-container">
              <ThemeButton
                type="button"
                onClick={onClickChangeTheme}
                mode={isDark}
              >
                {isDark === 'true' ? <HiOutlineSun /> : <FaMoon />}
              </ThemeButton>

              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile"
              />
              <GiHamburgerMenu className="menu-icon" />
              <div className="large-screen-container">
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
                        Are you sure, you want to logout?
                      </p>
                      <div className="logout-container">
                        <Button
                          type="button"
                          onClick={() => close()}
                          bgColor="transparent"
                          border="#ffffff"
                          color="#ffffff"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={onClickLogout}
                          bgColor="#3b82f6"
                          border="transparent"
                          color="#ffffff"
                        >
                          Confirm
                        </Button>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </div>
              <div className="small-screen-container">
                <Popup
                  modal
                  trigger={
                    <CustomButton
                      type="button"
                      bgColor="transparent"
                      border="#ffffff"
                      color="#ffffff"
                    >
                      <FiLogOut />
                    </CustomButton>
                  }
                >
                  {close => (
                    <PopupContainer>
                      <p className="logout-msg">
                        Are you sure, you want to logout?
                      </p>
                      <div className="logout-container">
                        <CustomButton
                          type="button"
                          onClick={() => close()}
                          bgColor="transparent"
                          border="#94a3b8"
                          color="#94a3b8"
                        >
                          Cancel
                        </CustomButton>
                        <CustomButton
                          type="button"
                          bgColor="#3b82f6"
                          border="transparent"
                          onClick={onClickLogout}
                          color="#ffffff"
                        >
                          Confirm
                        </CustomButton>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </div>
            </div>
          </NavbarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
