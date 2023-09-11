import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Characters } from "../../types/ICharactersRedux";
import {
  CardLink,
  CardCircle,
  TypographyStatus,
  TypographyTitle,
  TypographyValue,
} from "./CardComp.styled";
import { Episodes } from "../../types/IEpisodesRedux";

export default function CardComp({
  character,
  episodesArr,
}: {
  character: Characters;
  episodesArr: Episodes[];
}) {
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
    <Card sx={{ height: "220px", borderRadius: "9px" }} component="li">
      <Box
        display="flex"
        sx={{ height: "100%", backgroundColor: "#3C3E44" }}
        alignItems="center"
      >
        <CardMedia
          component="img"
          sx={{ height: "100%", width: "230px" }}
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <CardLink to={`/${character.id}`}>
            <Typography
              sx={{ fontSize: "27px", lineHeight: 1.1, fontWeight: 800 }}
              component="h3"
            >
              {character.name}
            </Typography>
          </CardLink>
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
        </CardContent>
      </Box>
    </Card>
  );
}
