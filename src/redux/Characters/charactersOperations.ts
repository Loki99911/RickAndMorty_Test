import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCharactersAPI } from "../../service/API/charactersApi.js";
import { Payload } from "../../types/ICharactersRedux.js";
// import { toast } from "react-toastify";

interface ErrorResponse {
  message: string;
}

export const getAllCharacters = createAsyncThunk<
  Payload,
  void,
  { rejectValue: ErrorResponse }
>("characters/getCharacters", async (_, { rejectWithValue }) => {
  try {
    const data = await getAllCharactersAPI();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({ message: error.message });
    }
  }
});
