import styled from 'styled-components'

export const SideBarContainer = styled.div`
  height: 100vh;
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.mode === 'true' ? '#212121' : '#f8fafc')};
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 55px;
    display: none;
  }
`

export const NavLinks = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#212121')};
`
export const SelectPageButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${props => (props.mode === 'true' ? '#f8fafc' : '#212121')};
  margin-bottom: 40px;
  cursor: pointer;
`
