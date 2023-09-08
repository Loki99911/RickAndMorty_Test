import axios from "axios";
const baseURL = "https://rickandmortyapi.com/api";

export const getAllCharactersAPI = async () => {
  axios.defaults.baseURL = `${baseURL}`;
  const { data } = await axios.get(`/character`);
  return data;
};
