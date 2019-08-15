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
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-navi";
import * as Yup from "yup";
import {
  AllPodsQuery,
  AllTagsQuery,
} from "../../../../../__generated__/gql-gen/grapql-types";
import { GenreList, Genres } from "../../../../defs/genres";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import { ALL_PODS } from "../../../graphql/queries/pod";
import { ALL_TAGS } from "../../../graphql/queries/tag";
import AuthClient from "../../../services/AuthClient";
import AutocompleteField from "../../ui/AutocompleteField/AutocompleteField";
import CheckboxField from "../../ui/CheckboxField/CheckboxField";
import CreateQuestion from "../../ui/CreateQuestion/CreateQuestion";
import QuillField from "../../ui/QuillField/QuillField";
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
  const legacy = new Legacy();

  const [{ mixpanel }, dispatch] = useAppContext();
  const [userExists, setUserExists] = React.useState(false);
  const [navbarTabId, setNavbarTabId] = React.useState("basic" as TabId);

  // pod / interests autocomplete
  const {
    data: podData,
    error: podError,
    loading: podLoading,
  }: { data?: AllPodsQuery; loading?: any; error?: any } = useQuery(ALL_PODS);

  let podOptions = [];
  if (!podLoading && utility.isDefinedWithContent(podData)) {
    podOptions = podData.findManyPod.map((pod, i) => {
      const postType = legacy.extractMetaValue(pod.itemMeta, "postType");
      return { label: pod.itemName, value: pod.id, postType };
    });
  }

  // tags autocomplete
  const {
    data: tagData,
    error: tagError,
    loading: tagLoading,
  }: { data?: AllTagsQuery; loading?: any; error?: any } = useQuery(ALL_TAGS);

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
    // email: Yup.string()
    //   .min(4, "Too Short!")
    //   .max(100, "Too Long!")
    //   .email("Invalid email")
    //   .required("Required"),
  });

  const handleTabChange = (navbarTabId: TabId) => {
    setNavbarTabId(navbarTabId);
  };

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
          pod: null,
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

          // authClient.createPost(values, (err, res) => {
          //   console.info("returned", err, res);

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
          //     console.info(
          //       "thank you - go confirm your email and complete your profile"
          //     );
          //     // setSuccessfulSubmission(true);
          //     window.location.href = window.location.origin;
          //   }
          //   actions.resetForm();
          // });
        }}
        render={(formikBag: FormikProps<CreatePostFormValues>) => {
          let uploadField = <></>;
          if (formikBag.values["pod"] !== null) {
            const postType = formikBag.values["pod"]["postType"];
            if (postType === "Text") {
              uploadField = (
                <QuillField
                  label="Text"
                  fieldName="content"
                  helperText="This pod allows text only. Must be between 100 and 100,000 characters."
                />
              );
            } else {
              let helperText = "";
              switch (postType) {
                case "Image":
                  helperText =
                    "This pod allows images only. Must be under 10MB.";
                  break;
                case "Video":
                  helperText =
                    "This pod allows videos only. Must be under 10MB.";
                  break;
                case "Audio":
                  helperText =
                    "This pod allows audio only. Must be under 10MB.";
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
              {!podLoading ? (
                <AutocompleteField
                  label="Find your interest"
                  fieldName="pod"
                  helperText="Search for whatever you want feedback on"
                  options={podOptions}
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
                onChange={e => setQuestionType1(e.currentTarget["value"])}
              />

              <CreateQuestion questionNumber="1" questionType={questionType1} />

              <SelectField
                label="Question Type 2"
                fieldName="questionType2"
                options={["Select", "Essay", "Rating", "Multiple Choice"]}
                onChange={e => setQuestionType2(e.currentTarget["value"])}
              />

              <CreateQuestion questionNumber="2" questionType={questionType2} />

              <SelectField
                label="Question Type 3"
                fieldName="questionType3"
                options={["Select", "Essay", "Rating", "Multiple Choice"]}
                onChange={e => setQuestionType3(e.currentTarget["value"])}
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