import { Select } from "@mui/material";
import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CheckboxSelector = styled(Select)`
  width: 213px;
  color: var(--main-gray);
  background-color: var(--secondary-white);
`;

export const InputBlock = styled.div`
  display: flex;
  margin-left: 160px;
  border: 1px solid red;
`;
