import Stack from "@mui/material/Stack";
import { totalCount } from "../../redux/Pagination/paginationSelectors";
import { useAppSelector } from "../../hooks/useCustomDispach";
import { StyledPagonation } from "./PaginationRounded.styled";

export default function PaginationRounded({
  changePage,
}: {
  changePage: React.Dispatch<React.SetStateAction<number>>;
  }) {
  const pages = useAppSelector(totalCount)||0;
  const roundPages = Math.ceil(pages/6);
  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    changePage(page);
  };
  return (
    pages&&<Stack spacing={2}>
      <StyledPagonation
        count={roundPages}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
}
