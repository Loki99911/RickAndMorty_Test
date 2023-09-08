import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCountOfCharactersAPI } from "../../service/API/charactersApi.js";
import {  Payload,} from "../../types/ICharactersRedux.js";
// import { toast } from "react-toastify";

interface ErrorResponse {
  message: string;
}

export const getCountOfCharacters = createAsyncThunk<
  Payload,
  void,
  { rejectValue: ErrorResponse }
>("characters/getPagination", async (_, { rejectWithValue }) => {
  try {
    const data = await getCountOfCharactersAPI();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({ message: error.message });
    }
  }
});

