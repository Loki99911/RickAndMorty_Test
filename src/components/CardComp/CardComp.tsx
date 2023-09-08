import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Characters } from "../../types/ICharactersRedux";
import {CardLink} from "./CardComp.styled"
export default function CardComp({ character }: { character: Characters }) {
  return (
    <Card sx={{ height: "220px"}} component="li">
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
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
          </CardLink>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
