import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {HiOutlineSun} from 'react-icons/hi'
import {
  NavbarContainer,
  Image,
  CustomButton,
  PopupContainer,
} from './styledComponent'
import './index.css'

const Navbar = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavbarContainer>
      <Image
        width="130px"
        pad="30px"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
      />
      <NavbarContainer>
        <HiOutlineSun className="sun-icon" />
        <Image
          width="32px"
          pad="0"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <Popup
          modal
          trigger={
            <CustomButton type="button" bgColor="transparent" border="#ffffff">
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
}

export default withRouter(Navbar)
