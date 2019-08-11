import * as React from "react";

import { CreatePostFormProps, CreatePostFormValues } from "./CreatePostForm.d";

import {
  Button,
  Callout,
  Card,
  FormGroup,
  InputGroup,
  Tab,
  TabId,
  Tabs,
  Text,
} from "@blueprintjs/core";
import { Form, Formik, FormikActions, FormikProps } from "formik";
import { Link } from "react-navi";
import * as Yup from "yup";
import { GenreList, Genres } from "../../../../defs/genres";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import AuthClient from "../../../services/AuthClient";
import CheckboxField from "../../ui/CheckboxField/CheckboxField";
import SelectField from "../../ui/SelectField/SelectField";
import TextareaField from "../../ui/TextareaField/TextareaField";
import TextField from "../../ui/TextField/TextField";
import UploadField from "../../ui/UploadField/UploadField";

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const authClient = new AuthClient();
  const utility = new Utility();

  const [{ mixpanel }, dispatch] = useAppContext();
  const [userExists, setUserExists] = React.useState(false);
  // const [successfulSubmission, setSuccessfulSubmission] = React.useState(false);

  const CreatePostSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    // confirmPassword: Yup.string()
    //   .required("Required")
    //   .oneOf([Yup.ref("password"), null], "Passwords must match"),
    // agreeTerms: Yup.boolean().oneOf([true], "Must Accept Terms"),
  });

  const openInNewTab = url => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  // if (successfulSubmission) {
  //   return (
  //     <Card className="floatingForm darkForm">
  //       <Text tagName="h1" className="headline">
  //         Thank you
  //       </Text>
  //       <Text tagName="p">
  //         Welcome to Reeviewr! In order to continue, please check your email to
  //         confirm your email address.
  //       </Text>
  //     </Card>
  //   );
  // } else {
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
          agreeTerms: false,
        }}
        validationSchema={CreatePostSchema}
        onSubmit={(
          values: CreatePostFormValues,
          actions: FormikActions<CreatePostFormValues>
        ) => {
          console.log("values", { values, actions }, mixpanel, mixpanel.track);

          mixpanel.track("Create post form submission attempt", {
            env: process.env.NODE_ENV,
            time: new Date(),
            data: {
              values,
            },
          });

          authClient.createPost(values, (err, res) => {
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
              // setSuccessfulSubmission(true);
              window.location.href = window.location.origin;
            }
            actions.resetForm();
          });
        }}
        render={(formikBag: FormikProps<CreatePostFormValues>) => {
          // console.info("formikbag", formikBag);
          return (
            <Form>
              <>
                {/*
                  Tab 1 Post Details:
                  Find your interest
                  Upload / Input (pod dependent)
                  Title
                  Description
                  Tags
                  Tab 2 Questions:
                  Same question builder as before
                */}
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
  // }
};

export default CreatePostForm;
