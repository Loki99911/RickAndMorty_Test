import { createSlice } from "@reduxjs/toolkit";

import { StatePagination } from "../../types/ICharactersRedux";
import { getCountOfCharacters } from "./paginationOperations";

const pending = (state: StatePagination) => {
  state.isLoading = true;
};

const initialState: StatePagination = {
  pagination: null,
  isLoading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: "paginationInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCountOfCharacters.pending, pending)
      .addCase(
        getCountOfCharacters.rejected,
        (state: StatePagination, { payload }) => {
          state.isLoading = false;
          state.error = payload!.message;
        }
      )
      .addCase(
        getCountOfCharacters.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
          state.pagination = payload.info;
        }
      ),
});

export default charactersSlice.reducer;
