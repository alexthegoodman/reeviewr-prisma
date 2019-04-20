import * as React from "react";

import { ReviewCardDataProps } from "./ReviewCardData.d";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import Legacy from "../../../services/Legacy";
import Strings from "../../../services/Strings";
import { FILE_QUERY } from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";

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

  if (trackImageUrl === "") {
    const track = review.userTrack;
    const imageId = legacy.extractMetaValue(track.itemMeta, "artId");
    const {
      data: imageData,
      error: imageError,
      loading: imageLoading,
    } = useQuery(FILE_QUERY, { variables: { oldId: imageId } });

    if (imageLoading) {
      return <div>Loading image...</div>;
    }
    if (imageError) {
      return <div>Error on image! {imageError.message}</div>;
    }

    trackImageUrl = legacy.extractArtUrl(imageData, track);
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
  const reviewerImageUrl = legacy.extractProfileImage(review.user);

  // console.info("review", review.id);
  return (
    <ReviewCard
      artistTitle={
        reviewUserArtistName !== ""
          ? reviewUserArtistName
          : `${reviewFirstName} ${reviewLastName}`
      }
      answerPreview={answerPreview}
      reviewerImageUrl={reviewerImageUrl}
      reviewerAltText={reviewerAltText}
      trackImageUrl={trackImageUrl}
      trackAltText={trackAltText}
    />
  );
};

export default ReviewCardData;
