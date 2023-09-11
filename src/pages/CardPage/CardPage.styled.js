import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const CardPageWrapper = styled.section`
  background-color: var(--main-gray);
  padding: 0 110px;
  padding-bottom: 250px;
  padding-top: 80px;
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

export const TypographyStatus = styled(Typography)`
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  color: var(--main-white);
`;

export const TypographyTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  color: var(--secondary-gray);
`;

export const TypographyValue = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  color: var(--secondary-white);
`;
