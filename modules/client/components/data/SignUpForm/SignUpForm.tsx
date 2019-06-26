import * as React from "react";

import { SignUpFormProps, SignUpFormValues } from "./SignUpForm.d";

import {
  Tabs,
  Tab,
  TabId,
  Text,
  Button,
  FormGroup,
  InputGroup,
  Card,
  Callout,
} from "@blueprintjs/core";
import { Formik, Form, FormikActions, FormikProps } from "formik";
import TextField from "../../ui/TextField/TextField";
import * as Yup from "yup";
import TextareaField from "../../ui/TextareaField/TextareaField";
import UploadField from "../../ui/UploadField/UploadField";
import SelectField from "../../ui/SelectField/SelectField";
import { Genres, GenreList } from "../../../../defs/genres";
import CheckboxField from "../../ui/CheckboxField/CheckboxField";
import AuthClient from "../../../services/AuthClient";
import Utility from "../../../../services/Utility";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";

const SignUpForm: React.FC<SignUpFormProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const authClient = new AuthClient();
  const utility = new Utility();

  const [userExists, setUserExists] = React.useState(false);
  const [successfulSubmission, setSuccessfulSubmission] = React.useState(false);

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  if (successfulSubmission) {
    return (
      <Card className="floatingForm darkForm">
        <Text tagName="h1" className="headline">
          Thank you
        </Text>
        <Text tagName="p">
          Welcome to Reeviewr! In order to continue, please check your email to
          confirm your email address.
        </Text>
      </Card>
    );
  } else {
    return (
      <>
        {userExists ? (
          <Callout title="Attention" intent="danger">
            A user with this email address already exists. Try signing in.
          </Callout>
        ) : (
          <></>
        )}

        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(
            values: SignUpFormValues,
            actions: FormikActions<SignUpFormValues>
          ) => {
            console.log("values", { values, actions });
            authClient.signup(values, (err, res) => {
              console.info("returned", err, res);
              if (err) {
                console.error(err);
                if (res.body.errorMessage === ERROR_CODE.C008) {
                  setUserExists(true);
                } else {
                  setUserExists(false);
                }
              }
              if (res.body.success) {
                // redirect to Home
                console.info(
                  "thank you - go confirm your email and complete your profile"
                );
                setSuccessfulSubmission(true);
              }
              actions.resetForm();
            });
          }}
          render={(formikBag: FormikProps<SignUpFormValues>) => {
            // console.info("formikbag", formikBag);
            return (
              <Form>
                <>
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
                  <TextField
                    label="Confirm Password"
                    fieldName="confirmPassword"
                    fieldPlaceholder="Confirm your password"
                    fieldType="password"
                  />
                  <Button
                    type="submit"
                    disabled={formikBag.isSubmitting}
                    loading={formikBag.isSubmitting}
                    // onClick={() => formikBag.submitForm()}
                  >
                    Sign Up
                  </Button>
                </>
              </Form>
            );
          }}
        />
      </>
    );
  }
};

export default SignUpForm;
