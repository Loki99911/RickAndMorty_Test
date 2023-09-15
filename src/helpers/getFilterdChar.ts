import { toast } from "react-toastify";
import { FormValues } from "../components/FormicForm/FormicForm";
import {
  getFiltredCharacterAPI,
  getFiltredEpisodesAPI,
  getFiltredLocationAPI,
} from "../service/API/charactersApi";
import { Characters } from "../types/ICharactersRedux";
import { Episodes } from "../types/IEpisodesRedux";
import { Location } from "../types/ILocation";
import { findRepeatedValues } from "./findRepeatedValues";

export const getFilterdChar = async ({ values }: { values: FormValues }) => {
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
  const totalArr: string[] = [];
  let countArr = 0;
  let filtredEpisodes: Episodes[];
  let filtredLocation: Location[];
  let filtredCharacter: Characters[];

  if (episodeName || episode) {
    try {
      filtredEpisodes = await getFiltredEpisodesAPI({
        episodeName,
        episode,
      });      
      filtredEpisodes.map((obj) =>
        obj.characters.map((character) => {
          const lastIndex = character.lastIndexOf("/");
          const number = character.slice(lastIndex + 1);
          totalArr.push(number);
        })
      );
      countArr++;
    } catch (error) {
      toast.error(`${error}`);
    }
  }

  if (locationName || locationType || dimension) {
    try {
      filtredLocation = await getFiltredLocationAPI({
        locationName,
        locationType,
        dimension,
      });
      filtredLocation.map((obj) =>
        obj.residents.map((resident) => {
          const lastIndex = resident.lastIndexOf("/");
          const number = resident.slice(lastIndex + 1);
          totalArr.push(number);
        })
      );
      countArr++;
    } catch (error) {
     toast.error(`${error}`);
    }
  }

  if (characterName || status || species || characterType || gender) {
    try {
      filtredCharacter = await getFiltredCharacterAPI({
        characterName,
        status,
        species,
        characterType,
        gender,
      });
      filtredCharacter.map((el) => totalArr.push(el.id.toString()));
      countArr++;
    } catch (error) {
      toast.error(`${error}`);
    }
  }

  return findRepeatedValues(totalArr, countArr);
};
