import { RootState } from "../store";

export const allCharacters = (state: RootState) => state.charactersInfo.characters;
export const currentCharacter = (state: RootState) =>
  state.charactersInfo.currentCharacter;
