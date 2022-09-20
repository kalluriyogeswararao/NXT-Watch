import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`
export const VideosContainer = styled.div`
  padding: 10px;
  width: 100%;
  background-color: ${props => (props.mode ? '#000000' : '#f8fafc')};
`
