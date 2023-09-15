import { FC, useEffect } from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  Checkbox,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import {
  CheckboxSelector,
  InputBlock,
  HiddenFilterWrapper,
} from "./Filter.styled";
import { FilterProps } from "../../types/IFilterProps";

export const Filter: FC<FilterProps> = ({
  setOpenBackdrop,
  inputActive,
  setInputActive,
  setfields,
  selectedOptionsBackdrop,
  setSelectedOptionsBackdrop,
  toggleFilter,
}) => {
  const options = ["Character", "Location", "Episodes"];
  const characterOptions = [
    "characterName",
    "status",
    "species",
    "characterType",
    "gender",
  ];
  const locationOptions = ["locationName", "locationType", "dimension"];
  const episodesOptions = ["episodeName", "episode"];

  useEffect(() => {
    const newFields: string[] = [];
    selectedOptionsBackdrop.map((el) => {
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
    setfields(newFields);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptionsBackdrop]);

  const handleChangeBackdrop = (
    event: SelectChangeEvent<typeof selectedOptionsBackdrop>
  ) => {
    const {
      target: { value },
    } = event;

    setSelectedOptionsBackdrop(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <HiddenFilterWrapper>
        <CustomBtn variant="contained" clickAction={toggleFilter}>
          Remove filter
        </CustomBtn>
        <InputBlock>
          <FormControl>
            <CheckboxSelector
              multiple
              displayEmpty
              sx={{ width: "213px" }}
              value={selectedOptionsBackdrop}
              onChange={handleChangeBackdrop}
              onOpen={() => {
                setOpenBackdrop(true);
                setInputActive(true);
              }}
              open={inputActive}
              onClose={() => {
                setInputActive(false);
              }}
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
                    checked={selectedOptionsBackdrop.indexOf(option) > -1}
                  />
                </MenuItem>
              ))}
            </CheckboxSelector>
          </FormControl>
        </InputBlock>
      </HiddenFilterWrapper>
    </>
  );
};
