import * as React from "react";

import { TrackProps } from "./Track.d";
import TrackWaveForm from "../TrackWaveForm/TrackWaveForm";
import TrackHeader from "../TrackHeader/TrackHeader";
import TrackArt from "../TrackArt/TrackArt";

const Track: React.FC<TrackProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);

  return (
    <section ref={ref} className={`track ${className}`}>
      <div className="artContainer">
        <TrackArt
          imageUrl="https://via.placeholder.com/400"
          altText="Reeviewr Track"
        />
      </div>
      <div className="infoContainer">
        <TrackHeader
          trackTitle="All of the Lights"
          artistName="Regina Spektor"
        />
        <TrackWaveForm />
      </div>
    </section>
  );
};

export default Track;
