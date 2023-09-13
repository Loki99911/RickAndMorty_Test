export interface FilterProps {
  setFullCharactersArr: (value: number[]) => void;
  setPage: (value: number) => void;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}
