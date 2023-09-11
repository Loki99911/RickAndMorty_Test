import { FC, useState } from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  Checkbox,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { CheckboxSelector, FilterWrapper } from "./Filter.styled";

export const Filter: FC = () => {
  const [filterShown, setFilterShown] = useState<boolean>(false);

  const toggleFilter = () => {
    setFilterShown((prev) => !prev);
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options = ["Character", "Location", "Episodes"];

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };


  console.log(selectedOptions);

  return (
    <FilterWrapper>
      {!filterShown && (
        <CustomBtn variant="contained" clickAction={toggleFilter}>
          Filter
        </CustomBtn>
      )}
      {filterShown && (
        <>
          <CustomBtn variant="contained" clickAction={toggleFilter}>
            Remove filter
          </CustomBtn>
          <FormControl>
            <CheckboxSelector
              multiple
              displayEmpty
              sx={{ width: "213px" }}
              value={selectedOptions}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              renderValue={() => "Select Item"}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                  sx={{ justifyContent: "space-between" }}
                >
                  {option}
                  <Checkbox checked={selectedOptions.indexOf(option) > -1} />
                </MenuItem>
              ))}
            </CheckboxSelector>
          </FormControl>
        </>
      )}
    </FilterWrapper>
  );
};
