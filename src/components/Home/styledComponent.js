import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => (props.mode === 'true' ? '#000000' : '#f8fafc')};
`
export const VideosContainer = styled.div`
  padding: 20px;

  width: 100%;
  background-color: ${props => (props.mode === 'true' ? '#000000' : '#f8fafc')};
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
`
export const FailurePara = styled.p`
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#212121')};
  font-size: 18px;
  font-family: 'roboto';
  font-weight: 550;
`
