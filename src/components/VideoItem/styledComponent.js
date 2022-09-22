import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`
export const VideosContainer = styled.div`
  padding: 10px;
  width: 100%;
  background-color: ${props => (props.mode === 'true' ? '#000000' : '#f8fafc')};
`
export const TitlePara = styled.p`
  font-size: 12px;
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#000000')};
  font-family: 'roboto';
  line-height: 1.5;
`
