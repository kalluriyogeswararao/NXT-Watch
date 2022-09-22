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
