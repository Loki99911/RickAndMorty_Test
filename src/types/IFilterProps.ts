export interface FilterProps {
  setFullCharactersArr: (value: number[]) => void;
  setPage: (value: number) => void;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  openBackdrop: boolean;
  setOpenBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
  inputActive: boolean;
  setfields: React.Dispatch<React.SetStateAction<string[]>>;
  selectedOptionsBackdrop: string[];
  setSelectedOptionsBackdrop: React.Dispatch<React.SetStateAction<string[]>>;
  toggleFilter: () => void;
}
