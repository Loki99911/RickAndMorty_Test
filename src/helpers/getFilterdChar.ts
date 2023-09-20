import { toast } from "react-toastify";
import { FormValues } from "../components/FormicForm/FormicForm";
import {
  getFiltredCharacterAPI,
  getFiltredEpisodesAPI,
  getFiltredLocationAPI,
} from "../service/API/charactersApi";
import { PayloadCharacters } from "../types/ICharactersRedux";
import { Episodes } from "../types/IEpisodesRedux";
import { Location } from "../types/ILocation";
import { findRepeatedValues } from "./findRepeatedValues";

export const getFilterdChar = async ({
  values,
  setIsFetchingData,
}: {
  values: FormValues;
  setIsFetchingData: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
  let filtredCharacter: PayloadCharacters;

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

  // if (characterName || status || species || characterType || gender) {
  //   try {
  //     filtredCharacter = await getFiltredCharacterAPI({
  //       characterName,
  //       status,
  //       species,
  //       characterType,
  //       gender,
  //     });
  //     filtredCharacter.results.map((el) => totalArr.push(el.id.toString()));
  //     countArr++;
  //   } catch (error) {
  //     toast.error(`${error}`);
  //   }
  // }

  const getAllFiltredCharacter = async (
    characterName: string,
    status: string,
    species: string,
    characterType: string,
    gender: string,
    page: string = ""
  ) => {
    try {
      setIsFetchingData(true);
      filtredCharacter = await getFiltredCharacterAPI({
        characterName,
        status,
        species,
        characterType,
        gender,
        page,
      });
      filtredCharacter.results.map((el) => totalArr.push(el.id.toString()));
      if (filtredCharacter.info.next) {
        const nextPageString = filtredCharacter.info.next;
        const start_index = nextPageString.indexOf("page=");
        const end_index = nextPageString.indexOf("&", start_index);
        const nextPage = nextPageString.slice(
          start_index + "page=".length,
          end_index
        );
        await getAllFiltredCharacter(
          characterName,
          status,
          species,
          characterType,
          gender,
          nextPage
        );
      }
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setIsFetchingData(false);
    }
  };
  if (characterName || status || species || characterType || gender) {
    await getAllFiltredCharacter(
      characterName,
      status,
      species,
      characterType,
      gender
    );
    countArr++;
  }
  const repetedResult = findRepeatedValues(totalArr, countArr);

  return repetedResult;
};
