import { createSlice } from "@reduxjs/toolkit";
import { getAllCharacters } from "./charactersOperations";
import { Characters, Pagination } from "../../types/ICharactersRedux";

const pending = (state: State) => {
  state.isLoading = true;
};

interface State {
  characters: Characters[] | [];
  pagination: Pagination | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  characters: [],
  pagination: null,
  isLoading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: "charactersInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllCharacters.pending, pending)
      .addCase(getAllCharacters.rejected, (state: State, { payload }) => {
        state.isLoading = false;
        state.error = payload!.message;
      })
      .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.characters = payload.results;
        state.pagination = payload.info;
      }),
});

export default charactersSlice.reducer;
