import * as React from "react";

import { CreatePodFormProps, CreatePodFormValues } from "./CreatePodForm.d";

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
import { Category } from "@generated/photon";
import { Form, Formik, FormikActions, FormikProps } from "formik";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-navi";
import * as Yup from "yup";
import { AllCategoriesQuery } from "../../../../../__generated__/gql-gen/grapql-types";
import { GenreList, Genres } from "../../../../defs/genres";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import { ALL_CATEGORIES } from "../../../graphql/queries/category";
import AuthClient from "../../../services/AuthClient";
import ItemClient from "../../../services/ItemClient";
import AutocompleteField from "../../ui/AutocompleteField/AutocompleteField";
import CheckboxField from "../../ui/CheckboxField/CheckboxField";
import SelectField from "../../ui/SelectField/SelectField";
import TextareaField from "../../ui/TextareaField/TextareaField";
import TextField from "../../ui/TextField/TextField";
import UploadField from "../../ui/UploadField/UploadField";

const CreatePodForm: React.FC<CreatePodFormProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const authClient = new AuthClient();
  const itemClient = new ItemClient();
  const utility = new Utility();

  const [{ mixpanel }, dispatch] = useAppContext();
  const [userExists, setUserExists] = React.useState(false);
  // const [successfulSubmission, setSuccessfulSubmission] = React.useState(false);

  const {
    data: categoryData,
    error: categoryError,
    loading: categoryLoading,
  }: { data?: AllCategoriesQuery; loading?: any; error?: any } = useQuery(
    ALL_CATEGORIES
  );

  let categoryOptions = [];
  if (!categoryLoading && utility.isDefinedWithContent(categoryData)) {
    categoryOptions = categoryData.findManyCategory.map((category, i) => {
      return { label: category.itemName, value: category.id };
    });
  }

  console.info("categoryData", categoryData);

  const CreatePodSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(4, "Too Short!")
      .max(500, "Too Long!")
      .required("Required"),
    banner: Yup.string().required("Required"),
    postType: Yup.string().required("Required"),
    privatePod: Yup.boolean(),
    category: Yup.string().required("Required"),
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
      {/* {userExists ? (
        <Callout title="Attention" intent="danger">
          A user with this email address already exists. Try signing in.
        </Callout>
      ) : (
        <></>
      )} */}

      <Formik
        initialValues={{
          name: "",
          description: "",
          banner: "",
          postType: "",
          privatePod: "",
          category: "",
        }}
        validationSchema={CreatePodSchema}
        onSubmit={(
          values: CreatePodFormValues,
          actions: FormikActions<CreatePodFormValues>
        ) => {
          console.log("values", { values, actions }, mixpanel, mixpanel.track);

          mixpanel.track("Create pod form submission attempt", {
            env: process.env.NODE_ENV,
            time: new Date(),
            data: {
              values,
            },
          });

          itemClient.createPod(values, (err, res) => {
            console.info("returned", err, res);

            if (err) {
              console.error(err);
              // if (res.body.errorMessage === ERROR_CODE.C008) {
              //   setUserExists(true);
              // } else {
              //   setUserExists(false);
              // }
            }
            if (res.body.success) {
              // redirect to Home
              console.info("thank you - go to new pod");
              // setSuccessfulSubmission(true);
              // window.location.href = window.location.origin;
            }
            actions.resetForm();
          });
        }}
        render={(formikBag: FormikProps<CreatePodFormValues>) => {
          // console.info("formikbag", formikBag);
          return (
            <Form>
              <>
                <TextField
                  label="Pod Name"
                  fieldName="name"
                  fieldPlaceholder="ex. Hip Hop Music"
                  fieldType="text"
                />
                <TextareaField
                  label="Description"
                  fieldName="description"
                  fieldPlaceholder="Who is this for, what is it about"
                />
                <UploadField
                  label="Banner Image"
                  fieldName="banner"
                  helperText="Upload an image for the pod"
                />
                <SelectField
                  label="Post Type"
                  fieldName="postType"
                  options={["Select", "Image", "Video", "Text", "Audio"]}
                  helperText="What kinds of posts can people upload to this pod? For example, image for paintings and audio for music."
                />
                <CheckboxField
                  label="Private Pod"
                  fieldName="privatePod"
                  helperText="Consider upgrading if you need more than 1 private pod"
                />
                {!categoryLoading ? (
                  <AutocompleteField
                    label="Category"
                    fieldName="category"
                    helperText="Pick the best category for this pod"
                    options={categoryOptions}
                    isMulti={false}
                  />
                ) : (
                  <></>
                )}
                <Text tagName="p">Costs 5 Points</Text>
                <Button
                  type="submit"
                  disabled={formikBag.isSubmitting}
                  loading={formikBag.isSubmitting}
                  // onClick={() => formikBag.submitForm()}
                >
                  Finish
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

export default CreatePodForm;
