import * as React from "react";

import { ForgotPasswordProps, ForgotPasswordValues } from "./ForgotPassword.d";
import {
  Text,
  Button,
  FormGroup,
  InputGroup,
  Card,
  Alert,
  Callout,
} from "@blueprintjs/core";
import { Formik, Form, FormikActions, FormikProps } from "formik";
import * as Yup from "yup";

import TextField from "../../ui/TextField/TextField";
import AuthClient from "../../../services/AuthClient";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const authClient = new AuthClient();

  const [cannotFindEmail, setCannotFindEmail] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .email("Invalid email")
      .required("Required"),
  });

  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Forgot Password
      </Text>
      <Text tagName="p">
        Enter your email below to recieve an email containing instructions to
        reset your password.
      </Text>

      {cannotFindEmail ? (
        <Callout title="Attention" intent="danger">
          Cannot find email. Try signing up instead!
        </Callout>
      ) : (
        <></>
      )}

      {emailSent ? (
        <Callout title="Attention" intent="success">
          An email has been sent to you to reset your password!
        </Callout>
      ) : (
        <></>
      )}

      <Formik
        initialValues={{ email: "" }}
        validationSchema={LoginSchema}
        onSubmit={(
          values: ForgotPasswordValues,
          actions: FormikActions<ForgotPasswordValues>
        ) => {
          console.log("values", { values, actions });
          authClient.forgotPassword(values, (err, res) => {
            if (err) {
              // console.info("here 1");
              if (res.body.errorMessage === ERROR_CODE.C001) {
                // console.info("hero");
                setCannotFindEmail(true);
              } else {
                setCannotFindEmail(false);
              }
              // if (res.body.errorMessage === ERROR_CODE.C002) {
              // }
            }
            if (res.body.success) {
              setEmailSent(true);
            } else {
              setEmailSent(false);
            }
            actions.setSubmitting(false);
            actions.resetForm();
          });
        }}
        render={(formikBag: FormikProps<ForgotPasswordValues>) => {
          return (
            <Form>
              <TextField
                label="Email"
                fieldName="email"
                fieldPlaceholder="Enter your email address"
                fieldType="email"
              />
              <Button type="submit" disabled={formikBag.isSubmitting}>
                Submit
              </Button>
            </Form>
          );
        }}
      />
    </Card>
  );
};

export default ForgotPassword;
