import * as React from "react";

import { UserTrackProps } from "./UserTrack.d";
import { useQuery } from "react-apollo-hooks";
import { COVER_IMAGE_QUERY } from "../../../graphql/queries/userTrack";
import Track from "../../ui/Track/Track";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import Strings from "../../../services/Strings";
import Legacy from "../../../services/Legacy";
import ReviewCardData from "../ReviewCardData/ReviewCardData";

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

  const imageId = legacy.extractMetaValue(track.itemMeta, "artId");
  const firstName = legacy.extractMetaValue(track.user.userMeta, "firstName");
  const lastName = legacy.extractMetaValue(track.user.userMeta, "lastName");
  const userArtistName = legacy.extractMetaValue(
    track.user.userMeta,
    "userArtistName"
  );
  const altText = track.itemName;
  const trackTitle = track.itemName;

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

  const imageUrl = legacy.extractArtUrl(imageData, track);

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
        return (
          <ReviewCardData
            key={review.id}
            review={review}
            trackImageUrl={imageUrl}
            trackAltText={altText}
          />
        );
      })}
    </Track>
  );
};

export default UserTrack;
