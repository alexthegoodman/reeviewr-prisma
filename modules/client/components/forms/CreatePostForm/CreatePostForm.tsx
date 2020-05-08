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
import { Form, Formik, FormikProps } from "formik";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-navi";
import * as Yup from "yup";
// import {
//   AllSpacesQuery,
//   AllTagsQuery,
// } from "../../../../../__generated__/gql-gen/grapql-types";
import { GenreList, Genres } from "../../../../defs/genres";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";
import DataHandler from "../../../../services/DataHandler";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import { ALL_SPACES } from "../../../graphql/queries/space";
import { ALL_TAGS } from "../../../graphql/queries/tag";
import AuthClient from "../../../services/AuthClient";
import ItemClient from "../../../services/ItemClient";
import AutocompleteField from "../../fields/AutocompleteField/AutocompleteField";
import CheckboxField from "../../fields/CheckboxField/CheckboxField";
import CreateQuestion from "../../review/CreateQuestion/CreateQuestion";
import QuillField from "../../fields/QuillField/QuillField";
import SelectField from "../../fields/SelectField/SelectField";
import TextareaField from "../../fields/TextareaField/TextareaField";
import TextField from "../../fields/TextField/TextField";
import UploadField from "../../fields/UploadField/UploadField";
import Hawaii from "../../../services/Hawaii";

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
}) => {
  const hawaii = new Hawaii();
  const authClient = new AuthClient();
  const itemClient = new ItemClient();
  const utility = new Utility();
  const dataHandler = new DataHandler();

  const [{ mixpanel }, dispatch] = useAppContext();
  const [formError, setFormError] = React.useState(null);
  const [navbarTabId, setNavbarTabId] = React.useState("basic" as TabId);

  // space / interests autocomplete
  const {
    data: spaceData,
    error: spaceError,
    loading: spaceLoading,
  }: { data?: any; loading?: any; error?: any } = useQuery(ALL_SPACES);

  let spaceOptions = [];
  if (!spaceLoading && utility.isDefinedWithContent(spaceData)) {
    spaceOptions = spaceData.findManySpace.map((space, i) => {
      const postType = dataHandler.extractMetaValue(space.itemMeta, "postType");
      return { label: space.itemName, value: space.id, postType };
    });
  }

  // tags autocomplete
  const {
    data: tagData,
    error: tagError,
    loading: tagLoading,
  }: { data?: any; loading?: any; error?: any } = useQuery(ALL_TAGS);

  let tagOptions = [];
  if (!tagLoading && utility.isDefinedWithContent(tagData)) {
    tagOptions = tagData.findManyTag.map((tag, i) => {
      return { label: tag.itemName, value: tag.id };
    });
  }

  // question types
  const [questionType1, setQuestionType1] = React.useState("");
  const [questionType2, setQuestionType2] = React.useState("");
  const [questionType3, setQuestionType3] = React.useState("");

  const CreatePostSchema = Yup.object().shape({
    space: Yup.string().required("Required"),
    content: Yup.string().required("Required"),
    title: Yup.string()
      .min(4, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(4, "Too Short!")
      .max(500, "Too Long!")
      .required("Required"),
    tags: Yup.string().required("Required"),
    questionType1: Yup.string().required("Required"),
    questionContent1: Yup.string()
      .min(4, "Too Short!")
      .max(300, "Too Long!")
      .required("Required"),
    questionType2: Yup.string().required("Required"),
    questionContent2: Yup.string()
      .min(4, "Too Short!")
      .max(300, "Too Long!")
      .required("Required"),
    questionType3: Yup.string().required("Required"),
    questionContent3: Yup.string()
      .min(4, "Too Short!")
      .max(300, "Too Long!")
      .required("Required"),
  });

  const handleTabChange = (navbarTabId: TabId) => {
    setNavbarTabId(navbarTabId);
  };

  return (
    <>
      {formError !== null ? (
        <Callout title="Attention" intent="danger">
          {formError}
        </Callout>
      ) : (
        <></>
      )}

      <Formik
        initialValues={{
          space: "",
          content: "",
          title: "",
          description: "",
          tags: "",

          questionType1: "",
          questionContent1: "",
          questionOne1: "",
          questionTwo1: "",
          questionThree1: "",
          questionFour1: "",

          questionType2: "",
          questionContent2: "",
          questionOne2: "",
          questionTwo2: "",
          questionThree2: "",
          questionFour2: "",

          questionType3: "",
          questionContent3: "",
          questionOne3: "",
          questionTwo3: "",
          questionThree3: "",
          questionFour3: "",
        }}
        validationSchema={CreatePostSchema}
        onSubmit={(values: CreatePostFormValues, actions) => {
          console.log("values", { values, actions }, mixpanel, mixpanel.track);

          mixpanel.track("Create post form submission attempt", {
            env: process.env.NODE_ENV,
            time: new Date(),
            data: {
              values,
            },
          });

          itemClient.createPost(values, (err, res) => {
            console.info("returned", err, res);

            if (typeof res.body.error !== "undefined") {
              setFormError(res.body.errorMessage);
            } else {
              setFormError(null);
            }

            if (res.body.success) {
              window.location.href = hawaii.stringHandler.getPostUrl(
                res.body.data.newPost
              );
            }
            actions.resetForm();
          });
        }}
        render={(formikBag: FormikProps<CreatePostFormValues>) => {
          let uploadField = <></>;
          if (formikBag.values["space"] !== "") {
            const postType = formikBag.values["space"]["postType"];
            if (postType === "Text") {
              uploadField = (
                <QuillField
                  label="Text"
                  fieldName="content"
                  helperText="This space allows text only. Must be between 100 and 100,000 characters."
                />
              );
            } else {
              let helperText = "";
              switch (postType) {
                case "Image":
                  helperText =
                    "This space allows images only. Must be under 10MB.";
                  break;
                case "Video":
                  helperText =
                    "This space allows videos only. Must be under 10MB.";
                  break;
                case "Audio":
                  helperText =
                    "This space allows audio only. Must be under 10MB.";
                  break;
              }
              uploadField = (
                <UploadField
                  label={postType}
                  fieldName="content"
                  helperText={helperText}
                />
              );
            }
          }

          const panel1 = (
            <>
              {!spaceLoading ? (
                <AutocompleteField
                  label="Find your interest"
                  fieldName="space"
                  helperText="Search for whatever you want feedback on"
                  options={spaceOptions}
                  isMulti={false}
                />
              ) : (
                <></>
              )}
              {uploadField}
              <TextField
                label="Post Title"
                fieldName="title"
                fieldPlaceholder=""
                fieldType="text"
              />
              <TextareaField
                label="Description"
                fieldName="description"
                fieldPlaceholder=""
              />
              {!tagLoading ? (
                <AutocompleteField
                  label="Add some tags"
                  fieldName="tags"
                  helperText="This will make your post easier to find"
                  options={tagOptions}
                  isMulti={true}
                />
              ) : (
                <></>
              )}
              <Button
                onClick={() => handleTabChange("questions")}
                disabled={formikBag.isSubmitting}
              >
                Next Step
              </Button>
            </>
          );
          const panel2 = (
            <>
              <SelectField
                label="Question Type 1"
                fieldName="questionType1"
                options={["Select", "Essay", "Rating", "Multiple Choice"]}
                onChange={(e) => setQuestionType1(e.currentTarget["value"])}
              />

              <CreateQuestion questionNumber="1" questionType={questionType1} />

              <SelectField
                label="Question Type 2"
                fieldName="questionType2"
                options={["Select", "Essay", "Rating", "Multiple Choice"]}
                onChange={(e) => setQuestionType2(e.currentTarget["value"])}
              />

              <CreateQuestion questionNumber="2" questionType={questionType2} />

              <SelectField
                label="Question Type 3"
                fieldName="questionType3"
                options={["Select", "Essay", "Rating", "Multiple Choice"]}
                onChange={(e) => setQuestionType3(e.currentTarget["value"])}
              />

              <CreateQuestion questionNumber="3" questionType={questionType3} />

              <Button
                type="submit"
                disabled={formikBag.isSubmitting}
                loading={formikBag.isSubmitting}
                // onClick={() => formikBag.submitForm()}
              >
                Finish
              </Button>
              {formikBag.isSubmitting ? (
                <Callout style={{ marginTop: 25 }}>
                  <Text tagName="span" className="textCenter darkHeadline">
                    Your post is being uploaded and processed... This may take a
                    minute or so...
                  </Text>
                </Callout>
              ) : (
                <></>
              )}
            </>
          );
          return (
            <Form>
              <>
                <Tabs
                  id="CreatePostTabs"
                  onChange={handleTabChange}
                  selectedTabId={navbarTabId}
                >
                  <Tab id="basic" title="Post Details" panel={panel1} />
                  <Tab id="questions" title="Questions" panel={panel2} />
                </Tabs>
              </>
            </Form>
          );
        }}
      />
    </>
  );
};

export default CreatePostForm;
