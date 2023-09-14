import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardPageWrapper } from "./CardPage.styled";
import { Box, Card, CardMedia } from "@mui/material";
import { CardContentComp } from "../../components/CardContentComp/CardContentComp";
import { addEpisodeForChar } from "../../helpers/addEpisodeForChar";
import { Episodes } from "../../types/IEpisodesRedux";
import { FAB } from "../../components/FAB/FAB";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomDispach";
import { getCharacterById } from "../../redux/Characters/charactersOperations";
import { currentCharacter } from "../../redux/Characters/charactersSelectors";
import useLocalStorage from "../../hooks/useLocalStorage";

const CardPage: FC = () => {
  const dispatch = useAppDispatch();
  const { characterId } = useParams();
  const { storage, setStorage } = useLocalStorage<string[]>("history", []);
  const [currentEpisode, setCurrentEpisode] = useState<Episodes[]>([]);
  const character = useAppSelector(currentCharacter);

  useEffect(() => {
    if (characterId) dispatch(getCharacterById(characterId));
  }, [characterId, dispatch]);

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

useEffect(() => {
  if (character) {
    setStorage([...storage, character.name]);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [character]);
  if (!character) return;

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
