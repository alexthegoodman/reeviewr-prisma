import * as React from "react";

import { SignUpProps, SignUpFormValues } from "./SignUp.d";
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

const SignUp: React.FC<SignUpProps> = () => {
  const authClient = new AuthClient();
  const utility = new Utility();

  const [navbarTabId, setNavbarTabId] = React.useState("credentials" as TabId);
  const [fileError, setFileError] = React.useState(false);
  const [fileTypeError, setFileTypeError] = React.useState(false);
  const [fileSizeError, setFileSizeError] = React.useState(false);

  const handleTabChange = (navbarTabId: TabId) => {
    setNavbarTabId(navbarTabId);
  };

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
    artistName: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    // firstName: Yup.string().required("Required"),
    // lastName: Yup.string().required("Required"),
    aboutArtist: Yup.string(),
    profilePicture: Yup.string().required("Required"),
    favoriteGenre: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    age: Yup.number()
      .lessThan(100)
      .moreThan(13)
      .required("Required"),
    explicit: Yup.boolean(),
  });

  return (
    <Card className="floatingForm">
      <Text tagName="h1">Sign Up</Text>

      {fileError ? (
        <Callout title="Attention" intent="danger">
          Your file has no name. Contact support.
        </Callout>
      ) : (
        <></>
      )}

      {fileTypeError ? (
        <Callout title="Attention" intent="danger">
          Your file is not the correct type. Please upload PNG, JPG, or JPEG.
        </Callout>
      ) : (
        <></>
      )}

      {fileSizeError ? (
        <Callout title="Attention" intent="danger">
          Your file is not the correct size. It must be below 10mb.
        </Callout>
      ) : (
        <></>
      )}

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          artistName: "",
          // firstName: string;
          // lastName: string;
          aboutArtist: "",
          profilePicture: null,
          profilePictureType: "",
          profilePictureSize: 0,
          profilePictureData: null,
          favoriteGenre: "",
          gender: "",
          age: "",
          explicit: false,
        }}
        validationSchema={SignUpSchema}
        onSubmit={(
          values: SignUpFormValues,
          actions: FormikActions<SignUpFormValues>
        ) => {
          console.log("values", { values, actions });
          if (utility.isDefinedWithContent(values.profilePicture)) {
            if (
              values.profilePictureType !== "image/jpeg" &&
              values.profilePictureType !== "image/jpg" &&
              values.profilePictureType !== "image/png"
            ) {
              setFileTypeError(true);
            } else if (
              values.profilePictureSize < 10 &&
              values.profilePictureSize > 100000
            ) {
              setFileSizeError(true);
            } else {
              console.info("success", values);
              authClient.signup(values, (err, res) => {
                if (err) {
                  console.error(err);
                  // if (res.body.errorMessage === ERROR_CODE.C003) {
                  //   setUserDoesNotExist(true);
                  // } else {
                  //   setUserDoesNotExist(false);
                  // }
                }
                if (res.body.success) {
                  // redirect to Home
                  console.info("redirect thank you - go confirm your email");
                }
                actions.resetForm();
              });
            }
          } else {
            setFileError(true);
          }
        }}
        render={(formikBag: FormikProps<SignUpFormValues>) => {
          // console.info("formikbag", formikBag);
          const panel1 = (
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
                onClick={() => handleTabChange("basic")}
                disabled={formikBag.isSubmitting}
              >
                Next Step
              </Button>
            </>
          );

          const panel2 = (
            <>
              <TextField
                label="Artist Name"
                fieldName="artistName"
                fieldPlaceholder="Enter your artist name"
                fieldType="text"
              />
              <TextareaField
                label="About Artist"
                fieldName="aboutArtist"
                fieldPlaceholder="Tell us about yourself"
              />
              <UploadField
                label="Profile Picture"
                fieldName="profilePicture"
                helperText="Upload an image for the artist"
              />
              <Button
                onClick={() => handleTabChange("demographics")}
                disabled={formikBag.isSubmitting}
              >
                Next Step
              </Button>
            </>
          );

          const panel3 = (
            <>
              <SelectField
                label="Favorite Genre"
                fieldName="favoriteGenre"
                helperText="Pick your preferred genre"
                options={["Select", ...GenreList]}
              />
              <SelectField
                label="Gender"
                fieldName="gender"
                options={["Select", "Male", "Female"]}
              />
              <TextField
                label="Age"
                fieldName="age"
                fieldPlaceholder="Enter your age"
                fieldType="number"
              />
              <CheckboxField
                label="Do you enjoy explicit lyrics?"
                fieldName="explicit"
              />
              <Button
                type="submit"
                disabled={formikBag.isSubmitting}
                onClick={() => formikBag.submitForm()}
              >
                Finish
              </Button>
            </>
          );

          return (
            <Form>
              <Tabs
                id="SignUpTabs"
                onChange={handleTabChange}
                selectedTabId={navbarTabId}
              >
                <Tab id="credentials" title="Credentials" panel={panel1} />
                <Tab id="basic" title="Basic Info" panel={panel2} />
                <Tab id="demographics" title="Demographics" panel={panel3} />
              </Tabs>
            </Form>
          );
        }}
      />
    </Card>
  );
};

export default SignUp;
