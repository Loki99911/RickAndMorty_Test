import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Characters } from "../../types/ICharactersRedux";
import { Episodes } from "../../types/IEpisodesRedux";
import { CardContentComp } from "../CardContentComp/CardContentComp";

export default function CardComp({
  character,
  episodesArr,
}: {
  character: Characters;
  episodesArr: Episodes[];
}) {
 
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
        <CardContentComp character={character} episodesArr={episodesArr} />
      </Box>
    </Card>
  );
}
