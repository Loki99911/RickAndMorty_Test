import { createSlice } from "@reduxjs/toolkit";
import { getAllCharacters, getCharacterById} from "./charactersOperations";
import { StateCharacters } from "../../types/ICharactersRedux";

const pending = (state: StateCharacters) => {
  state.isLoading = true;
};

const initialState: StateCharacters = {
  characters: [],
  currentCharacter:null,
  isLoading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: "charactersInfo",
  initialState,
  reducers: {
    setCurrentCharacterNull: (state) => {
      state.currentCharacter = null;
    },
  },
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
      })
      .addCase(getCharacterById.pending, pending)
      .addCase(
        getCharacterById.rejected,
        (state: StateCharacters, { payload }) => {
          state.isLoading = false;
          state.error = payload!.message;
        }
      )
      .addCase(getCharacterById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentCharacter = payload;
      }),
});

export default charactersSlice.reducer;
export const { setCurrentCharacterNull } = charactersSlice.actions;
