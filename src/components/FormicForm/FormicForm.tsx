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
// import { getAllCharacters } from "../../redux/Characters/charactersOperations";
// import { useAppDispatch } from "../../hooks/useCustomDispach";

interface FormicFormProps {
  currentFields: string[];
  toggleBackdrop?: () => void;
  disabled?: boolean;
  setFullCharactersArr: (value: number[]) => void;
  setPage: (value: number) => void;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

export interface FormValues {
  [key: string]: string;
}

export const FormicForm: FC<FormicFormProps> = ({
  currentFields,
  toggleBackdrop,
  disabled,
  setFullCharactersArr,
  setPage,
  setTotalPages,
}) => {
  // const dispatch = useAppDispatch();

  const handleSubmitForm = async (values: FormValues) => {
    const result = await getFilterdChar({ values });
    setFullCharactersArr(result);
    console.log(result);
    setPage(1);
    setTotalPages(result.length);

    // dispatch(getAllCharacters({ page:1, characters: fullCharactersArr }));
    if (toggleBackdrop) toggleBackdrop();
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
                  disabled={disabled}
                />
                <ErrorMessage name={field} component="div" />
              </InputWrapper>
            ))}
          </OptionalFieldWrapper>
          <CustomBtn
            buttonType="submit"
            variant="contained"
            disabled={disabled}
          >
            find
          </CustomBtn>
        </FormStyled>
      )}
    </Formik>
  );
};
