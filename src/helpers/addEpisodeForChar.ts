import { Characters } from "../types/ICharactersRedux";
import { getAllEpisodesAPI } from "../service/API/charactersApi";

export const addEpisodeForChar = async (charArray: Characters[]) => {
  const episodesArray = charArray.map((char) => {
    const lastIndex = char.episode[0].lastIndexOf("/");
    if (lastIndex !== -1) {
      return parseInt(char.episode[0].slice(lastIndex + 1), 10);
    }
  });
  const uniqueEpisodes = Array.from(new Set(episodesArray));
  try {
    return getAllEpisodesAPI(uniqueEpisodes as number[]);
  } catch (error) {
    console.error("Ошибка при запросе к API Rick and Morty:", error);
    throw error;
  }
};
