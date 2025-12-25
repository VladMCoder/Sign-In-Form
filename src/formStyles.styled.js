import styled from "styled-components";

export const TitleForm = styled.h1`
  font-size: 36px;
  text-align: center;
`;

export const ContainerFormInputs = styled.form`
  display: flex;
  flex-direction: column;
  width: 373px;
`;

export const Inputs = styled.input`
  padding: 24px 30px;
  border: none;
  outline: none;
  font-weight: 300;
  background: #d9d9d9;
  border-radius: 20px;
  font-size: 24px;
  margin-top: 10px;

  &::placeholder {
    font-size: 24px;
    color: #000;
  }
`;

export const ErrorText = styled.span`
  color: red;
  margin-top: 10px;
`;

export const ButtonSignIn = styled.button`
  background: #1ae33f;
  border-radius: 20px;
  font-size: 24px;
  padding: 19px 139px;
  border: none;
  outline: none;
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }
`;
