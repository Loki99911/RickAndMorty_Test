import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCharactersAPI,
  getCharacterByIdAPI,
} from "../../service/API/charactersApi.js";
import { Characters } from "../../types/ICharactersRedux.js";
import { toast } from "react-toastify";

interface ErrorResponse {
  message: string;
}

interface Params {
  page: number;
  characters: number[] | [];
}

export const getAllCharacters = createAsyncThunk<
  Characters[],
  Params,
  { rejectValue: ErrorResponse }
>("characters/getCharacters", async (params, { rejectWithValue }) => {
  const { page, characters } = params;
  let reqArr;

  if (characters.length > 0) {
    reqArr = characters.slice((page - 1) * 6, (page - 1) * 6 + 6);
  } else {
    reqArr = [1, 2, 3, 4, 5, 6].map((el) => 6 * (page - 1) + el);
  }

  try {
    const data = await getAllCharactersAPI(reqArr);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(
        `${error.message}`
      );
      return rejectWithValue({ message: error.message });
    }
  }
});

export const getCharacterById = createAsyncThunk<
  Characters,
  string,
  { rejectValue: ErrorResponse }
>("characters/getCharacterById", async (param, { rejectWithValue }) => {
  try {
    if (param) {
      const data = await getCharacterByIdAPI(param);
      return data;
    }
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`${error.message}`);
      return rejectWithValue({ message: error.message });
    }
  }
});
