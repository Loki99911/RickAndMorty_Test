import axios from "axios";
const baseURL = "https://rickandmortyapi.com/api";

export const getCountOfCharactersAPI = async () => {
  axios.defaults.baseURL = `${baseURL}`;
  const { data } = await axios.get(`/character`);
  return data;
};

export const getAllCharactersAPI = async (array: number[]) => {
  axios.defaults.baseURL = `${baseURL}`;
  const { data } = await axios.get(`/character/${array}`);
  return data;
};
export const getAllFiltredCharactersAPI = async (array: number[]) => {
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

export const getFiltredEpisodesAPI = async ({
  episodeName,
  episode,
}: {
  episodeName: string;
  episode: string;
}) => {
  axios.defaults.baseURL = `${baseURL}`;
  const params = new URLSearchParams();
  if (episodeName) {
    params.append("name", episodeName);
  }
  if (episode) {
    params.append("episode", episode);
  }
  const { data } = await axios.get(`/episode/?${params.toString()}`);
  return data.results;
};

export const getFiltredLocationAPI = async ({
  locationName,
  locationType,
  dimension,
}: {
  locationName: string;
  locationType: string;
  dimension: string;
}) => {
  axios.defaults.baseURL = `${baseURL}`;
  const params = new URLSearchParams();
  if (locationName) {
    params.append("name", locationName);
  }
  if (locationType) {
    params.append("type", locationType);
  }
  if (dimension) {
    params.append("dimension", dimension);
  }

  const { data } = await axios.get(`/location/?${params.toString()}`);
  return data.results;
};

export const getFiltredCharacterAPI = async ({
  characterName,
  status,
  species,
  characterType,
  gender,
}: {
  characterName: string;
  status: string;
  species: string;
  characterType: string;
  gender: string;
}) => {
  axios.defaults.baseURL = `${baseURL}`;
  const params = new URLSearchParams();
  if (characterName) {
    params.append("name", characterName);
  }
  if (status) {
    params.append("status", status);
  }
  if (species) {
    params.append("species", species);
  }
  if (characterType) {
    params.append("type", characterType);
  }
  if (gender) {
    params.append("gender", gender);
  }

  const { data } = await axios.get(`/character/?${params.toString()}`);
  return data.results;
};
