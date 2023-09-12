import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledBtn = styled(Button)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  border: none !important;
  min-width: 143px !important;
  height: 57px;
  color: var(--main-gray) !important;
  background-color: var(--secondary-white) !important;
  outline: none;
  transition: color 350ms linear, background-color 350ms linear,
    outline 350ms linear;
  &:hover {
    color: var(--secondary-white) !important;
    background-color: var(--main-gray) !important;
    box-shadow: none !important;
    outline: 1px solid var(--secondary-white) !important;
  }
  &:active {
    box-shadow: none !important;
    color: var(--main-gray) !important;
    background-color: #0062cc !important;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;
