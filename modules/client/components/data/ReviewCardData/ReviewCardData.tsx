import * as React from "react";

import { ReviewCardDataProps } from "./ReviewCardData.d";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import Legacy from "../../../../services/Legacy";
import Strings from "../../../services/Strings";
import { FILE_QUERY } from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";
import { ImageSizes } from "../../../../defs/imageSizes";
import { Dialog, Text } from "@blueprintjs/core";
import Core from "../../../../services/Core";
import { Image } from "cloudinary-react";
import Utility from "../../../../services/Utility";

const ReviewCardData: React.FC<ReviewCardDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  review,
  track = null,
  trackImageUrl = "",
  trackAltText = "",
}) => {
  const legacy = new Legacy();
  const strings = new Strings();
  const core = new Core();
  const utility = new Utility();

  const clickHandler = e => onClick(e);

  const [modelOpen, setModelOpen] = React.useState(false);

  let trackId = null;
  let trackMetaList = null;
  if (
    track == null &&
    trackImageUrl === "" &&
    utility.isDefinedWithContent(review.userTrack)
  ) {
    const track = review.userTrack;
    trackId = review.userTrack.id;
    trackImageUrl = core.extractCoverArt(track);
    trackAltText = track.itemName;

    trackMetaList = legacy.extractMultipleMeta(review.userTrack.itemMeta, [
      "questionCount",
      "theOption",
      "audioId",
      "genre",
      "artId",
      "questionContent3",
      "questionOne3",
      "questionTwo3",
      "questionThree3",
      "questionFour3",
      "questionContent2",
      "questionOne2",
      "questionTwo2",
      "questionThree2",
      "questionFour2",
      "questionContent1",
      "questionOne1",
      "questionTwo1",
      "questionThree1",
      "questionFour1",
      "paid",
      "reviewCount",
      "reviewedBy",
    ]);
  } else if (track !== null) {
    trackMetaList = legacy.extractMultipleMeta(track.itemMeta, [
      "questionCount",
      "theOption",
      "audioId",
      "genre",
      "artId",
      "questionContent3",
      "questionOne3",
      "questionTwo3",
      "questionThree3",
      "questionFour3",
      "questionContent2",
      "questionOne2",
      "questionTwo2",
      "questionThree2",
      "questionFour2",
      "questionContent1",
      "questionOne1",
      "questionTwo1",
      "questionThree1",
      "questionFour1",
      "paid",
      "reviewCount",
      "reviewedBy",
    ]);
  }

  const userMetaList = legacy.extractMultipleMeta(review.user.userMeta, [
    "firstName",
    "lastName",
    "userArtistName",
    "profileImage",
  ]);

  const reviewMetaList = legacy.extractMultipleMeta(review.itemMeta, [
    "questionAnswer1",
    "questionAnswer2",
    "questionAnswer3",
  ]);

  const fullName = `${userMetaList["firstName"]} ${userMetaList["lastName"]}`;

  let profileImage = userMetaList["profileImage"];
  if (profileImage === "") {
    profileImage = "https://via.placeholder.com/100";
  }

  return (
    <>
      <ReviewCard
        artistTitle={
          userMetaList["userArtistName"] !== ""
            ? userMetaList["userArtistName"]
            : fullName
        }
        answerPreview={reviewMetaList["questionAnswer1"]}
        reviewerImageUrl={profileImage}
        reviewerAltText={fullName}
        reviewerId={review.user.id}
        trackImageUrl={trackImageUrl}
        trackAltText={trackAltText}
        trackId={trackId}
        onClick={e => {
          // clickHandler(e);
          setModelOpen(true);
        }}
      />
      {trackMetaList !== null ? (
        <Dialog
          isOpen={modelOpen}
          title={"Review Detail"}
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          onClose={() => setModelOpen(false)}
        >
          <section className="dialog-body">
            <div className="question question1">
              <Text tagName="h5">
                {strings.decode(trackMetaList.questionContent1)}
              </Text>
              <Text tagName="p">
                {strings.decode(reviewMetaList["questionAnswer1"])}
              </Text>
            </div>
            <div className="question question2">
              <Text tagName="h5">
                {strings.decode(trackMetaList.questionContent2)}
              </Text>
              <Text tagName="p">
                {strings.decode(reviewMetaList["questionAnswer2"])}
              </Text>
            </div>
            <div className="question question3">
              <Text tagName="h5">
                {strings.decode(trackMetaList.questionContent3)}
              </Text>
              <Text tagName="p">
                {strings.decode(reviewMetaList["questionAnswer3"])}
              </Text>
            </div>
          </section>
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};

export default ReviewCardData;
