import axios from "axios";
const baseURL = "https://rickandmortyapi.com/api";

export const getCountOfCharactersAPI = async () => {
  axios.defaults.baseURL = `${baseURL}`;
  const { data } = await axios.get(`/character`);
  return data;
};

export const getAllCharactersAPI = async (array:number[]) => {
  axios.defaults.baseURL = `${baseURL}`;
  const { data } = await axios.get(`/character/${array}`);
  return data;
};

export const getAllEpisodesAPI = async (array: number[]) => {
  axios.defaults.baseURL = `${baseURL}`;
  const { data } = await axios.get(`/episode/${array}`);
  return data;
};

export const getAllCharacterById = async (id: string) => {
  axios.defaults.baseURL = `${baseURL}`;
  const { data } = await axios.get(`/character/${id}`);
  return data;
};