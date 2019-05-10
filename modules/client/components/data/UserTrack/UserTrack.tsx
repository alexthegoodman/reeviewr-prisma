import * as React from "react";

import { UserTrackProps } from "./UserTrack.d";
import { useQuery } from "react-apollo-hooks";
import { FILE_QUERY } from "../../../graphql/queries/userTrack";
import Track from "../../ui/Track/Track";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import Strings from "../../../services/Strings";
import Legacy from "../../../../services/Legacy";
import ReviewCardData from "../ReviewCardData/ReviewCardData";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import { ImageSizes } from "../../../../defs/imageSizes";
import Core from "../../../../services/Core";
import { Button } from "@blueprintjs/core";
import AddReview from "../../ui/AddReview/AddReview";
import AddReviewData from "../AddReviewData/AddReviewData";
import Utility from "../../../../services/Utility";

const UserTrack: React.FC<UserTrackProps> = ({ track = null, children }) => {
  const legacy = new Legacy();
  const strings = new Strings();
  const core = new Core();
  const utility = new Utility();

  let navigation = useNavigation();

  // TODO: handle track playback
  // const [{ currentTrack }, dispatch] = useAppContext();

  // console.info("current track", currentTrack);

  // const toggleTrack = () => {
  //   dispatch({
  //     type: "setCurrentTrack",
  //     currentTrack: { playing: !currentTrack.playing },
  //   });
  // };

  const firstName = legacy.extractMetaValue(track.user.userMeta, "firstName");
  const lastName = legacy.extractMetaValue(track.user.userMeta, "lastName");
  const userArtistName = legacy.extractMetaValue(
    track.user.userMeta,
    "userArtistName"
  );
  const altText = track.itemName;
  const trackTitle = track.itemName;

  const imageUrl = core.extractCoverArt(track);
  const audioFile = legacy.extractMetaValue(track.itemMeta, "audioFile");
  const audioJson = legacy.extractMetaValue(track.itemMeta, "audioJson");
  const genre = legacy.extractMetaValue(track.itemMeta, "genre");
  const scGenre = legacy.extractMetaValue(track.itemMeta, "scGenre");

  const navigateToTrack = () =>
    navigation.navigate(`/tracks/${track.id}/${track.itemUrlSegment}`);

  return (
    <Track
      className="userTrack"
      trackId={track.id}
      urlSegment={track.itemUrlSegment}
      imageUrl={imageUrl}
      audioUrl={audioFile}
      audioJson={audioJson}
      altText={altText}
      trackTitle={trackTitle}
      artistName={
        userArtistName !== "" ? userArtistName : `${firstName} ${lastName}`
      }
      prependChildren={
        <>
          <div className="metaData">
            <span>Duration: 0</span>
            <span>Genre: {strings.decode(genre)}</span>
            <span>SC Genre: {strings.decode(scGenre)}</span>
            {/* Edit Track */}
            {/* Delete Track */}
          </div>
          {children}
        </>
      }
      actionChildren={
        <>
          <Button
            minimal={true}
            className="allReviewsButton"
            onClick={navigateToTrack}
          >
            All Reviews
          </Button>
          <AddReviewData
            track={track}
            imageUrl="https://via.placeholder.com/100"
          />
        </>
      }
    >
      {track.reviews.map(review => {
        return (
          <ReviewCardData
            key={review.id}
            track={track}
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
