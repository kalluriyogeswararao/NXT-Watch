import SideBar from '../SideBar'
import Header from '../Header'

import {HomeContainer, FailureHeading, FailurePara} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <>
          <HomeContainer mode={isDark}>
            <Header />
            <div className="notfound-data-container">
              <SideBar />
              <div className="notfound-container">
                <img
                  src={
                    isDark === 'true'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                  className="notfound"
                />
                <FailureHeading mode={isDark}>Page Not Found</FailureHeading>
                <FailurePara mode={isDark}>
                  we are sorry, the page you requested could not be found.
                </FailurePara>
              </div>
            </div>
          </HomeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
