import { FC, useEffect, useState } from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  Backdrop,
  Checkbox,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import {
  CheckboxSelector,
  FilterWrapper,
  InputBlock,
  PseudoCheckboxSelector,
  InputBlockPosition,
} from "./Filter.styled";
import { FormicForm } from "../FormicForm/FormicForm";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Filter: FC = () => {
  const [filterShown, setFilterShown] = useState<boolean>(false);
  // const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOptionsBackdrop, setSelectedOptionsBackdrop] = useState<
    string[]
  >([]);
  const [fields, setfields] = useState<string[]>([]);
  const [openBackdrop, setOpenBackdrop] = useState(false);

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
    // const uniqueFields = Array.from(new Set(newFields));
    setfields(newFields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptionsBackdrop]);

  const toggleFilter = () => {
    setFilterShown((prev) => !prev);
  };

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

  const toggleBackdrop = () => {
    setOpenBackdrop((prev) => !prev);
  };

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
          {!openBackdrop && (
            <InputBlock>
              <PseudoCheckboxSelector onClick={toggleBackdrop}>
                Select Item <ArrowDropDownIcon />
              </PseudoCheckboxSelector>
              <FormicForm currentFields={[]} />
            </InputBlock>
          )}
          <Backdrop
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              position: "absolute",
            }}
            open={openBackdrop}
            onClick={(event) => {
              console.log(event.currentTarget);
              if (event.target === event.currentTarget) {
                toggleBackdrop();
              }
            }}
          >
            <InputBlockPosition>
              <InputBlock>
                <FormControl>
                  <CheckboxSelector
                    multiple
                    displayEmpty
                    sx={{ width: "213px" }}
                    value={selectedOptionsBackdrop}
                    onChange={handleChangeBackdrop}
                    // open={openBackdrop}
                    // onClose={toggleBackdrop}
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
                <FormicForm currentFields={fields} />
              </InputBlock>
            </InputBlockPosition>
          </Backdrop>
        </>
      )}
    </FilterWrapper>
  );
};
