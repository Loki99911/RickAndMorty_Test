import { Select } from "@mui/material";
import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const PseudoCheckboxSelector = styled.button`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  display: flex;
  justify-content: space-between;
  width: 213px;
  height: 100%;
  padding: 16px 12px;
  border-radius: 4px;
  border: none;
  color: var(--main-gray);
  background-color: var(--secondary-white);
  cursor: pointer;
`;

export const CheckboxSelector = styled(Select)`
  width: 213px;
  color: var(--main-gray);
  background-color: var(--secondary-white);
`;

export const InputBlock = styled.div`
  display: flex;
  margin-left: 160px;
`;

export const InputBlockPosition = styled.div`
  position: absolute;
  left:253px;
  top:445px
`;