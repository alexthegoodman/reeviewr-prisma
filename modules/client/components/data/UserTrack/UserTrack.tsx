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
import { Button, Tag } from "@blueprintjs/core";
import AddReview from "../../ui/AddReview/AddReview";
import AddReviewData from "../AddReviewData/AddReviewData";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";

const UserTrack: React.FC<UserTrackProps> = ({
  onClick = e => console.info("Click"),
  track = null,
  reviewLimit = null,
  children,
}) => {
  const legacy = new Legacy();
  const strings = new Strings();
  const core = new Core();
  const utility = new Utility();

  let navigation = useNavigation();
  const [{ audioManager }, dispatch] = useAppContext();
  const contextTrack = audioManager.tracks[track.id];

  // console.info("contextTrack", contextTrack);

  const clickHandler = e => onClick(e);

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

  let reviewRenderCount = 0;

  return (
    <Track
      className="userTrack"
      onClick={clickHandler}
      track={track}
      trackId={track.id}
      trackOldId={track.oldId}
      urlSegment={track.itemUrlSegment}
      imageUrl={imageUrl}
      audioUrl={audioFile}
      audioJson={audioJson}
      altText={altText}
      trackTitle={trackTitle}
      artistName={
        userArtistName !== "" ? userArtistName : `${firstName} ${lastName}`
      }
      headerChildren={
        <div className="metaData">
          <Tag round={true}>
            {utility.isDefinedWithContent(contextTrack) &&
            utility.isDefinedWithContent(contextTrack.audioPlayerRef) ? (
              core.getTrackDuration(contextTrack.audioPlayerRef, true)
            ) : (
              <>N/A</>
            )}
          </Tag>
          <Tag round={true}>
            {strings.decode(genre) !== ""
              ? strings.decode(genre)
              : strings.decode(scGenre)}
          </Tag>
          {/* TODO: Edit Track */}
          {/* TODO: Delete Track */}
        </div>
      }
      prependChildren={<>{children}</>}
      actionChildren={
        <>
          <Button
            minimal={true}
            className="allReviewsButton"
            onClick={navigateToTrack}
          >
            All Reviews
          </Button>
          <AddReviewData track={track} />
        </>
      }
    >
      {track.reviews.map((review, i) => {
        if (
          (reviewLimit !== null && reviewRenderCount < reviewLimit) ||
          reviewLimit === null
        ) {
          const reviewMetaList = legacy.extractMultipleMeta(review.itemMeta, [
            "questionAnswer1",
            "questionAnswer2",
            "questionAnswer3",
          ]);

          if (reviewMetaList["questionAnswer1"] !== "") {
            reviewRenderCount++;

            return (
              <div className="joyrideReview" key={review.id}>
                <ReviewCardData
                  node={i}
                  track={track}
                  review={review}
                  trackImageUrl={imageUrl}
                  trackAltText={altText}
                />
              </div>
            );
          }
        }
      })}
    </Track>
  );
};

export default UserTrack;
