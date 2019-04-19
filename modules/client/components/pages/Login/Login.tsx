import * as React from "react";

import { LoginProps, LoginFormValues } from "./Login.d";
import { Text, Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { Formik, Form, FormikActions, FormikProps } from "formik";
import * as Yup from "yup";

import TextField from "../../ui/TextField/TextField";

const Login: React.FC<LoginProps> = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      <Text tagName="h1">Login</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(
          values: LoginFormValues,
          actions: FormikActions<LoginFormValues>
        ) => {
          console.log({ values, actions });
          // actions.setSubmitting(false);
        }}
        render={(formikBag: FormikProps<LoginFormValues>) => {
          console.info(formikBag);
          return (
            <Form>
              <TextField
                label="Email"
                fieldName="email"
                fieldPlaceholder="Enter your email address"
                fieldType="email"
              />
              <TextField
                label="Password"
                fieldName="password"
                fieldPlaceholder="Enter your password"
                fieldType="password"
              />
              <Button type="submit" disabled={formikBag.isSubmitting}>
                Login
              </Button>
            </Form>
          );
        }}
      />
    </>
  );
};

export default Login;
