import window from "global";

if (typeof window === "undefined") {
  global["window"] = window;
}

import Waveform from "../../../lib/react-audio-waveform-master/src";
import * as React from "react";
import { TrackWaveFormProps } from "./TrackWaveForm.d";
import ReactAudioPlayer from "react-audio-player";
import * as $ from "jquery";
import uuid from "uuid";

const TrackWaveForm: React.FC<TrackWaveFormProps> = ({
  ref = null,
  className = "",
  audioUrl = "",
  audioJson = null,
  imageUrl = "",
}) => {
  const [peaks, setPeaks] = React.useState(null);

  React.useEffect(() => {
    $.getJSON(audioJson, function(json) {
      setPeaks(json.data);
    });
  }, []);

  if (process.env.BROWSER) {
    return (
      <section ref={ref} className={`trackWaveForm ${className}`}>
        <div className="waveContainer">
          <Waveform
            peaks={peaks}
            barWidth={3}
            height={150}
            color="#FFF"
            progressGradientColors={[[0, "#FFF"], [1, "#FFF"]]}
            transitionDuration={300}
          />
          <ReactAudioPlayer
            src={audioUrl}
            controls
            onPlay={() => console.info("on play")}
            style={{ display: "none" }}
          />
        </div>
      </section>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default TrackWaveForm;
