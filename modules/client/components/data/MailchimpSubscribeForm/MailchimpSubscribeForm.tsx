import * as React from "react";

import {
  MailchimpSubscribeFormProps,
  MailchimpSubscribeFormValues,
} from "./MailchimpSubscribeForm.d";

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
import IntegrationClient from "../../../services/IntegrationClient";
import CheckboxField from "../../ui/CheckboxField/CheckboxField";
import SelectField from "../../ui/SelectField/SelectField";
import TextareaField from "../../ui/TextareaField/TextareaField";
import TextField from "../../ui/TextField/TextField";
import UploadField from "../../ui/UploadField/UploadField";

const MailchimpSubscribeForm: React.FC<MailchimpSubscribeFormProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const integrationClient = new IntegrationClient();
  const utility = new Utility();

  const [{ mixpanel }, dispatch] = useAppContext();
  const [successfulSubmission, setSuccessfulSubmission] = React.useState(false);

  const MailchimpSubscribeSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .email("Invalid email")
      .required("Required"),
    question: Yup.string()
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

  if (successfulSubmission) {
    return (
      <Card className="floatingForm darkForm">
        <Text tagName="h1" className="headline">
          Thank you
        </Text>
        <Text tagName="p">Reeviewr will email you soon!</Text>
      </Card>
    );
  } else {
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            question: "",
          }}
          validationSchema={MailchimpSubscribeSchema}
          onSubmit={(
            values: MailchimpSubscribeFormValues,
            actions: FormikActions<MailchimpSubscribeFormValues>
          ) => {
            console.log(
              "values",
              { values, actions },
              mixpanel,
              mixpanel.track
            );

            mixpanel.track("Subscribe form submission attempt", {
              env: process.env.NODE_ENV,
              time: new Date(),
              data: {
                values,
              },
            });

            integrationClient.mailchimpSubscribe(values, (err, res) => {
              console.info("returned", err, res);

              if (err) {
                console.error(err);
              }
              if (res.body.success) {
                // redirect to Home
                console.info("thank you");
                setSuccessfulSubmission(true);
              }
              actions.resetForm();
            });
          }}
          render={(formikBag: FormikProps<MailchimpSubscribeFormValues>) => {
            // console.info("formikbag", formikBag);
            return (
              <Form>
                <>
                  <TextField
                    label="Email Address"
                    fieldName="email"
                    fieldPlaceholder=""
                    fieldType="email"
                  />
                  <TextField
                    label="What do you do / create?"
                    fieldName="question"
                    fieldPlaceholder=""
                    fieldType="text"
                  />
                  <Button
                    type="submit"
                    disabled={formikBag.isSubmitting}
                    loading={formikBag.isSubmitting}
                    // onClick={() => formikBag.submitForm()}
                  >
                    Request Invite
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

export default MailchimpSubscribeForm;
