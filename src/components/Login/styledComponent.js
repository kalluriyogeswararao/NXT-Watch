import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const FormContainer = styled.div`
  background-color: ${props => (props.mode ? '#424242' : '#f9f9f9')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  padding: 40px;
  box-shadow: 0px 10px 20px 0px ${props => (props.mode ? null : '#e2e8f0')};
`
export const ImageLogo = styled.img`
  width: 200px;
  margin-bottom: 55px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: ${props => props.width};
  padding: 10px;
  border: 1px solid #e2e8f0;
  outline: none;
  font-size: 15px;
  border-radius: 2px;
  margin-bottom: 5px;
`
export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 22px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 22px;
  align-items: center;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 37px;
  cursor: pointer;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 5px;
  font-size: 17px;
  border: none;
  outline: none;
`
