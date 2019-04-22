import * as React from "react";

import { UserTrackProps } from "./UserTrack.d";
import { useQuery } from "react-apollo-hooks";
import { FILE_QUERY } from "../../../graphql/queries/userTrack";
import Track from "../../ui/Track/Track";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import Strings from "../../../services/Strings";
import Legacy from "../../../services/Legacy";
import ReviewCardData from "../ReviewCardData/ReviewCardData";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import { ImageSizes } from "../../../../defs/imageSizes";

const UserTrack: React.FC<UserTrackProps> = ({ track = null, children }) => {
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
  const audioId = legacy.extractMetaValue(track.itemMeta, "audioId");
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
  } = useQuery(FILE_QUERY, { variables: { oldId: imageId } });

  // consider delaying this query until playback begins - we have at lesat 20 - 30 queries when loading Home as-is
  const {
    data: audioData,
    error: audioError,
    loading: audioLoading,
  } = useQuery(FILE_QUERY, { variables: { oldId: audioId } });

  if (imageLoading) {
    return <div>Loading image...</div>;
  }
  if (imageError) {
    return <div>Error on image! {imageError.message}</div>;
  }

  if (audioLoading) {
    return <div>Loading audio...</div>;
  }
  if (audioError) {
    return <div>Error on audio! {audioError.message}</div>;
  }

  const imageUrl = legacy.extractArtUrl(imageData, track, ImageSizes.Medium);
  const audioUrl = legacy.extractMetaValue(
    audioData.file.itemMeta,
    "s3Info",
    process.env.V1_S3_URL
  );

  console.info("audioData", audioData);

  return (
    <Track
      className="userTrack"
      trackId={track.id}
      urlSegment={track.itemUrlSegment}
      imageUrl={imageUrl}
      audioUrl={audioUrl}
      altText={altText}
      trackTitle={trackTitle}
      artistName={
        userArtistName !== "" ? userArtistName : `${firstName} ${lastName}`
      }
      prependChildren={children}
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
