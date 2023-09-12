import { FC } from "react";
import { Formik, ErrorMessage, Field } from "formik";
import CustomBtn from "../CustomBtn/CustomBtn";
import { OptionalFieldWrapper, FormStyled } from "./FormicForm.styled";
import TextField from "@mui/material/TextField";
import { getFilterdChar } from "../../helpers/getFilterdChar";

interface FormicFormProps {
  currentFields: string[];
}

interface FormicFormProps {
  currentFields: string[];
  selectedOptions?: string[];
}

export interface FormValues {
  [key: string]: string;
}

export const FormicForm: FC<FormicFormProps> = ({
  currentFields,
  selectedOptions,
}) => {
  const handleSubmitForm = async (values: FormValues) => {
    console.log("handleSubmitForm");

    if (selectedOptions) {
      const result = await getFilterdChar({ selectedOptions, values });
      console.log(result);
    }
  };

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
      // validate={(values: FormValues) => {
      //   const errors: { [key: string]: string } = {};
      //   currentFields.forEach((field) => {
      //     if (!values[field]) {
      //       errors[field] = `Please provide ${field}`;
      //     }
      //   });
      //   return errors;
      // }}
      onSubmit={handleSubmitForm}
    >
      {() => (
        <FormStyled>
          <OptionalFieldWrapper>
            {currentFields.length === 0 && (
              <Field
                type="text"
                placeholder="Select item first"
                name="holder"
                className="form-field"
                as={TextField}
              />
            )}
            {currentFields.map((field) => (
              <div key={field}>
                <Field
                  type="text"
                  placeholder={`Add ${field}`}
                  name={field}
                  className="form-field"
                  as={TextField}
                />
                <ErrorMessage
                  name={field}
                  component="div"
                  className="error-message"
                />
              </div>
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
