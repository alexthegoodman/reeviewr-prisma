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
} from "@blueprintjs/core";
import { Formik, Form, FormikActions, FormikProps } from "formik";
import TextField from "../../ui/TextField/TextField";
import * as Yup from "yup";

const SignUp: React.FC<SignUpProps> = () => {
  /* Step 1
   * Email
   * Password
   * Password Confirm
   * Step 2
   * Artist Name
   * First Name
   * Last Name
   * User Bio
   * Profile Picture
   * Step 3
   * Favorite Genre
   * Gender
   * Age
   * Do you enjoy explicit music and lyrics?
   */

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
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    artistName: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    // firstName: Yup.string().required("Required"),
    // lastName: Yup.string().required("Required"),
    userBio: Yup.string(),
    profilePicture: Yup.string().required("Required"),
    favoriteGenre: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    explicit: Yup.string(),
  });

  return (
    <>
      <Text tagName="h1">Sign Up</Text>

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          artistName: "",
          // firstName: string;
          // lastName: string;
          userBio: "",
          profilePicture: "",
          favoriteGenre: "",
          gender: "",
          age: "",
          explicit: "",
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
                fieldPlaceholder="Enter your email address"
                fieldType="artistName"
              />
              {/* <TextField
                label="First Name"
                fieldName="firstName"
                fieldPlaceholder="Enter your email address"
                fieldType="firstName"
              />
              <TextField
                label="Last Name"
                fieldName="lastName"
                fieldPlaceholder="Enter your email address"
                fieldType="lastName"
              /> */}
              <h2>User Bio textarea</h2>
              <h2>Profile Upload</h2>
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
              <h2>Favorite Genre dropdown</h2>
              <h2>Gender dropdown</h2>
              <h2>Age number input</h2>
              <h2>Explicit checkbox</h2>
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
    </>
  );
};

export default SignUp;
