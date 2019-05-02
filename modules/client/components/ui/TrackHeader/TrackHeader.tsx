import * as React from "react";

import { TrackHeaderProps } from "./TrackHeader.d";
import { Text } from "@blueprintjs/core";

import he from "he";

const TrackHeader: React.FC<TrackHeaderProps> = ({
  ref = null,
  className = "",
  trackTitle = "",
  artistName = "",
  duration = 0,
  genre = "",
  trackId = "",
  onTrackClick = e => console.info("Track click"),
  onArtistClick = e => console.info("Artist click"),
}) => {
  const trackClickHandler = e => onTrackClick(e);
  const artistClickHandler = e => onArtistClick(e);

  return (
    <section ref={ref} className={`trackHeader ${className}`}>
      <a className="trackTitle" onClick={trackClickHandler}>
        {decodeURI(decodeURIComponent(he.decode(trackTitle)))}
      </a>
      <a className="artistName" onClick={artistClickHandler}>
        {decodeURI(decodeURIComponent(artistName))}
      </a>
      <div className="metaData">
        <span>Duration: {duration}</span>
        <span>Genre: {genre}</span>
        <span>Track ID: {trackId}</span>
      </div>
    </section>
  );
};

export default TrackHeader;
