import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props =>
    props.mode === 'true' ? '#181818 ' : '#f9f9f9'};
`
export const VideosContainer = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${props =>
    props.mode === 'true' ? '#181818 ' : '#f9f9f9'};
`
export const Input = styled.input`
  width: 100%;
  padding: 7px;
  font-size: 16px;
  outline: none;
  border: 1px solid #94a3b8;
  border: none;
  height: 50px;
  font-family: 'roboto';
  padding-left: 15px;
  color: ${props => (props.mode === 'true' ? '#ffffff' : '#000000')};
  font-size: 15px;
  background-color: ${props => (props.mode === 'true' ? '#000000' : '#f8fafc')};
`

export const FailureHeading = styled.h1`
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#212121')};
  font-size: 28px;
  font-family: 'roboto';
  font-weight: 550;
  margin-bottom: 20px;
`
export const FailurePara = styled.p`
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#64748b')};
  font-size: 18px;
  font-family: 'roboto';
  font-weight: 550;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
  height: 300px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  width: 96%;
`
