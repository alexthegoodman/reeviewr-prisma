import * as React from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  Button,
  Callout,
  Card,
  Dialog,
  FormGroup,
  InputGroup,
  Tab,
  TabId,
  Tabs,
  Text,
} from "@blueprintjs/core";
import { Form, Formik, FormikActions, FormikProps } from "formik";
import { useCookies } from "react-cookie";
import { useCurrentRoute, useNavigation } from "react-navi";
import * as Yup from "yup";
import { GenreList, Genres } from "../../../../defs/genres";
import { ERROR_CODE } from "../../../../services/ERROR_CODE";
import DataHandler from "../../../../services/DataHandler";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import { ADD_REVIEW } from "../../../graphql/mutations/review";
import { UPDATE_USER_META } from "../../../graphql/mutations/user";
import { USER_QUERY } from "../../../graphql/queries/user";
import AuthClient from "../../../services/AuthClient";
import Strings from "../../../services/Strings";
import AddReview from "../../ui/AddReview/AddReview";
import AnswerQuestion from "../../ui/AnswerQuestion/AnswerQuestion";
import CheckboxField from "../../ui/CheckboxField/CheckboxField";
import CreateQuestion from "../../ui/CreateQuestion/CreateQuestion";
import SelectField from "../../ui/SelectField/SelectField";
import TextareaField from "../../ui/TextareaField/TextareaField";
import TextField from "../../ui/TextField/TextField";
import UploadField from "../../ui/UploadField/UploadField";
import { AddReviewDataProps, AddReviewFormValues } from "./AddReviewData.d";

const AddReviewData: React.FC<AddReviewDataProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  track = null,
}) => {
  const strings = new Strings();
  const dataHandler = new DataHandler();
  const authClient = new AuthClient();
  const utility = new Utility();

  const clickHandler = (e) => onClick(e);

  const route = useCurrentRoute();
  const navigation = useNavigation();
  const [{ userData, mixpanel }, dispatch] = useAppContext();
  const [navbarTabId, setNavbarTabId] = React.useState("question1" as TabId);
  const [modelOpen, setModelOpen] = React.useState(false);
  const [cookies] = useCookies(["reeviewrId"]);

  const handleTabChange = (navbarTabId: TabId) => {
    setNavbarTabId(navbarTabId);
  };

  const [questionsBlankError, setQuestionsBlankError] = React.useState(false);

  const goToSignUp = () => {
    mixpanel.track("Open add review modal (signed out)", {
      env: process.env.NODE_ENV,
      time: new Date(),
    });
    navigation.navigate("/sign-up");
  };

  let addReview = <AddReview onClick={goToSignUp} />;

  let userMetaList = null;
  if (userData !== null && userData) {
    userMetaList = dataHandler.extractMultipleMeta(userData.user.userMeta, [
      "userArtistName",
      "profileImage",
      "userFavGenre",
      "userGenderDemo",
      "userAgeDemo",
      "userExplicitDemo",
    ]);

    const openReviewModel = () => {
      mixpanel.track("Open add review modal (signed in)", {
        env: process.env.NODE_ENV,
        time: new Date(),
      });
      setModelOpen(true);
    };

    addReview = (
      <AddReview
        imageUrl={userMetaList["profileImage"]}
        onClick={openReviewModel}
      />
    );
  }

  let trackMetaList = null;
  if (track !== null) {
    trackMetaList = dataHandler.extractMultipleMeta(track.itemMeta, [
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

    const questionType = [];
    const questionOptions = [];
    [1, 2, 3].forEach((num, i) => {
      if (trackMetaList[`questionFour${num}`] !== "") {
        questionType[i] = "mult_choice";
        questionOptions[i] = [
          {
            label: strings.decode(trackMetaList[`questionOne${num}`]),
            value: false,
          },
          {
            label: strings.decode(trackMetaList[`questionTwo${num}`]),
            value: false,
          },
          {
            label: strings.decode(trackMetaList[`questionThree${num}`]),
            value: false,
          },
          {
            label: strings.decode(trackMetaList[`questionFour${num}`]),
            value: false,
          },
        ];
      } else if (trackMetaList[`questionOne${num}`] !== "") {
        questionType[i] = "rating";
        questionOptions[i] = [];
      } else if (trackMetaList[`questionContent${num}`] !== "") {
        questionType[i] = "written_response";
        questionOptions[i] = [];
      } else {
        questionType[i] = "rating";
        questionOptions[i] = [];
      }
    });

    // console.info("meta list", questionType, trackMetaList, track.itemMeta);

    const AddReviewSchema = Yup.object().shape({
      questionAnswer1: Yup.string().required("Required"),
      questionAnswer2: Yup.string().required("Required"),
      questionAnswer3: Yup.string().required("Required"),
    });

    const addReviewMutation = useMutation(ADD_REVIEW);
    const totalPointsMutation = useMutation(UPDATE_USER_META);

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
            {questionsBlankError ? (
              <Callout title="Attention" intent="danger">
                You must answer all of the questions.
              </Callout>
            ) : (
              <></>
            )}

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
                const error = false;

                if (
                  values.questionAnswer1 === "" ||
                  values.questionAnswer2 === "" ||
                  values.questionAnswer3 === ""
                ) {
                  setQuestionsBlankError(true);
                } else {
                  setQuestionsBlankError(false);
                }

                if (!error) {
                  // console.info("success", values, track);

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

                  const savedPoints = parseInt(
                    dataHandler.extractMetaValue(
                      userData.user.userMeta,
                      "points"
                    )
                  );
                  const pointsId = dataHandler.extractMetaProp(
                    userData.user.userMeta,
                    "points",
                    "id"
                  );
                  const totalPoints = savedPoints + 1;

                  const {
                    data: data2,
                    errors: errors2,
                  } = await totalPointsMutation({
                    variables: {
                      metaId: pointsId,
                      metaValue: `${totalPoints}`,
                    },
                  });

                  // console.info(
                  //   "total points",
                  //   pointsId,
                  //   totalPoints,
                  //   data2,
                  //   errors2
                  // );

                  authClient.getUserData(dispatch);

                  actions.resetForm();
                  setModelOpen(false);

                  // console.info("data", data, errors);
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
                      options={questionOptions[0]}
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
                      options={questionOptions[1]}
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
                      options={questionOptions[2]}
                    />
                    <Button
                      type="submit"
                      disabled={formikBag.isSubmitting}
                      loading={formikBag.isSubmitting}
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
