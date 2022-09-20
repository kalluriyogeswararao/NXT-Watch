import styled from 'styled-components'

export const SideBarContainer = styled.div`
  min-height: 100vh;
  width: 210px;
  background-color: ${props => (props.mode ? '#212121' : '#f8fafc')};
  padding: 20px;
`

export const NavLinks = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.mode ? '#f8fafc' : '#212121')};
`
export const SelectPageButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${props => (props.mode ? '#f8fafc' : '#212121')};
  margin-bottom: 40px;
  cursor: pointer;
`
