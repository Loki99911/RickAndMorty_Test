import { FC } from "react";
import {
  StyledFooter,
  FooterText,
  FooterLogoWrapper,
  FooterLogo,
  FooterLinkList,
  FooterLinkItem,
  FooterLink,
  FooterYear,
} from "./Footer.styled";
import incodeLogo from "../../assets/IncodeLogo.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const Footer: FC = () => {
  return (
    <StyledFooter>
      <FooterText>performed as part of a test case for the company</FooterText>
      <FooterLogoWrapper>
        <FooterLogo src={incodeLogo} alt="Incode logo" />
      </FooterLogoWrapper>
      <FooterLinkList>
        <FooterLinkItem>
          <FooterLink
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ width: "18px", height: "18px" }} />
          </FooterLink>
        </FooterLinkItem>
        <FooterLinkItem>
          <FooterLink
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ width: "18px", height: "18px" }} />
          </FooterLink>
        </FooterLinkItem>
        <FooterLinkItem>
          <FooterLink
            href="https://likee.video/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FavoriteIcon sx={{ width: "18px", height: "18px" }} />
          </FooterLink>
        </FooterLinkItem>
      </FooterLinkList>
      <FooterYear>2023</FooterYear>
    </StyledFooter>
  );
};
