import * as React from "react";

import { ResetPasswordProps, ResetPasswordValues } from "./ResetPassword.d";
import { Text, Button, FormGroup, InputGroup, Card } from "@blueprintjs/core";
import { Formik, Form, FormikActions, FormikProps } from "formik";
import * as Yup from "yup";

import TextField from "../../ui/TextField/TextField";
import AuthClient from "../../../services/AuthClient";

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const authClient = new AuthClient();

  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    passwordConfirm: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });

  return (
    <Card className="floatingForm">
      <Text tagName="h1">Reset Password</Text>
      <Text tagName="p">You may reset your password below.</Text>

      <Formik
        initialValues={{ password: "", passwordConfirm: "" }}
        validationSchema={LoginSchema}
        onSubmit={(
          values: ResetPasswordValues,
          actions: FormikActions<ResetPasswordValues>
        ) => {
          console.log("values", { values, actions });
          authClient.forgotPassword(values, () => {
            actions.setSubmitting(false);
          });
        }}
        render={(formikBag: FormikProps<ResetPasswordValues>) => {
          return (
            <Form>
              <TextField
                label="Password"
                fieldName="password"
                fieldPlaceholder="Enter your password"
                fieldType="password"
              />
              <TextField
                label="Password Confirm"
                fieldName="passwordConfirm"
                fieldPlaceholder="Enter your password again"
                fieldType="password"
              />
              <Button type="submit" disabled={formikBag.isSubmitting}>
                Reset Password
              </Button>
            </Form>
          );
        }}
      />
    </Card>
  );
};

export default ResetPassword;
