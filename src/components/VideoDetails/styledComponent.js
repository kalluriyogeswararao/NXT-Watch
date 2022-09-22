import styled from 'styled-components'

export const ReactHomeContainer = styled.div`
  display: flex;
  min-height: 120vh;
  width: 100vw;
  background-color: ${props => (props.mode === 'true' ? '#000000' : '#f8fafc')};
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
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
`
