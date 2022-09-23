import styled from 'styled-components'

export const VideosContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  background-color: ${props => (props.mode === 'true' ? '#0f0f0f' : '#f9f9f9')};
`
export const TitlePara = styled.p`
  font-size: 18px;
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#000000')};
  font-family: 'roboto';
  margin-bottom: 20px;
`
