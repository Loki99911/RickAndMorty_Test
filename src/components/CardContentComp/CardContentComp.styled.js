import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";

export const CardContentStyled = styled(CardContent)`
  padding-top: ${(props) =>
    props.pageType === "main" ? "14px" : "12px"} !important;
  padding-right: ${(props) =>
    props.pageType === "main" ? "14px" : "16px"} !important;
  padding-bottom: ${(props) =>
    props.pageType === "main" ? "14px" : "12px"} !important;
  padding-left: ${(props) =>
    props.pageType === "main" ? "14px" : "42px"} !important;
`;

export const CardLink = styled(NavLink)`
  color: var(--main-white);
  &:hover {
    color: var(--main-black);
  }
`;

export const CardCircle = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 7px;
  background-color: ${(props) =>
    props.color === "green"
      ? "green"
      : props.color === "red"
      ? "var(--main-red)"
      : "var(--secondary-gray)"};
`;

export const TypographyName = styled(Typography)`
  font-size: 27px !important;
  line-height: 1.1 !important;
  font-weight: 800 !important;
  color: var(--main-white);
`;

export const TypographyStatus = styled(Typography)`
  font-size: 16px !important;
  line-height: 26px !important;
  font-weight: 500 !important;
  color: var(--main-white);
`;

export const TypographyTitle = styled(Typography)`
  font-size: 15px !important;
  font-weight: 500 !important;
  line-height: 26px !important;
  color: var(--secondary-gray);
`;

export const TypographyValue = styled(Typography)`
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 29px !important;
  color: var(--secondary-white);
`;

export const OtherInfo = styled.div`
  margin-top: 30px;
`;
