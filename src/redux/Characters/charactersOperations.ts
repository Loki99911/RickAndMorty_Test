import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCharactersAPI } from "../../service/API/charactersApi.js";
import { Characters} from "../../types/ICharactersRedux.js";
// import { toast } from "react-toastify";

interface ErrorResponse {
  message: string;
}

export const getAllCharacters = createAsyncThunk<
  Characters[],
  number[],
  { rejectValue: ErrorResponse }
>("characters/getCharacters", async (params, { rejectWithValue }) => {
  try {
    const data = await getAllCharactersAPI(params);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({ message: error.message });
    }
  }
});
