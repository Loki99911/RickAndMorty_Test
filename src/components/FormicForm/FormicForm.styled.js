import styled from "styled-components";
import { Form } from "formik";

export const FormStyled = styled(Form)`
  position: relative;
  z-index: 10;
  display: flex;
  gap: 28px;
  margin-left: 28px;
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
