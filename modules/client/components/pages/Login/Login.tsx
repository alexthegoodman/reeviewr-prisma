import * as React from "react";

import { LoginProps, LoginFormValues } from "./Login.d";
import {
  Text,
  Button,
  FormGroup,
  InputGroup,
  Card,
  Callout,
} from "@blueprintjs/core";
import { Formik, Form, FormikActions, FormikProps } from "formik";
import * as Yup from "yup";

import TextField from "../../ui/TextField/TextField";
import AuthClient from "../../../services/AuthClient";
import { Link } from "react-navi";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";

const Login: React.FC<LoginProps> = () => {
  const authClient = new AuthClient();

  const [userDoesNotExist, setUserDoesNotExist] = React.useState(false);
  const [notValidType, setNotValidType] = React.useState(false);
  const [emailNotConfirmed, setEmailNotConfirmed] = React.useState(false);

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
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Login
      </Text>

      {notValidType ? (
        <Callout title="Attention" intent="danger">
          Your user is not a valid type. Please contact support.
        </Callout>
      ) : (
        <></>
      )}

      {emailNotConfirmed ? (
        <Callout title="Attention" intent="danger">
          Your email has yet to be confirmed. Please check your email!
        </Callout>
      ) : (
        <></>
      )}

      {userDoesNotExist ? (
        <Callout title="Attention" intent="warning">
          Please try another email and password combination.
        </Callout>
      ) : (
        <></>
      )}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(
          values: LoginFormValues,
          actions: FormikActions<LoginFormValues>
        ) => {
          console.log("values", { values, actions });
          authClient.login(values, (err, res) => {
            if (err) {
              if (res.body.errorMessage === ERROR_CODE.C003) {
                setUserDoesNotExist(true);
              } else {
                setUserDoesNotExist(false);
              }
              if (res.body.errorMessage === ERROR_CODE.C006) {
                setNotValidType(true);
              } else {
                setNotValidType(false);
              }
              if (res.body.errorMessage === ERROR_CODE.C007) {
                setEmailNotConfirmed(true);
              } else {
                setEmailNotConfirmed(false);
              }
            }
            if (res.body.success) {
              window.location.replace("/");
            }
            actions.resetForm();
          });
        }}
        render={(formikBag: FormikProps<LoginFormValues>) => {
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
              <Link href="/forgot-password">Forgot Password?</Link>
            </Form>
          );
        }}
      />
    </Card>
  );
};

export default Login;
