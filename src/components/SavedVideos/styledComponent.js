import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => (props.mode === 'true' ? '#000000' : '#f8fafc')};
`
export const VideosContainer = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  width: 100%;
  background-color: ${props => (props.mode === 'true' ? '#000000' : '#f8fafc')};
`
export const NoSavedVideos = styled.h1`
  font-size: 30px;
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#000000')};
  font-family: 'roboto';
  margin-bottom: 20px;
`
export const NoSavedVideosDescription = styled.p`
  font-size: 20px;
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#000000')};
  font-family: 'roboto';
`
export const SavedContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.mode === 'true' ? '#212121' : '#f8fafc')};
`
export const SavedHeading = styled.h1`
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#212121')};
  font-size: 28px;
  font-family: 'roboto';
  font-weight: 550;
`
