import { FC } from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  OptionalFieldWrapper,
  FormStyled,
  InputWrapper,
} from "./FormicForm.styled";
import TextField from "@mui/material/TextField";
import { getFilterdChar } from "../../helpers/getFilterdChar";
import useLocalStorage from "../../hooks/useLocalStorage";

interface FormicFormProps {
  currentFields: string[];
  selectedOptionsBackdrop: string[];
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
  };

  const validationSchema = Yup.object().shape({
    status: Yup.string().test("valid-status", "Invalid status", (value) => {
      if (!value) {
        return true;
      }
      return ["alive", "dead", "unknown"].includes(value.toLowerCase());
    }),
    gender: Yup.string().test("valid-gender", "Invalid gender", (value) => {
      if (!value) {
        return true;
      }
      return ["female", "male", "genderless", "unknown"].includes(
        value.toLowerCase()
      );
    }),
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
                  className="form-field"
                  as={TextField}
                  onFocus={() => setInputActive(true)}
                  onBlur={() => setInputActive(false)}
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
                  onFocus={() => {
                    setInputActive(true);
                  }}
                  onBlur={() => {
                    setInputActive(false);
                  }}
                />
                <ErrorMessage name={field} component="div" />
              </InputWrapper>
            ))}
          </OptionalFieldWrapper>
          <CustomBtn buttonType="submit" variant="contained">
            find
          </CustomBtn>
        </FormStyled>
      )}
    </Formik>
  );
};
