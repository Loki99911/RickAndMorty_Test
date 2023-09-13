import Stack from "@mui/material/Stack";
// import { totalCount } from "../../redux/Pagination/paginationSelectors";
// import { useAppSelector } from "../../hooks/useCustomDispach";
import { StyledPagonation } from "./PaginationRounded.styled";

export default function PaginationRounded({
  changePage,
  totalPages,
  page,
}: {
  changePage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  page:number;
}) {
  const roundPages = Math.ceil(totalPages / 6);
  const handleChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    changePage(newPage);
  };
  return (
    totalPages && (
      <Stack spacing={2}>
        <StyledPagonation
          count={roundPages}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    )
  );
}
