import { FC, useState } from "react";
import CustomBtn from "../CustomBtn/CustomBtn";

export const Filter: FC = () => {
  const [filterShown, setFilterShown] = useState<boolean>(false);

  const toggleFilter = () => {
    setFilterShown((prev) => !prev);
  };

  return (
    <>
      {!filterShown && (
        <CustomBtn variant="contained" clickAction={toggleFilter}>
          Filter
        </CustomBtn>
      )}
      {filterShown && (
        <CustomBtn variant="contained" clickAction={toggleFilter}>
          Remove filter
        </CustomBtn>
      )}
    </>
  );
};
