import { createSlice } from "@reduxjs/toolkit";
import { getAllCharacters} from "./charactersOperations";
import { StateCharacters } from "../../types/ICharactersRedux";

const pending = (state: StateCharacters) => {
  state.isLoading = true;
};

const initialState: StateCharacters = {
  characters: [],
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
      .addCase(
        getAllCharacters.rejected,
        (state: StateCharacters, { payload }) => {
          state.isLoading = false;
          state.error = payload!.message;
        }
      )
      .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.characters = payload;
      }),
      // .addCase(getAllFiltredCharacters.pending, pending)
      // .addCase(
      //   getAllFiltredCharacters.rejected,
      //   (state: StateCharacters, { payload }) => {
      //     state.isLoading = false;
      //     state.error = payload!.message;
      //   }
      // )
      // .addCase(getAllFiltredCharacters.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.characters = payload;
      // }),
});

export default charactersSlice.reducer;
