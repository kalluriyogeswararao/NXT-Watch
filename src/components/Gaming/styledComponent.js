import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.mode ? '#000000' : '#f8fafc')};
`
export const VideosContainer = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  background-color: ${props => (props.mode ? '#000000' : '#f8fafc')};
`
