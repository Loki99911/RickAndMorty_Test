import styled from "styled-components";
import bgImage from "../../assets/HeroBG.png";

export const StyledHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 345px;
  width: 100%;

  background-image: url(${bgImage});
  background-position: center;
`;

export const HeroTitle = styled.h1`
  font-size: 101px;
  font-weight: 900;
  line-height: 111px;
  letter-spacing: 0em;
  text-align: center;
`;
