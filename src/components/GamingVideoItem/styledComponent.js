import styled from 'styled-components'

export const VideosContainer = styled.div`
  padding-top: 20px;
  background-color: ${props => (props.mode === 'true' ? '#000000' : '#f8fafc')};
`
export const TitlePara = styled.p`
  font-size: 18px;
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#000000')};
  font-family: 'roboto';
  margin-bottom: 20px;
`
