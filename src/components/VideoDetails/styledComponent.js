import styled from 'styled-components'

export const ReactHomeContainer = styled.div`
  min-height: 120vh;
  width: 100vw;
  background-color: ${props => (props.mode === 'true' ? '#0f0f0f' : '#f9f9f9')};
`
export const Title = styled.p`
  color: ${props => (props.mode === 'true' ? '#f9f9f9' : '#64748b')};
  font-family: 'Roboto';
  font-size: 18px;
`
export const LikeAndDislikeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 550;
  font-family: 'roboto';
  margin-right: 5px;
`
