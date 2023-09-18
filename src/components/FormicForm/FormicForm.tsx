import { FC } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  OptionalFieldWrapper,
  FormStyled,
  InputWrapper,
  ErrrorText,
} from "./FormicForm.styled";
import TextField from "@mui/material/TextField";
import { getFilterdChar } from "../../helpers/getFilterdChar";
import useLocalStorage from "../../hooks/useLocalStorage";

interface FormicFormProps {
  currentFields: string[];
  selectedOptionsBackdrop: string[];
  setSelectedOptionsBackdrop: React.Dispatch<React.SetStateAction<string[]>>;
  setOpenBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  setFullCharactersArr: (value: number[]) => void;
  setPage: (value: number) => void;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

export interface FormValues {
  [key: string]: string;
}

export const FormicForm: FC<FormicFormProps> = ({
  currentFields,
  selectedOptionsBackdrop,
  setSelectedOptionsBackdrop,
  setOpenBackdrop,
  setInputActive,
  setFullCharactersArr,
  setPage,
  setTotalPages,
}) => {
  const { storage, setStorage } = useLocalStorage({ key: "history" });

  const handleSubmitForm = async (values: FormValues) => {
    const result = await getFilterdChar({ values });
    const valuesArr = Object.values(values);
    const storEl = [selectedOptionsBackdrop, valuesArr];
    setFullCharactersArr(result);
    setPage(1);
    setTotalPages(result.length);
    setStorage([...storage, storEl]);
    setOpenBackdrop(false);
    setSelectedOptionsBackdrop([]);
    setInputActive(false);
  };

  const validationSchema = Yup.object().shape({
    status: Yup.string().oneOf(
      ["alive", "dead", "unknown"],
      '"alive", "dead" or "unknown"'
    ),
    gender: Yup.string().oneOf(
      ["female", "male", "genderless", "unknown"],
      '"female", "male", "genderless" or "unknown"'
    ),
  });

  return (
    <Formik
      initialValues={{
        characterName: "",
        locationName: "",
        episodeName: "",
        status: "",
        species: "",
        characterType: "",
        locationType: "",
        gender: "",
        dimension: "",
        episode: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmitForm}
    >
      {() => (
        <FormStyled>
          <OptionalFieldWrapper>
            {currentFields.length === 0 && (
              <InputWrapper>
                <Field
                  type="text"
                  placeholder="Select item first"
                  name="holder"
                  as={TextField}
                  disabled={true}
                />
              </InputWrapper>
            )}
            {currentFields.map((field) => (
              <InputWrapper key={field}>
                <Field
                  type="text"
                  placeholder={`Add ${field}`}
                  name={field}
                  as={TextField}
                />
                <ErrrorText name={field} component="span" />
              </InputWrapper>
            ))}
          </OptionalFieldWrapper>
          <CustomBtn
            buttonType="submit"
            variant="contained"
            disabled={currentFields.length === 0 ? true : false}
          >
            find
          </CustomBtn>
        </FormStyled>
      )}
    </Formik>
  );
};
