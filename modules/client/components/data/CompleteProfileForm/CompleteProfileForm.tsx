import * as React from "react";

import {
  CompleteProfileFormProps,
  CompleteProfileValues,
} from "./CompleteProfileForm.d";

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

const CompleteProfileForm: React.FC<CompleteProfileFormProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const authClient = new AuthClient();
  const utility = new Utility();

  const [navbarTabId, setNavbarTabId] = React.useState("credentials" as TabId);
  const [fileError, setFileError] = React.useState(false);
  const [fileTypeError, setFileTypeError] = React.useState(false);
  const [fileSizeError, setFileSizeError] = React.useState(false);
  const [successfulSubmission, setSuccessfulSubmission] = React.useState(false);

  const handleTabChange = (navbarTabId: TabId) => {
    setNavbarTabId(navbarTabId);
  };

  const SignUpSchema = Yup.object().shape({
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
    <>
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
          values: CompleteProfileValues,
          actions: FormikActions<CompleteProfileValues>
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
              authClient.completeProfile(values, (err, res) => {
                console.info("returned", err, res);
                if (err) {
                  console.error(err);
                }
                if (res.body.success) {
                  // redirect to Home
                  console.info("thank you - go home");
                  setSuccessfulSubmission(true);
                  window.location.href = window.location.origin;
                }
                actions.resetForm();
              });
            }
          } else {
            setFileError(true);
          }
        }}
        render={(formikBag: FormikProps<CompleteProfileValues>) => {
          // console.info("formikbag", formikBag);
          const panel1 = (
            <>
              <TextField
                label="Artist Name"
                fieldName="artistName"
                fieldPlaceholder="Enter your artist name"
                fieldType="text"
              />
              <TextareaField
                label="About Artist / Bio"
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

          const panel2 = (
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
                label="Age / How old are you?"
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
                loading={formikBag.isSubmitting}
                // onClick={() => formikBag.submitForm()}
              >
                Finish
              </Button>
            </>
          );

          return (
            <Form>
              <Tabs
                id="CompleteProfileTabs"
                onChange={handleTabChange}
                selectedTabId={navbarTabId}
              >
                <Tab id="basic" title="Basic Info" panel={panel1} />
                <Tab id="demographics" title="Demographics" panel={panel2} />
              </Tabs>
            </Form>
          );
        }}
      />
    </>
  );
};

export default CompleteProfileForm;
