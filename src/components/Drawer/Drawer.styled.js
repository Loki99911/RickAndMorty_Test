import { Drawer } from "@mui/material";
import styled from "styled-components";

export const DrawerStyled = styled(Drawer)`
  .MuiPaper-root {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.1;
    color: #000000;

    width: 420px;
    height: 570px;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    top: calc((100vh - 570px) / 2);
    padding: 16px;
    gap: 16px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    button{
      justify-content: flex-start;
    }
  }
`;
export const SearchCategoryWrapper = styled.div`
  opacity: 0.6;
`;
export const SearchCategoryTitle = styled.p`
  opacity: 0.6;
  margin-bottom: 16px;
`;
export const SearchCategoryValue = styled.p`
  opacity: 0.87;
`;

export const SearchCharText = styled.p`
  opacity: 0.6;
`;

export const SearchCharTextAccent = styled.span`
  font-weight: 600;
  opacity: 1;
`;
