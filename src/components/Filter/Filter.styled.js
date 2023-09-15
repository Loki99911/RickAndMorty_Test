import { Select } from "@mui/material";
import styled from "styled-components";



export const HiddenFilterWrapper = styled.div`
  display: flex;
`;

export const CheckboxSelector = styled(Select)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  width: 213px;
  color: var(--main-gray);
  background-color: var(--secondary-white);
  cursor: pointer;
`;

export const InputBlock = styled.div`
  display: flex;
  margin-left: 160px;
`;
