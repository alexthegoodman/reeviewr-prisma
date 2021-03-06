import * as React from "react";

import {
  CreateSpaceFormProps,
  CreateSpaceFormValues,
} from "./CreateSpaceForm.d";

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
// import { Category } from "@generated/photon";
import { Form, Formik, FormikProps } from "formik";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-navi";
import * as Yup from "yup";
// import { AllCategoriesQuery } from "../../../../../__generated__/gql-gen/grapql-types";
import { GenreList, Genres } from "../../../../defs/genres";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import { ALL_CATEGORIES } from "../../../graphql/queries/category";
import AuthClient from "../../../services/AuthClient";
import ItemClient from "../../../services/ItemClient";
import AutocompleteField from "../../fields/AutocompleteField/AutocompleteField";
import CheckboxField from "../../fields/CheckboxField/CheckboxField";
import QuillField from "../../fields/QuillField/QuillField";
import SelectField from "../../fields/SelectField/SelectField";
import TextareaField from "../../fields/TextareaField/TextareaField";
import TextField from "../../fields/TextField/TextField";
import UploadField from "../../fields/UploadField/UploadField";

const CreateSpaceForm: React.FC<CreateSpaceFormProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
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
  }: { data?: any; loading?: any; error?: any } = useQuery(ALL_CATEGORIES);

  let categoryOptions = [];
  if (!categoryLoading && utility.isDefinedWithContent(categoryData)) {
    categoryOptions = categoryData.findManyCategory.map((category, i) => {
      return { label: category.itemName, value: category.id };
    });
  }

  // console.info("categoryData", categoryData);

  const CreateSpaceSchema = Yup.object().shape({
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
    privateSpace: Yup.boolean(),
    category: Yup.string().required("Required"),
  });

  const openInNewTab = (url) => {
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
          privateSpace: "",
          category: "",
        }}
        validationSchema={CreateSpaceSchema}
        onSubmit={(values: CreateSpaceFormValues, actions: any) => {
          console.log("values", { values, actions }, mixpanel, mixpanel.track);

          mixpanel.track("Create space form submission attempt", {
            env: process.env.NODE_ENV,
            time: new Date(),
            data: {
              values,
            },
          });

          itemClient.createSpace(values, (err, res) => {
            // console.info("returned", err, res);

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
              // console.info(
              //   "thank you - go to new space",
              //   res.body.data.newSpace.id
              // );
              // setSuccessfulSubmission(true);
              window.location.href =
                window.location.origin + "/spaces/" + res.body.data.newSpace.id;
            }
            actions.resetForm();
          });
        }}
        render={(formikBag: FormikProps<CreateSpaceFormValues>) => {
          // console.info("formikbag", formikBag);
          return (
            <Form>
              <>
                <TextField
                  label="Space Name"
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
                  helperText="Upload an image for the space"
                />
                <SelectField
                  label="Post Type"
                  fieldName="postType"
                  options={["Select", "Image", "Video", "Text", "Audio"]}
                  helperText="What kinds of posts can people upload to this space? For example, image for paintings and audio for music."
                />
                <CheckboxField
                  label="Private Space"
                  fieldName="privateSpace"
                  helperText="Consider upgrading if you need more than 1 private space"
                />
                {!categoryLoading ? (
                  <AutocompleteField
                    label="Category"
                    fieldName="category"
                    helperText="Pick the best category for this space"
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

export default CreateSpaceForm;
