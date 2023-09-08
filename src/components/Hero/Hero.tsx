import { FC } from "react";
import { StyledHero, HeroTitle } from "./Hero.styled";

export const Hero: FC = () => {
  return (
    <StyledHero>
      <HeroTitle>The Rick and Morty API</HeroTitle>
    </StyledHero>
  );
};
