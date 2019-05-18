import * as React from "react";

import { TrackProps } from "./Track.d";
import TrackWaveForm from "../TrackWaveForm/TrackWaveForm";
import TrackHeader from "../TrackHeader/TrackHeader";
import TrackArt from "../TrackArt/TrackArt";
import AddReview from "../AddReview/AddReview";
import { Button } from "@blueprintjs/core";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import LikeButton from "../LikeButton/LikeButton";
import FollowButton from "../FollowButton/FollowButton";
import ShareButton from "../ShareButton/ShareButton";

const Track: React.FC<TrackProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  trackId = null,
  urlSegment = "",
  imageUrl = "",
  audioUrl = "",
  audioJson = null,
  altText = "",
  trackTitle = "",
  artistName = "",
  prependChildren,
  children,
  actionChildren,
  headerChildren,
}) => {
  let navigation = useNavigation();

  const trackUrl = `/tracks/${trackId}/${urlSegment}`;

  const navigateToTrack = () => navigation.navigate(trackUrl);

  const clickHandler = e => onClick(e);

  return (
    <section ref={ref} className={`track ${className}`}>
      <div className="trackInfo">
        <div className="artContainer">
          <TrackArt
            imageUrl={imageUrl}
            altText={altText}
            onClick={navigateToTrack}
          />
          <LikeButton />
          <FollowButton />
          <ShareButton url={"https://reeviewr.com" + trackUrl} />
        </div>
        <div className="infoContainer">
          <TrackHeader
            trackTitle={trackTitle}
            artistName={artistName}
            trackId={trackId}
            onTrackClick={navigateToTrack}
          />
          <div className="headerChildren">{headerChildren}</div>
          <TrackWaveForm
            trackId={trackId}
            audioUrl={audioUrl}
            audioJson={audioJson}
            imageUrl={imageUrl}
          />
          <div className="prependChildren">{prependChildren}</div>
          <div className="reviewContainer">{children}</div>
        </div>
      </div>
      <div className="trackActions">
        <div className="actionContainer">{actionChildren}</div>
      </div>
    </section>
  );
};

export default Track;
