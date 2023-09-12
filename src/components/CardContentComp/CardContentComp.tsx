import { Characters } from "../../types/ICharactersRedux";
import {
  CardContentStyled,
  CardLink,
  CardCircle,
  TypographyName,
  TypographyStatus,
  TypographyTitle,
  TypographyValue,
  OtherInfo,
} from "./CardContentComp.styled";
import { Episodes } from "../../types/IEpisodesRedux";

export const CardContentComp = ({
  character,
  episodesArr,
  pageType,
}: {
  character: Characters;
  episodesArr: Episodes[];
  pageType?: string;
}) => {
  const lastIndex = character.episode[0].lastIndexOf("/");
  const episodeNumber = parseInt(character.episode[0].slice(lastIndex + 1), 10);
  const foundEpisode = episodesArr.find((obj) => obj.id === episodeNumber);
  const firstEpisode = foundEpisode ? foundEpisode.name : "Unknown";

  let circleColor;
  switch (character.status) {
    case "Alive":
      circleColor = "green";
      break;
    case "Dead":
      circleColor = "red";
      break;
    default:
      circleColor = "gray";
      break;
  }

  return (
    <CardContentStyled>
      {pageType === "main" ? (
        <CardLink to={`/${character.id}`}>
          <TypographyName component="h3">{character.name}</TypographyName>
        </CardLink>
      ) : (
        <TypographyName component="h3">{character.name}</TypographyName>
      )}
      <TypographyStatus component="p" sx={{ marginBottom: "8px" }}>
        <CardCircle color={circleColor} />
        {character.status} - {character.species}
      </TypographyStatus>
      <TypographyTitle component="p">Last known location:</TypographyTitle>
      <TypographyValue component="p" sx={{ marginBottom: "15px" }}>
        {character.location.name}
      </TypographyValue>
      <TypographyTitle component="p">First seen in:</TypographyTitle>
      <TypographyValue component="p">{firstEpisode}</TypographyValue>
      {pageType !== "main" && (
        <OtherInfo>
          <TypographyTitle component="p">Other Info:</TypographyTitle>
          <TypographyValue component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas
            impedit vel voluptatum, eum amet rerum consectetur dolor maiores hic
            dolorem? Necessitatibus et aut minima voluptatibus veniam modi quae
            ex molestias, debitis suscipit animi? Esse minima perferendis
            inventore pariatur necessitatibus eaque et, sunt excepturi fugiat at
            aperiam neque adipisci consequuntur sit repudiandae harum quis enim.
            Enim, praesentium ad dolorum id labore dolores tenetur qui vitae
            consequatur eveniet eaque quas magni necessitatibus harum
            perferendis distinctio repellat aliquid?
          </TypographyValue>
        </OtherInfo>
      )}
    </CardContentStyled>
  );
};
