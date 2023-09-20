export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Pagination {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface PayloadCharacters {
  info: Pagination;
  results: Characters[];
}

export interface StateCharacters {
  characters: Characters[] | [];
  currentCharacter: Characters | null;
  isLoading: boolean;
  error: string | null;
}

export interface StatePagination {
  pagination: Pagination | null;
  isLoading: boolean;
  error: string | null;
}