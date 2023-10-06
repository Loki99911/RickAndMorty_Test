import { RootState } from "../store";

export const allCharacters = (state: RootState) =>
  state.charactersInfo.characters;

export const currentCharacter = (state: RootState) =>
  state.charactersInfo.currentCharacter;

export const isLoadingCharacters = (state: RootState) =>
  state.charactersInfo.isLoading;

export const isLoadingCurrentCharacter = (state: RootState) =>
  state.charactersInfo.isLoading;
