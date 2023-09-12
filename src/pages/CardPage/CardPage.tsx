import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCharacterById } from "../../service/API/charactersApi";
import { CardPageWrapper } from "./CardPage.styled";
import { Box, Card, CardMedia } from "@mui/material";
import { Characters } from "../../types/ICharactersRedux";
import { CardContentComp } from "../../components/CardContentComp/CardContentComp";
import { addEpisodeForChar } from "../../helpers/addEpisodeForChar";
import { Episodes } from "../../types/IEpisodesRedux";
import { FAB } from "../../components/FAB/FAB";

const CardPage: FC = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<Characters>();
  const [currentEpisode, setCurrentEpisode] = useState<Episodes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (characterId) {
          const data = await getAllCharacterById(characterId);
          setCharacter(data);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchData();
  }, [characterId]);

  useEffect(() => {
    const characterInArr = [];
    if (character) {
      characterInArr.push(character);
    }
    if (characterInArr.length > 0) {
      addEpisodeForChar(characterInArr).then((res: Episodes) => {
        const resInArr = [];
        resInArr.push(res);
        return setCurrentEpisode(resInArr);
      });
    }
  }, [character]);

  if (character === undefined) return;

  return (
    <CardPageWrapper>
      <Card
        sx={{ height: "572px", borderRadius: "9px", position: "relative" }}
        component="li"
      >
        <Box
          display="flex"
          sx={{ height: "100%", backgroundColor: "#3C3E44" }}
          alignItems="flex-start"
        >
          <CardMedia
            component="img"
            sx={{ height: "100%", width: "595px" }}
            image={character.image}
            alt={character.name}
          />
          <CardContentComp character={character} episodesArr={currentEpisode} />
        </Box>
        <FAB />
      </Card>
    </CardPageWrapper>
  );
};

export default CardPage;
