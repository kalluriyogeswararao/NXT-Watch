import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.mode === 'true' ? '#212121' : '#f8fafc')};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 40px;
  }
`
export const FormContainer = styled.form`
  background-color: ${props => (props.mode === 'true' ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  width: 450px;
  padding: 40px;
  box-shadow: ${props =>
    props.mode === 'true' ? null : '0px 10px 20px 10px #e2e8f0'};
  @media screen and (max-width: 768px) {
    width: 370px;
  }
`
export const ImageLogo = styled.img`
  width: 200px;
  margin-bottom: 50px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.mode === 'true' ? '#ffffff' : '#64748b')};
  font-weight: 550;
  margin-bottom: 7px;
  cursor: pointer;
`
export const Input = styled.input`
  width: ${props => props.width};
  padding: 10px;
  border: 1px solid #e2e8f0;
  outline: none;
  font-size: 15px;
  border-radius: 2px;
  margin-bottom: 7px;
`
export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
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
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 20px;
`
