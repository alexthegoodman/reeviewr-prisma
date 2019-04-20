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

  // TODO: handle track playback
  // const [{ currentTrack }, dispatch] = useAppContext();

  // console.info("current track", currentTrack);

  // const toggleTrack = () => {
  //   dispatch({
  //     type: "setCurrentTrack",
  //     currentTrack: { playing: !currentTrack.playing },
  //   });
  // };

  let imageId = legacy.extractMetaValue(
    track.itemMeta.filter(meta => meta.metaName === "artId")
  );
  let firstName = legacy.extractMetaValue(
    track.user.userMeta.filter(meta => meta.metaName === "firstName")
  );
  let lastName = legacy.extractMetaValue(
    track.user.userMeta.filter(meta => meta.metaName === "lastName")
  );
  let userArtistName = legacy.extractMetaValue(
    track.user.userMeta.filter(meta => meta.metaName === "userArtistName")
  );
  let altText = track.itemName;
  let trackTitle = track.itemName;

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
    imageUrl = legacy.extractMetaValue(
      imageData.file.itemMeta.filter(meta => meta.metaName === "attachedFile"),
      process.env.V1_S3_DIR
    );
  }

  // legacy soundcloud imports
  if (imageUrl === "" || imageUrl === null) {
    let soundcloudArtUrl = legacy.extractMetaValue(
      track.itemMeta.filter(meta => meta.metaName === "scArtUrl"),
      "",
      true
    );

    imageUrl = soundcloudArtUrl;
  }
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
        let reviewFirstName = legacy.extractMetaValue(
          review.user.userMeta.filter(meta => meta.metaName === "firstName")
        );
        let reviewLastName = legacy.extractMetaValue(
          review.user.userMeta.filter(meta => meta.metaName === "lastName")
        );
        let answerPreview = legacy.extractMetaValue(
          review.itemMeta.filter(meta => meta.metaName === "questionAnswer1")
        );
        let reviewUserArtistName = legacy.extractMetaValue(
          review.user.userMeta.filter(
            meta => meta.metaName === "userArtistName"
          )
        );

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
