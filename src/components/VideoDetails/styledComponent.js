import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => (props.mode ? '#000000' : '#f8fafc')};
`
export const Title = styled.div`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
`
export const LikeAndDislikeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.like ? '#3b82f6' : '#616e7c')};
  display: flex;
  align-items: center;
`
