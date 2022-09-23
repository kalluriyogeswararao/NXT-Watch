import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.mode === 'true' ? '#0f0f0f' : '#f9f9f9 '};
`

export const GameContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.mode === 'true' ? '#212121' : '#f9f9f9 '};
`
export const GameHeading = styled.h1`
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#212121')};
  font-size: 28px;
  font-family: 'roboto';
  font-weight: 550;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#212121')};
  font-size: 28px;
  font-family: 'roboto';
  font-weight: 550;
`
export const FailurePara = styled.p`
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#212121')};
  font-size: 18px;
  font-family: 'roboto';
  font-weight: 550;
`
