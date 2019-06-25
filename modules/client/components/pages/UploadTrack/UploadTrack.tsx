import * as React from "react";

import { UploadTrackProps, UploadFormValues } from "./UploadTrack.d";
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
import CreateQuestion from "../../ui/CreateQuestion/CreateQuestion";
import { useAppContext } from "../../../context";
import { useCurrentRoute, useNavigation } from "react-navi";
import UserTrackClient from "../../../services/UserTrackClient";
import Legacy from "../../../../services/Legacy";

const UploadTrack: React.FC<UploadTrackProps> = () => {
  const authClient = new AuthClient();
  const userTrackClient = new UserTrackClient();
  const utility = new Utility();
  const legacy = new Legacy();

  const [{ userData }, dispatch] = useAppContext();
  const route = useCurrentRoute();
  const navigation = useNavigation();

  const [navbarTabId, setNavbarTabId] = React.useState("basic" as TabId);

  const [coverArtError, setCoverArtError] = React.useState(false);
  const [coverArtTypeError, setCoverArtTypeError] = React.useState(false);
  const [coverArtSizeError, setCoverArtSizeError] = React.useState(false);

  const [trackAudioError, setTrackAudioError] = React.useState(false);
  const [trackAudioTypeError, setTrackAudioTypeError] = React.useState(false);
  const [trackAudioSizeError, setTrackAudioSizeError] = React.useState(false);

  const [questionType1, setQuestionType1] = React.useState("");
  const [questionType2, setQuestionType2] = React.useState("");
  const [questionType3, setQuestionType3] = React.useState("");

  const [startUpload, setStartUpload] = React.useState(false);

  const points = parseInt(
    legacy.extractMetaValue(userData.user.userMeta, "points")
  );

  // TODO: Buy 3 points for 3 dollars
  // TODO: Import from SoundCloud
  // TODO: Special properties such as Require Longer Reviews, Ask to Share

  if (!startUpload) {
    let cta = (
      <>
        <Text tagName="h1" className="headline">
          Join In
        </Text>
        <Text tagName="h2" className="headline">
          You must sign in to review songs and upload music.
        </Text>
        <Button
          className="uploadButton"
          onClick={() => navigation.navigate("/sign-up")}
        >
          Sign Up
        </Button>
      </>
    );
    if (userData !== null) {
      cta = (
        <>
          <Text tagName="h1" className="headline">
            Upload Track
          </Text>
          <Text tagName="h2" className="headline">
            You have {points} points to spend. You can upload{" "}
            {points >= 3 ? Math.floor(points / 3) : 0} songs.
          </Text>
          {points >= 3 ? (
            <Button
              className="uploadButton"
              onClick={() => setStartUpload(true)}
            >
              Upload Now
            </Button>
          ) : (
            <Text tagName="h2" className="headline">
              You must review 3 songs to upload!
            </Text>
          )}
        </>
      );
    }
    return (
      <section className="emptyState">
        <img src="/public/img/uploadEmpty.svg" />
        {cta}
      </section>
    );
  } else {
    const handleTabChange = (navbarTabId: TabId) => {
      setNavbarTabId(navbarTabId);
    };

    const SignUpSchema = Yup.object().shape({
      trackTitle: Yup.string()
        .min(2, "Too Short!")
        .max(200, "Too Long!")
        .required("Required"),
      genre: Yup.string().required("Required"),
      coverArt: Yup.string().required("Required"),
      trackAudio: Yup.string().required("Required"),
      questionType1: Yup.string().required("Required"),
      questionType2: Yup.string().required("Required"),
      questionType3: Yup.string().required("Required"),
    });

    return (
      <Card className="floatingForm">
        <Text tagName="h1" className="headline">
          Upload Track
        </Text>

        {coverArtError ? (
          <Callout title="Attention" intent="danger">
            Your cover art has no name. Contact support.
          </Callout>
        ) : (
          <></>
        )}

        {coverArtTypeError ? (
          <Callout title="Attention" intent="danger">
            Your cover art is not the correct type. Please upload PNG, JPG, or
            JPEG.
          </Callout>
        ) : (
          <></>
        )}

        {coverArtSizeError ? (
          <Callout title="Attention" intent="danger">
            Your cover art is not the correct size. It must be below 10mb.
          </Callout>
        ) : (
          <></>
        )}

        {trackAudioError ? (
          <Callout title="Attention" intent="danger">
            Your audio file has no name. Contact support.
          </Callout>
        ) : (
          <></>
        )}

        {trackAudioTypeError ? (
          <Callout title="Attention" intent="danger">
            Your audio file is not the correct type. Please upload MP3 or WAV.
          </Callout>
        ) : (
          <></>
        )}

        {trackAudioSizeError ? (
          <Callout title="Attention" intent="danger">
            Your audio file is not the correct size. It must be below 10mb.
          </Callout>
        ) : (
          <></>
        )}

        <Formik
          initialValues={{
            trackTitle: "",
            genre: "",

            coverArt: "",
            coverArtType: "",
            coverArtSize: 0,
            coverArtData: "",

            trackAudio: "",
            trackAudioType: "",
            trackAudioSize: 0,
            trackAudioData: "",

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
          validationSchema={SignUpSchema}
          onSubmit={(
            values: UploadFormValues,
            actions: FormikActions<UploadFormValues>
          ) => {
            actions.setSubmitting(true);
            console.log("values", { values, actions });
            if (utility.isDefinedWithContent(values.coverArt)) {
              if (utility.isDefinedWithContent(values.coverArt)) {
                let error = false;
                if (
                  values.coverArtType !== "image/jpeg" &&
                  values.coverArtType !== "image/jpg" &&
                  values.coverArtType !== "image/png"
                ) {
                  error = true;
                  setCoverArtTypeError(true);
                }

                if (values.coverArtSize < 10 && values.coverArtSize > 100000) {
                  error = true;
                  setCoverArtSizeError(true);
                }

                if (
                  values.trackAudioType !== "audio/mp3" &&
                  values.trackAudioType !== "auudio/wav" &&
                  values.trackAudioType !== "audio/mpeg"
                ) {
                  error = true;
                  setTrackAudioTypeError(true);
                }

                if (
                  values.trackAudioSize < 10 &&
                  values.trackAudioSize > 100000
                ) {
                  error = true;
                  setTrackAudioSizeError(true);
                }

                if (!error) {
                  console.info("success", values);
                  userTrackClient.createTrack(values, (err, res) => {
                    if (err) {
                      console.error(err);
                      actions.setSubmitting(false);
                      // if (res.body.errorMessage === ERROR_CODE.C008) {
                      //   setUserExists(true);
                      // } else {
                      //   setUserExists(false);
                      // }
                    }
                    if (res.body !== null && res.body.success) {
                      // TODO: show success toast and go to track page
                      navigation.navigate("/");
                      actions.resetForm();
                    }
                  });
                } else {
                  actions.setSubmitting(false);
                }
              } else {
                setTrackAudioError(true);
              }
            } else {
              setCoverArtError(true);
            }
            actions.setSubmitting(false);
          }}
          render={(formikBag: FormikProps<UploadFormValues>) => {
            // console.info("formikbag", formikBag);
            const panel1 = (
              <>
                <TextField
                  label="Track Title"
                  fieldName="trackTitle"
                  fieldPlaceholder="Enter the track name"
                  fieldType="text"
                />
                <SelectField
                  label="Genre"
                  fieldName="genre"
                  helperText="Pick the track's genre"
                  options={["Select", ...GenreList]}
                />
                <UploadField
                  label="Cover Art"
                  fieldName="coverArt"
                  helperText="Upload an image for the track"
                />
                <UploadField
                  label="Track Audio"
                  fieldName="trackAudio"
                  helperText="Upload an MP3 or WAV file"
                />
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

                <CreateQuestion
                  questionNumber="1"
                  questionType={questionType1}
                />

                <SelectField
                  label="Question Type 2"
                  fieldName="questionType2"
                  options={["Select", "Essay", "Rating", "Multiple Choice"]}
                  onChange={e => setQuestionType2(e.currentTarget["value"])}
                />

                <CreateQuestion
                  questionNumber="2"
                  questionType={questionType2}
                />

                <SelectField
                  label="Question Type 3"
                  fieldName="questionType3"
                  options={["Select", "Essay", "Rating", "Multiple Choice"]}
                  onChange={e => setQuestionType3(e.currentTarget["value"])}
                />

                <CreateQuestion
                  questionNumber="3"
                  questionType={questionType3}
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
                  id="UploadTabs"
                  onChange={handleTabChange}
                  selectedTabId={navbarTabId}
                >
                  <Tab id="basic" title="Basic Info" panel={panel1} />
                  <Tab id="questions" title="Questions" panel={panel2} />
                </Tabs>
              </Form>
            );
          }}
        />
      </Card>
    );
  }
};

export default UploadTrack;
