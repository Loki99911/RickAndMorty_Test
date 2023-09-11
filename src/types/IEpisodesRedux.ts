import { Pagination } from "./ICharactersRedux";

export interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

export interface Payload {
  info: Pagination;
  results: Episodes[];
}

export interface StateEpisodes {
  episodes: Episodes[] | [];
  isLoading: boolean;
  error: string | null;
}
