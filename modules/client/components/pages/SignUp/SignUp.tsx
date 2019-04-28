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
} from "@blueprintjs/core";
import { Formik, Form, FormikActions, FormikProps } from "formik";
import TextField from "../../ui/TextField/TextField";
import * as Yup from "yup";
import TextareaField from "../../ui/TextareaField/TextareaField";
import UploadField from "../../ui/UploadField/UploadField";
import SelectField from "../../ui/SelectField/SelectField";
import { Genres, GenreList } from "../../../../defs/genres";
import CheckboxField from "../../ui/CheckboxField/CheckboxField";

const SignUp: React.FC<SignUpProps> = () => {
  const [navbarTabId, setNavbarTabId] = React.useState("credentials" as TabId);

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

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          artistName: "",
          // firstName: string;
          // lastName: string;
          aboutArtist: "",
          profilePicture: "",
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
          console.log({ values, actions });
          // actions.setSubmitting(false);
        }}
        render={(formikBag: FormikProps<SignUpFormValues>) => {
          console.info(formikBag);

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
                label="Profile Image"
                fieldName="profileImage"
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
                options={GenreList}
              />
              <SelectField
                label="Gender"
                fieldName="gender"
                options={["Male", "Female"]}
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
              <Button type="submit" disabled={formikBag.isSubmitting}>
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
