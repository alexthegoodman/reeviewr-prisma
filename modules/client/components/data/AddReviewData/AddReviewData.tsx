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
import AnswerQuestion from "../../ui/AnswerQuestion/AnswerQuestion";
import Legacy from "../../../../services/Legacy";
import Strings from "../../../services/Strings";
import { useCookies } from "react-cookie";
import { useCurrentRoute, useNavigation } from "react-navi";
import { USER_QUERY } from "../../../graphql/queries/user";
import { useQuery } from "react-apollo-hooks";
import { useAppContext } from "../../../context";

const AddReviewData: React.FC<AddReviewDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  track = null,
}) => {
  const strings = new Strings();
  const legacy = new Legacy();
  const authClient = new AuthClient();
  const utility = new Utility();

  const clickHandler = e => onClick(e);

  const route = useCurrentRoute();
  const navigation = useNavigation();
  const [{ userData }, dispatch] = useAppContext();
  const [navbarTabId, setNavbarTabId] = React.useState("question1" as TabId);
  const [modelOpen, setModelOpen] = React.useState(false);
  const [cookies] = useCookies(["reeviewrPrivateHash"]);

  const handleTabChange = (navbarTabId: TabId) => {
    setNavbarTabId(navbarTabId);
  };

  let addReview = <AddReview onClick={() => navigation.navigate("/sign-up")} />;

  if (userData !== null) {
    const userArtistName = legacy.extractMetaValue(
      userData.user.userMeta,
      "userArtistName"
    );
    const profileImage = legacy.extractMetaValue(
      userData.user.userMeta,
      "profileImage"
    );
    addReview = (
      <AddReview imageUrl={profileImage} onClick={() => setModelOpen(true)} />
    );
  }

  let trackMetaList = null;
  if (track !== null) {
    trackMetaList = legacy.extractMultipleMeta(track.itemMeta, [
      "questionCount",
      "theOption",
      "audioId",
      "genre",
      "artId",
      "questionContent1",
      "questionOne1",
      "questionTwo1",
      "questionThree1",
      "questionFour1",
      "questionContent2",
      "questionOne2",
      "questionTwo2",
      "questionThree2",
      "questionFour2",
      "questionContent3",
      "questionOne3",
      "questionTwo3",
      "questionThree3",
      "questionFour3",
      "paid",
      "reviewCount",
      "reviewedBy",
    ]);
  }

  let questionType = [];
  [1, 2, 3].forEach((num, i) => {
    if (trackMetaList[`questionFour${num}`] !== "") {
      questionType[i] = "multChoice";
    } else if (trackMetaList[`questionOne${num}`] !== "") {
      questionType[i] = "rating";
    } else if (trackMetaList[`questionContent${num}`] !== "") {
      questionType[i] = "essay";
    }
  });

  console.info("meta list", questionType, trackMetaList, track.itemMeta);

  const AddReviewSchema = Yup.object().shape({
    questionAnswer1: Yup.string().required("Required"),
    questionAnswer2: Yup.string().required("Required"),
    questionAnswer3: Yup.string().required("Required"),
  });

  return (
    <>
      {addReview}
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
              questionAnswer1: questionType[0] === "rating" ? 5 : "",
              questionAnswer2: questionType[1] === "rating" ? 5 : "",
              questionAnswer3: questionType[2] === "rating" ? 5 : "",
            }}
            validationSchema={AddReviewSchema}
            onSubmit={(
              values: AddReviewFormValues,
              actions: FormikActions<AddReviewFormValues>
            ) => {
              console.log("values", { values, actions });
              let error = false;

              if (!error) {
                console.info("success", values);
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
                  <Text tagName="h5">
                    {strings.decode(trackMetaList["questionContent1"])}
                  </Text>
                  <AnswerQuestion
                    questionNumber="1"
                    questionType={questionType[0]}
                  />
                  <Button
                    onClick={() => handleTabChange("question2")}
                    disabled={formikBag.isSubmitting}
                    className="actionButton"
                  >
                    Next Question
                  </Button>
                </>
              );

              const panel2 = (
                <>
                  <Text tagName="h5">
                    {strings.decode(trackMetaList["questionContent2"])}
                  </Text>
                  <AnswerQuestion
                    questionNumber="2"
                    questionType={questionType[1]}
                  />
                  <Button
                    onClick={() => handleTabChange("question3")}
                    disabled={formikBag.isSubmitting}
                    className="actionButton"
                  >
                    Next Question
                  </Button>
                </>
              );

              const panel3 = (
                <>
                  <Text tagName="h5">
                    {strings.decode(trackMetaList["questionContent3"])}
                  </Text>
                  <AnswerQuestion
                    questionNumber="3"
                    questionType={questionType[2]}
                  />
                  <Button
                    type="submit"
                    disabled={formikBag.isSubmitting}
                    className="actionButton"
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
                    className={`lightTabs`}
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
