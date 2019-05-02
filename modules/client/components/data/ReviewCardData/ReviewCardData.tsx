import * as React from "react";

import { ReviewCardDataProps } from "./ReviewCardData.d";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import Legacy from "../../../../services/Legacy";
import Strings from "../../../services/Strings";
import { FILE_QUERY } from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";
import { ImageSizes } from "../../../../defs/imageSizes";
import { Dialog } from "@blueprintjs/core";
import Core from "../../../../services/Core";
import { Image } from "cloudinary-react";
import Utility from "../../../../services/Utility";

const ReviewCardData: React.FC<ReviewCardDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  review,
  trackImageUrl = "",
  trackAltText = "",
}) => {
  const legacy = new Legacy();
  const strings = new Strings();
  const core = new Core();
  const utility = new Utility();

  const [modelOpen, setModelOpen] = React.useState(false);
  let trackId = null;
  if (trackImageUrl === "" && utility.isDefinedWithContent(review.userTrack)) {
    const track = review.userTrack;
    trackId = review.userTrack.id;

    trackImageUrl = core.extractCoverArt(track);
    console.info("url", trackImageUrl);
    trackAltText = track.itemName;
  }

  const clickHandler = e => onClick(e);
  const reviewFirstName = legacy.extractMetaValue(
    review.user.userMeta,
    "firstName"
  );
  const reviewLastName = legacy.extractMetaValue(
    review.user.userMeta,
    "lastName"
  );
  const answerPreview = legacy.extractMetaValue(
    review.itemMeta,
    "questionAnswer1"
  );
  const reviewUserArtistName = legacy.extractMetaValue(
    review.user.userMeta,
    "userArtistName"
  );

  const reviewerAltText = `${reviewFirstName} ${reviewLastName}`;
  // const reviewerImageUrl = legacy.extractProfileImage(
  //   review.user,
  //   ImageSizes.ProfileImage
  // );

  let reviewerImageUrl = legacy.extractMetaValue(
    review.user.userMeta,
    "profileImage"
  );

  if (reviewerImageUrl === "") {
    reviewerImageUrl = "https://via.placeholder.com/100";
  }

  // reviewerImageUrl = core.extractImageOfSize(reviewerImageUrl, ImageSizes.ProfileImage);

  // console.info("review", review.id);
  return (
    <>
      <ReviewCard
        artistTitle={
          reviewUserArtistName !== ""
            ? reviewUserArtistName
            : `${reviewFirstName} ${reviewLastName}`
        }
        answerPreview={answerPreview}
        reviewerImageUrl={reviewerImageUrl}
        reviewerAltText={reviewerAltText}
        reviewerId={review.user.id}
        trackImageUrl={trackImageUrl}
        trackAltText={trackAltText}
        trackId={trackId}
        onClick={() => setModelOpen(true)}
      />
      <Dialog
        isOpen={modelOpen}
        title={"Review Detail"}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        onClose={() => setModelOpen(false)}
      >
        <h1>{reviewUserArtistName}</h1>
      </Dialog>
    </>
  );
};

export default ReviewCardData;
