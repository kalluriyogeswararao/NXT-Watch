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
  font-size: 18px;
  margin-top: 30px;
`
