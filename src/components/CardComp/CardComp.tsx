import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Characters } from "../../types/ICharactersRedux";
import { CardLink } from "./CardComp.styled";
export default function CardComp({ character }: { character: Characters }) {
  return (
    <Card sx={{ height: "220px", borderRadius:"9px" }} component="li">
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
          <Typography
            sx={{ fontSize: "16px", lineHeight: "26px", fontWeight: 500 }}
            component="h3"
          >
            {character.name}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
