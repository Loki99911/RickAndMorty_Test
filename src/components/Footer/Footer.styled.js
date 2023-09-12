import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 47px;
  padding-bottom: 81px;
  background-color: var(--main-black);
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;

  width: 212px;
  margin-bottom: 34px;
  color: var(--secondary-gray);
`;

export const FooterLogoWrapper = styled.div`
  width: 50px;
  border-radius: 50%;
  margin-bottom: 56px;
  box-shadow: 0px 0px 82px var(--main-white);
`;

export const FooterLogo = styled.img`
  width: 50px;
`;

export const FooterLinkList = styled.ul`
  display: flex;
  gap: 27px;
  margin-bottom: 23px;
`;

export const FooterLinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29px;
`;

export const FooterLink = styled.a`
  color: var(--secondary-gray);
  cursor: pointer;
  transition: color 350ms linear;
  
  &:hover{
    color: var(--secondary-white);
  }
`;

export const FooterYear = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;

  color: var(--secondary-gray);
`;
