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
import { useAppContext } from "../../../context";

const TrackWaveForm: React.FC<TrackWaveFormProps> = ({
  ref = null,
  className = "",
  trackId = null,
  audioUrl = "",
  audioJson = null,
  imageUrl = "",
}) => {
  const [peaks, setPeaks] = React.useState(null);
  const audioPlayerRef = React.useRef(null);
  const [{ audioManager }, dispatch] = useAppContext();

  React.useEffect(() => {
    $.getJSON(audioJson, function(json) {
      setPeaks(json.data);
    });
    // set ref into context with trackId
    dispatch({
      type: "setAudioTrack",
      trackId,
      trackData: {
        audioPlayerRef,
        playing: false,
      },
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
            ref={audioPlayerRef}
            style={{ display: "none" }}
            src={audioUrl}
            controls={false}
            preload={false}
            // onPlay={() => console.info("on play")}
            // volume
            // onAbort
            // onCanPlay
            // onCanPlayThrough
            // onEnded
            // onError
            // onListen
            // onPause
            // onPlay
            // onSeeked
            // onVolumeChanged
          />
        </div>
      </section>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default TrackWaveForm;
