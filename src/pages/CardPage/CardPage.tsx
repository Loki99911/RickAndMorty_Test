import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCharacterById } from "../../service/API/charactersApi";

const CardPage: FC = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

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

  console.log(character);
  
  return (
    <>
      {/* <p>{character}</p> */}
    </>
  );
};

export default CardPage;
