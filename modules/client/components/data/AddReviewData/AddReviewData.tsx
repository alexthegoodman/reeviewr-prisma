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
import { useQuery, useMutation } from "react-apollo-hooks";
import { useAppContext } from "../../../context";
import { UPDATE_USER_META } from "../../../graphql/mutations/user";
import { ADD_REVIEW } from "../../../graphql/mutations/review";

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

  let userMetaList = null;
  if (userData !== null && userData) {
    userMetaList = legacy.extractMultipleMeta(userData.user.userMeta, [
      "userArtistName",
      "profileImage",
      "userFavGenre",
      "userGenderDemo",
      "userAgeDemo",
      "userExplicitDemo",
    ]);

    addReview = (
      <AddReview
        imageUrl={userMetaList["profileImage"]}
        onClick={() => setModelOpen(true)}
      />
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

    let questionType = [];
    [1, 2, 3].forEach((num, i) => {
      if (trackMetaList[`questionFour${num}`] !== "") {
        questionType[i] = "mult_choice";
      } else if (trackMetaList[`questionOne${num}`] !== "") {
        questionType[i] = "rating";
      } else if (trackMetaList[`questionContent${num}`] !== "") {
        questionType[i] = "written_response";
      }
    });

    // console.info("meta list", questionType, trackMetaList, track.itemMeta);

    const AddReviewSchema = Yup.object().shape({
      questionAnswer1: Yup.string().required("Required"),
      questionAnswer2: Yup.string().required("Required"),
      questionAnswer3: Yup.string().required("Required"),
    });

    const addReviewMutation = useMutation(ADD_REVIEW);

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
              onSubmit={async (
                values: AddReviewFormValues,
                actions: FormikActions<AddReviewFormValues>
              ) => {
                console.log("values", { values, actions });
                let error = false;

                if (!error) {
                  console.info("success", values, track);

                  const { data, errors } = await addReviewMutation({
                    variables: {
                      userId: userData.user.id,
                      trackId: track.id,
                      itemName: `Track ${track.id} Review`,
                      questionType1: questionType[0],
                      questionType2: questionType[1],
                      questionType3: questionType[2],
                      questionAnswer1: encodeURIComponent(
                        `${values.questionAnswer1}`
                      ),
                      questionAnswer2: encodeURIComponent(
                        `${values.questionAnswer2}`
                      ),
                      questionAnswer3: encodeURIComponent(
                        `${values.questionAnswer3}`
                      ),
                      preUserGenderDemo: userMetaList["userFavGenre"],
                      preUserFavDemo: userMetaList["userGenderDemo"],
                      preUserExplicitDemo: userMetaList["userAgeDemo"],
                      preUserAgeDemo: userMetaList["userExplicitDemo"],
                      preTrackId: track.id,
                      preAuthorId: userData.user.id,
                    },
                    refetchQueries: ["userTracks", "userTrack"],
                  });

                  console.info("data", data, errors);
                }
              }}
              render={(formikBag: FormikProps<AddReviewFormValues>) => {
                // console.info("formikbag", formikBag);
                const panel1 = (
                  <>
                    <Text tagName="h5">
                      {questionType[0] === "rating" ? (
                        <Text>Rate the following from 1 to 10</Text>
                      ) : (
                        <></>
                      )}
                      {strings.decode(trackMetaList["questionContent1"])}
                      {strings.decode(trackMetaList["questionOne1"])}
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
                      {questionType[1] === "rating" ? (
                        <Text>Rate the following from 1 to 10</Text>
                      ) : (
                        <></>
                      )}
                      {strings.decode(trackMetaList["questionContent2"])}
                      {strings.decode(trackMetaList["questionOne2"])}
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
                      {questionType[2] === "rating" ? (
                        <Text>Rate the following from 1 to 10</Text>
                      ) : (
                        <></>
                      )}
                      {strings.decode(trackMetaList["questionContent3"])}
                      {strings.decode(trackMetaList["questionOne3"])}
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
  } else {
    return <>Loading...</>;
  }
};

export default AddReviewData;
