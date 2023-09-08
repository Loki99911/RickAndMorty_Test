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
      // .addCase(getCountOfCharacters.pending, pending)
      .addCase(
        getAllCharacters.rejected,
        (state: StateCharacters, { payload }) => {
          state.isLoading = false;
          state.error = payload!.message;
        }
      )
      // .addCase(getCountOfCharacters.rejected, (state: State, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload!.message;
      // })
      .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.characters = payload;
      }),
  // .addCase(getCountOfCharacters.fulfilled, (state, { payload }) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.pagination = payload.info;
  // }),
});

export default charactersSlice.reducer;
