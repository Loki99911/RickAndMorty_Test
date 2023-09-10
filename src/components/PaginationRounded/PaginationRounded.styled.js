import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

export const StyledPagonation = styled(Pagination)`
  .MuiPaginationItem-root {
    color: var(--main-white);
    background-color: var(--secondary-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  .Mui-disabled {
    background-color: var(--secondary-gray);
  }

  .MuiPagination-ul {
    justify-content: center;
    li:last-child .MuiButtonBase-root,
    li:first-child .MuiButtonBase-root,
    .Mui-selected {
      background-color: var(--secondary-white);
      color: var(--main-black);
      border: none;
    }
  }
`;
