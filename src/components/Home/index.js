import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import {ImCross} from 'react-icons/im'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import Header from '../Header'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  VideosContainer,
  Input,
  FailureHeading,
  FailurePara,
  BannerContainer,
} from './styledComponent'
import './index.css'

const apiStatusConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    isPrime: true,
    apiStatus: apiStatusConstraints.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.onRenderVideos()
  }

  onRenderVideos = async () => {
    this.setState({apiStatus: apiStatusConstraints.inprogress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstraints.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstraints.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchResults = () => {
    this.onRenderVideos()
  }

  onClickRetry = () => {
    this.onRenderVideos()
  }

  onClickRemovePrime = () => {
    this.setState({isPrime: false})
  }

  renderPrimePoster = () => (
    <BannerContainer data-testid="banner">
      <button
        className="cross-btn"
        type="button"
        onClick={this.onClickRemovePrime}
        data-testid="close"
      >
        <ImCross className="cross-icon" />
      </button>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
        className="web-logo"
      />
      <p className="para">Buy Nxt Watch Premium prepaid plans with UPI</p>
      <button type="button" className="get-it-now-btn">
        GET IT NOW
      </button>
    </BannerContainer>
  )

  onRenderInprogress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="40" width="40" />
    </div>
  )

  renderVideos = () => {
    const {videoList} = this.state
    return (
      <ul className="all-videos">
        {videoList.map(video => (
          <VideoItem videoDetails={video} key={video.id} />
        ))}
      </ul>
    )
  }

  noSearchResults = isDark => (
    <div className="no-videos-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="no-videos"
      />
      <FailureHeading mode={isDark}>No Search Results Found</FailureHeading>
      <FailurePara mode={isDark}>
        Try different key words or remove search filter
      </FailurePara>
      <button type="button" className="retry-btn" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  onRenderDisplayVideos = isDark => {
    const {videoList} = this.state

    if (videoList.length > 0) {
      return this.renderVideos()
    }
    return this.noSearchResults(isDark)
  }

  onRenderFailureStatus = isDark => (
    <div className="failure-container">
      <img
        src={
          isDark === 'true'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
        className="failure-view"
      />
      <FailureHeading mode={isDark}>Oops! Something Went Wrong</FailureHeading>
      <FailurePara mode={isDark}>
        We are having some trouble ot complete your request. Please try again.
      </FailurePara>
      <button type="button" className="retry-btn" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  onRenderAllVideos = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.inprogress:
        return this.onRenderInprogress()
      case apiStatusConstraints.success:
        return this.onRenderDisplayVideos(isDark)
      case apiStatusConstraints.failure:
        return this.onRenderFailureStatus(isDark)
      default:
        return null
    }
  }

  render() {
    const {isPrime} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeContainer mode={isDark} data-testid="home">
              <Header />
              <div className="home-container">
                <SideBar />
                <VideosContainer mode={isDark}>
                  {isPrime && this.renderPrimePoster()}
                  <div className="input-container">
                    <Input
                      mode={isDark}
                      type="search"
                      className="input"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                    />
                    <button
                      type="button"
                      className="search-button"
                      onClick={this.searchResults}
                      data-testid="searchButton"
                    >
                      <BiSearch className="search-icon" />
                    </button>
                  </div>

                  <div className="display-videos">
                    {this.onRenderAllVideos(isDark)}
                  </div>
                </VideosContainer>
              </div>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
