import * as React from "react";

import { TrackProps } from "./Track.d";
import TrackWaveForm from "../TrackWaveForm/TrackWaveForm";
import TrackHeader from "../TrackHeader/TrackHeader";
import TrackArt from "../TrackArt/TrackArt";
import AddReview from "../AddReview/AddReview";
import { Button } from "@blueprintjs/core";

const Track: React.FC<TrackProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  imageUrl = "",
  altText = "",
  trackTitle = "",
  artistName = "",
  children,
}) => {
  const clickHandler = e => onClick(e);

  return (
    <section ref={ref} className={`track ${className}`}>
      <div className="trackInfo">
        <div className="artContainer">
          <TrackArt imageUrl={imageUrl} altText={altText} />
        </div>
        <div className="infoContainer">
          <TrackHeader trackTitle={trackTitle} artistName={artistName} />
          <TrackWaveForm />
        </div>
      </div>
      <div className="trackActions">
        <div className="reviewContainer">{children}</div>
        <div className="actionContainer">
          <Button minimal={true} className="allReviewsButton">
            All Reviews
          </Button>
          <AddReview imageUrl="https://via.placeholder.com/100" />
        </div>
      </div>
    </section>
  );
};

export default Track;
