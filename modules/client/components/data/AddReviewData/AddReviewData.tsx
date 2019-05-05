import * as React from "react";

import { AddReviewDataProps, AddReviewFormValues } from "./AddReviewData.d";
import AddReview from "../../ui/AddReview/AddReview";
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
  Dialog,
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
import CreateQuestion from "../../ui/CreateQuestion/CreateQuestion";

const AddReviewData: React.FC<AddReviewDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  imageUrl = "",
}) => {
  const authClient = new AuthClient();
  const utility = new Utility();

  const clickHandler = e => onClick(e);

  const [navbarTabId, setNavbarTabId] = React.useState("question1" as TabId);
  const [modelOpen, setModelOpen] = React.useState(false);

  const handleTabChange = (navbarTabId: TabId) => {
    setNavbarTabId(navbarTabId);
  };

  const AddReviewSchema = Yup.object().shape({
    questionAnswer1: Yup.string().required("Required"),
    questionAnswer2: Yup.string().required("Required"),
    questionAnswer3: Yup.string().required("Required"),
  });

  return (
    <>
      <AddReview imageUrl={imageUrl} onClick={() => setModelOpen(true)} />
      <Dialog
        isOpen={modelOpen}
        title={"Review Track"}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        onClose={() => setModelOpen(false)}
      >
        <section className="dialog-body">
          {/* {coverArtError ? (
            <Callout title="Attention" intent="danger">
              Your cover art has no name. Contact support.
            </Callout>
          ) : (
            <></>
          )} */}
          <Formik
            initialValues={{
              questionAnswer1: "",
              questionAnswer2: "",
              questionAnswer3: "",
            }}
            validationSchema={AddReviewSchema}
            onSubmit={(
              values: AddReviewFormValues,
              actions: FormikActions<AddReviewFormValues>
            ) => {
              console.log("values", { values, actions });
              let error = false;

              if (!error) {
                console.info("sucess", values);
                // authClient.signup(values, (err, res) => {
                //   if (err) {
                //     console.error(err);
                //     if (res.body.errorMessage === ERROR_CODE.C008) {
                //       setUserExists(true);
                //     } else {
                //       setUserExists(false);
                //     }
                //   }
                //   if (res.body.success) {
                //     // redirect to Home
                //     console.info("redirect thank you - go confirm your email");
                //   }
                //   actions.resetForm();
                // });
              }
            }}
            render={(formikBag: FormikProps<AddReviewFormValues>) => {
              // console.info("formikbag", formikBag);
              const panel1 = (
                <>
                  <Text tagName="h5">{}</Text>
                  <TextField
                    label="Answer"
                    fieldName="questionAnswer1"
                    fieldPlaceholder="Enter your answer"
                    fieldType="text"
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
                    label="Track Title"
                    fieldName="trackTitle"
                    fieldPlaceholder="Enter the track name"
                    fieldType="text"
                  />
                  <Button
                    onClick={() => handleTabChange("basic")}
                    disabled={formikBag.isSubmitting}
                  >
                    Next Step
                  </Button>
                </>
              );

              const panel3 = (
                <>
                  <TextField
                    label="Track Title"
                    fieldName="trackTitle"
                    fieldPlaceholder="Enter the track name"
                    fieldType="text"
                  />
                  <Button
                    type="submit"
                    disabled={formikBag.isSubmitting}
                    // onClick={() => formikBag.submitForm()}
                  >
                    Finish
                  </Button>
                </>
              );

              return (
                <Form>
                  <Tabs
                    id="AddReviewTabs"
                    onChange={handleTabChange}
                    selectedTabId={navbarTabId}
                  >
                    <Tab id="question1" title="Question 1" panel={panel1} />
                    <Tab id="question2" title="Question 2" panel={panel2} />
                    <Tab id="question3" title="Question 3" panel={panel3} />
                  </Tabs>
                </Form>
              );
            }}
          />
        </section>
      </Dialog>
    </>
  );
};

export default AddReviewData;
