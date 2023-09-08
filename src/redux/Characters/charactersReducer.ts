import { createSlice } from "@reduxjs/toolkit";
import { getAllCharacters } from "./charactersOperations";
import { State } from "../../types/ICharactersRedux";

const pending = (state: State) => {
  state.isLoading = true;
};

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
