import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  background-color: ${props => (props.mode ? '#212121' : '#f8fafc')};
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

export const Image = styled.img`
  width: ${props => props.width};
  padding-left: ${props => props.pad};
  display:${props => props.show};
  @media screen and (min-width: 768px) {
    display: block;
  }

  }
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 150px;
  justify-content: center;
  border-radius: 5px;
  padding: 5px;
  background-color: #212121;
`

export const CustomButton = styled.button`
  height: 32px;
  font-family: 'Roboto';
  font-size: 15px;
  width: 86px;
  border-radius: 2px;
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.border};
  color: #ffffff;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const ThemeButton = styled.button`
  color: ${props => (props.mode ? '#ffffff' : '#212121')};
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 30px;
  margin-right: 30px;
  cursor: pointer;
  padding: 0;
`
