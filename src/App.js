import { Formik } from "formik";
import {
  ButtonSignIn,
  ContainerFormInputs,
  ErrorText,
  Inputs,
  TitleForm,
} from "./formStyles.styled";

export const App = () => {
  const validationSignIn = (values, props) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (values.password) {
      errors.password = "Required";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(values.password)
    ) {
      errors.password =
        "Password must be at least 6 characters, include a letter and a number";
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validationSignIn}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <ContainerFormInputs onSubmit={handleSubmit}>
            <TitleForm>Login</TitleForm>
            <Inputs
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />
            <ErrorText>{errors.email}</ErrorText>
            <Inputs
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            <ErrorText>{errors.password}</ErrorText>
            <ButtonSignIn type="submit" disabled={isSubmitting}>
              Sign in
            </ButtonSignIn>
          </ContainerFormInputs>
        )}
      </Formik>
    </>
  );
};
