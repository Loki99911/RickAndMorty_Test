import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledBtn = styled(Button)`
  color: var(--main-gray);
  background-color: var(--secondary-white);
  border: none;
  :hover {
    background-color: #0069d9;
    box-shadow: none;
  }
  :active {
    box-shadow: none;
    background-color: #0062cc;
  }
  :focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;
