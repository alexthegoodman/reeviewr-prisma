import * as React from "react";

import { UserTrackProps } from "./UserTrack.d";
import { useQuery } from "react-apollo-hooks";
import { COVER_IMAGE_QUERY } from "../../../graphql/queries/userTrack";
import Track from "../../ui/Track/Track";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import Strings from "../../../services/Strings";
import Legacy from "../../../services/Legacy";

const UserTrack: React.FC<UserTrackProps> = ({ track = null }) => {
  const legacy = new Legacy();
  const strings = new Strings();

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
  // console.info("imageData", imageData);
  let imageUrl = null;
  if (imageData.file !== null) {
    // background-image: url(/uploads/2014/12/yophantom-pic-150x150.jpg)
    imageUrl = imageData.file.itemMeta.filter(
      meta => meta.metaName === "attachedFile"
    );
    imageUrl =
      typeof imageUrl[0] !== "undefined"
        ? process.env.V1_S3_DIR + imageUrl[0]["metaValue"]
        : "";
  }

  // console.info("imageData", imageData);
  // legacy soundcloud imports
  if (imageUrl === "" || imageUrl === null) {
    let soundcloudArtUrl = track.itemMeta.filter(
      meta => meta.metaName === "scArtUrl"
    );

    soundcloudArtUrl =
      typeof soundcloudArtUrl[0] !== "undefined"
        ? strings.decode(soundcloudArtUrl[0]["metaValue"])
        : "";

    imageUrl = soundcloudArtUrl;
  }
  // console.info("imageUrl", track.id, imageUrl);
  return (
    <Track
      className="userTrack"
      imageUrl={imageUrl}
      altText={altText}
      trackTitle={trackTitle}
      artistName={
        userArtistName !== "" ? userArtistName : `${firstName} ${lastName}`
      }
    >
      {track.reviews.map(review => {
        let reviewFirstName = review.user.userMeta.filter(
          meta => meta.metaName === "firstName"
        );
        let reviewLastName = review.user.userMeta.filter(
          meta => meta.metaName === "lastName"
        );
        let answerPreview = review.itemMeta.filter(
          meta => meta.metaName === "questionAnswer1"
        );
        let reviewUserArtistName = review.user.userMeta.filter(
          meta => meta.metaName === "userArtistName"
        );

        // console.info("review user", review.user, reviewerImageUrl);

        reviewFirstName =
          typeof reviewFirstName[0] !== "undefined"
            ? reviewFirstName[0]["metaValue"]
            : "";
        reviewLastName =
          typeof reviewLastName[0] !== "undefined"
            ? reviewLastName[0]["metaValue"]
            : "";
        answerPreview =
          typeof answerPreview[0] !== "undefined"
            ? answerPreview[0]["metaValue"]
            : "";

        reviewUserArtistName =
          typeof reviewUserArtistName[0] !== "undefined"
            ? reviewUserArtistName[0]["metaValue"]
            : "";

        const reviewerAltText = `${firstName} ${lastName}`;
        const trackImageUrl = imageUrl;
        const trackAltText = altText;
        const reviewerImageUrl = legacy.extractProfileImage(review.user);

        // console.info("review", review.id);
        return (
          <ReviewCard
            key={review.id}
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
      })}
    </Track>
  );
};

export default UserTrack;
