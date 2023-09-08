import { FC } from "react";
import logo from "../../assets/Icon.svg"
import { StyledHeader, HeaderImg } from "./Header.styled";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <HeaderImg src={logo} alt="Logo image" />
      </Link>
    </StyledHeader>
  );
};
