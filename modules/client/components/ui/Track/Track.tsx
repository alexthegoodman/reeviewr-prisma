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
import Legacy from "../../../../services/Legacy";
import Strings from "../../../services/Strings";

const Track: React.FC<TrackProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  track = null,
  trackId = null,
  trackOldId = null,
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
  const legacy = new Legacy();
  const strings = new Strings();

  let navigation = useNavigation();

  const trackUrl = `/tracks/${trackId}/${urlSegment}`;
  const navigateToTrack = () => navigation.navigate(trackUrl);

  const userArtistName = legacy.extractMetaValue(
    track.user.userMeta,
    "userArtistName"
  );

  const artistUrl = `/artists/${track.user.id}/${strings.convertToSlug(
    userArtistName
  )}`;
  const navigateToArtist = () => navigation.navigate(artistUrl);

  const clickHandler = e => onClick(e);

  return (
    <section ref={ref} className={`track ${className}`}>
      <div className="trackInfo">
        <div className="artContainer mobileHide">
          <TrackArt
            imageUrl={imageUrl}
            altText={altText}
            onClick={navigateToTrack}
          />
          <LikeButton trackOldId={trackOldId} />
          <FollowButton artist={track.user} />
          <ShareButton url={"https://reeviewr.com" + trackUrl} />
        </div>
        <div className="infoContainer">
          <TrackHeader
            trackTitle={trackTitle}
            artistName={artistName}
            trackId={trackId}
            onTrackClick={navigateToTrack}
            onArtistClick={navigateToArtist}
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
