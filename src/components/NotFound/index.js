import SideBar from '../SideBar'
import Navbar from '../Navbar'

import {HomeContainer, FailureHeading, FailurePara} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <>
          <Navbar />
          <HomeContainer mode={isDark}>
            <SideBar />
            <div className="notfound-container">
              <img
                src={
                  isDark === 'true'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="notfound"
                className="notfound"
              />
              <FailureHeading mode={isDark}>Page Not Found</FailureHeading>
              <FailurePara mode={isDark}>
                We are sorry, the page you requested could not be found
              </FailurePara>
            </div>
          </HomeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
