import styled from "styled-components";
import { ErrorMessage, Form } from "formik";

export const FormStyled = styled(Form)`
  position: relative;
  display: flex;
  gap: 28px;
  margin-left: 28px;
  z-index: 1300;
`;

export const OptionalFieldWrapper = styled.div`
  input {
    color: var(--main-gray);
    background-color: var(--secondary-white);
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 57px;
  border-radius: 4px;
  overflow: hidden;
`;

export const ErrrorText = styled(ErrorMessage)`
  position: absolute;
  left: 5px;
  bottom: 0;
  z-index: 1;
  font-size: 10px;
  color: var(--main-red);
`;
