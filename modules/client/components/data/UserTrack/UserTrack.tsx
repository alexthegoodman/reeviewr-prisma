import * as React from "react";

import { UserTrackProps } from "./UserTrack.d";
import { useQuery } from "react-apollo-hooks";
import { COVER_IMAGE_QUERY } from "../../../graphql/queries/userTrack";
import Track from "../../ui/Track/Track";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";

const UserTrack: React.FC<UserTrackProps> = ({ track = null }) => {
  console.info("track", track);
  let imageId = track.itemMeta.filter(meta => meta.metaName === "artId");
  let altText = track.itemName;
  let trackTitle = track.itemName;
  let firstName = track.user.userMeta.filter(
    meta => meta.metaName === "firstName"
  );
  let lastName = track.user.userMeta.filter(
    meta => meta.metaName === "lastName"
  );
  let userArtistName = track.user.userMeta.filter(
    meta => meta.metaName === "userArtistName"
  );
  imageId = typeof imageId[0] !== "undefined" ? imageId[0]["metaValue"] : "";

  firstName =
    typeof firstName[0] !== "undefined" ? firstName[0]["metaValue"] : "";
  lastName = typeof lastName[0] !== "undefined" ? lastName[0]["metaValue"] : "";
  userArtistName =
    typeof userArtistName[0] !== "undefined"
      ? userArtistName[0]["metaValue"]
      : "";
  console.info("track", track);
  console.info("imageUrl2", imageId);

  const {
    data: imageData,
    error: imageError,
    loading: imageLoading,
  } = useQuery(COVER_IMAGE_QUERY, { variables: { oldId: imageId } });

  if (imageLoading) {
    return <div>Loading image...</div>;
  }
  if (imageError) {
    return <div>Error on image! {imageError.message}</div>;
  }
  console.info("imageData", imageData);
  let imageUrl = null;
  if (imageData.file !== null) {
    imageUrl = imageData.file.itemMeta.filter(
      meta => meta.metaName === "attachedFile"
    );
    imageUrl =
      typeof imageUrl[0] !== "undefined"
        ? "https://s3.amazonaws.com/toxicrobin/toxicrobin/wp-content/uploads/" +
          imageUrl[0]["metaValue"]
        : "";
    // background-image: url(/uploads/2014/12/yophantom-pic-150x150.jpg)
  }
  console.info("imageUrl", imageUrl);
  return (
    <Track
      key={track.id}
      className="userTrack"
      imageUrl={imageUrl}
      altText={altText}
      trackTitle={trackTitle}
      artistName={
        userArtistName !== "" ? userArtistName : `${firstName} ${lastName}`
      }
    >
      {track.reviews.map(review => {
        let firstName = review.user.userMeta.filter(
          meta => meta.metaName === "firstName"
        );
        let lastName = review.user.userMeta.filter(
          meta => meta.metaName === "lastName"
        );
        let answerPreview = review.itemMeta.filter(
          meta => meta.metaName === "questionAnswer1"
        );
        let reviewerImageUrl = review.user.userMeta.filter(
          meta => meta.metaName === "heroId"
        );
        firstName =
          typeof firstName[0] !== "undefined" ? firstName[0]["metaValue"] : "";
        lastName =
          typeof lastName[0] !== "undefined" ? lastName[0]["metaValue"] : "";
        answerPreview =
          typeof answerPreview[0] !== "undefined"
            ? answerPreview[0]["metaValue"]
            : "";
        reviewerImageUrl =
          typeof reviewerImageUrl[0] !== "undefined"
            ? reviewerImageUrl[0]["metaValue"]
            : "";
        const reviewerAltText = `${firstName} ${lastName}`;
        const trackImageUrl = imageUrl;
        const trackAltText = altText;
        return (
          <ReviewCard
            key={review.id}
            artistTitle={`${firstName} ${lastName}`}
            answerPreview={answerPreview}
            reviewerImageUrl={reviewerImageUrl}
            reviewerAltText={reviewerAltText}
            trackImageUrl={trackImageUrl}
            trackAltText={trackAltText}
          />
        );
      })}
    </Track>
  );
};

export default UserTrack;
