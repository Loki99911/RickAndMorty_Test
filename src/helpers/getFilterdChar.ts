import { FormValues } from "../components/FormicForm/FormicForm";
import {
  getFiltredCharacterAPI,
  getFiltredEpisodesAPI,
  getFiltredLocationAPI,
} from "../service/API/charactersApi";

export const getFilterdChar = async ({
  selectedOptions,
  values,
}: {
  selectedOptions: string[];
  values: FormValues;
}) => {
  const [Character, Location, Episodes] = selectedOptions;
  const {
    characterName,
    locationName,
    episodeName,
    status,
    species,
    characterType,
    locationType,
    gender,
    dimension,
    episode,
  } = values;

  if (Episodes) {
    try {
      const filtredEpisodes = await getFiltredEpisodesAPI({
        episodeName,
        episode,
      });
      console.log("filtredEpisodes", filtredEpisodes);
    } catch (error) {
      console.log(error);
    }
  }

  if (Location) {
    try {
      const filtredLocation = await getFiltredLocationAPI({
        locationName,
        locationType,
        dimension,
      });
      console.log("filtredLocation", filtredLocation);
    } catch (error) {
      console.log(error);
    }
  }

  if (Character) {
    try {
      const filtredCharacter = await getFiltredCharacterAPI({
        characterName,
        status,
        species,
        characterType,
        gender,
      });
      console.log("filtredCharacter", filtredCharacter);
    } catch (error) {
      console.log(error);
    }
  }


  
};
