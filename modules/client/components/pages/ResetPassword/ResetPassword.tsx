import * as React from "react";

import { ResetPasswordProps, ResetPasswordValues } from "./ResetPassword.d";
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
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import Utility from "../../../../services/Utility";

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const authClient = new AuthClient();
  const utilityService = new Utility();

  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const { forgotHash } = route.lastChunk.request.params;

  const [passwordReset, setPasswordReset] = React.useState(false);

  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    passwordConfirm: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  if (utilityService.isDefinedWithContent(forgotHash)) {
    return (
      <Card className="floatingForm">
        <Text tagName="h1">Reset Password</Text>
        <Text tagName="p">You may reset your password below.</Text>

        {passwordReset ? (
          <Callout title="Attention" intent="success">
            Your password has been reset! Try logging in with your new password.
          </Callout>
        ) : (
          <></>
        )}

        <Formik
          initialValues={{ password: "", passwordConfirm: "" }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(
            values: ResetPasswordValues,
            actions: FormikActions<ResetPasswordValues>
          ) => {
            console.log("values", { values, actions });
            authClient.resetPassword({ ...values, forgotHash }, (err, res) => {
              if (err) {
                // if (res.body.errorMessage === ERROR_CODE.C002) {
                // }
              }
              if (res.body.success) {
                setPasswordReset(true);
              } else {
                setPasswordReset(false);
              }
              actions.setSubmitting(false);
              actions.resetForm();
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
  } else {
    return (
      <Card className="floatingForm">
        <Text tagName="h1">Reset Password</Text>
        <Text tagName="p">
          You may not reset a password unless you use a special URL provided
          only when you request it via Forgot Password.
        </Text>
      </Card>
    );
  }
};

export default ResetPassword;
