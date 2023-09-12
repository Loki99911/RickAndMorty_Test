import { FC, ReactNode } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import CustomBtn from "../CustomBtn/CustomBtn";
import { OptionalFieldWrapper, FormStyled } from "./FormicForm.styled";

interface FormicFormProps {
  currentFields: string[];
  children?: ReactNode;
}

interface FormicFormProps {
  currentFields: string[];
}

interface FormValues {
  [key: string]: string;
}

export const FormicForm: FC<FormicFormProps> = ({
  currentFields,
  children,
}) => {
  const handleSubmitForm = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        dimension: "",
        episode: "",
      }}
      validate={(values: FormValues) => {
        const errors: { [key: string]: string } = {};
        currentFields.forEach((field) => {
          if (!values[field]) {
            errors[field] = `Please provide ${field}`;
          }
        });
        return errors;
      }}
      onSubmit={handleSubmitForm}
    >
      {() => (
        <FormStyled>
          {children}
          <OptionalFieldWrapper>
            {currentFields.length === 0 && (
              <Field
                type="text"
                placeholder="Select item first"
                name="holder"
                className="form-field"
              />
            )}
            {currentFields.map((field) => (
              <div key={field}>
                <Field
                  type="text"
                  placeholder={`Add ${field}`}
                  name={field}
                  className="form-field"
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
