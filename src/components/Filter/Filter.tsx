import { FC, useEffect, useState } from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  Checkbox,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { CheckboxSelector, FilterWrapper, InputBlock } from "./Filter.styled";
import { FormicForm } from "../FormicForm/FormicForm";

export const Filter: FC = () => {
  const [filterShown, setFilterShown] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [fields, setfields] = useState<string[]>([]);
  const options = ["Character", "Location", "Episodes"];
  const characterOptions = ["name", "status", "species", "type", "gender"];
  const locationOptions = ["name", "type", "dimension"];
  const episodesOptions = ["name", "episode"];

  useEffect(() => {
    const newFields: string[] = [];
    selectedOptions.map((el) => {
      switch (el) {
        case "Character":
          newFields.push(...characterOptions);
          break;
        case "Location":
          newFields.push(...locationOptions);
          break;
        case "Episodes":
          newFields.push(...episodesOptions);
          break;
      }
    });
    const uniqueFields = Array.from(new Set(newFields));
    setfields(uniqueFields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  const toggleFilter = () => {
    setFilterShown((prev) => !prev);
  };

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };

  console.log(fields);

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
          <InputBlock>
            <FormicForm currentFields={fields}>
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
                      <Checkbox
                        checked={selectedOptions.indexOf(option) > -1}
                      />
                    </MenuItem>
                  ))}
                </CheckboxSelector>
              </FormControl>
            </FormicForm>
          </InputBlock>
        </>
      )}
    </FilterWrapper>
  );
};
