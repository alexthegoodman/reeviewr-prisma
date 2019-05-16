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
import Utility from "../../../../services/Utility";
import useInterval from "react-useinterval";
import Core from "../../../../services/Core";

const TrackWaveForm: React.FC<TrackWaveFormProps> = ({
  ref = null,
  className = "",
  trackId = null,
  audioUrl = "",
  audioJson = null,
  imageUrl = "",
}) => {
  const core = new Core();
  const utility = new Utility();

  const [peaks, setPeaks] = React.useState(null);
  const audioPlayerRef = React.useRef(null);
  const [trackSpot, setTrackSpot] = React.useState(0);
  const [{ audioManager }, dispatch] = useAppContext();
  const track = audioManager.tracks[trackId];

  React.useEffect(() => {
    $.getJSON(audioJson, function(json) {
      setPeaks(json.data);
    });
  }, []);

  // set ref into context with trackId
  const metaDataLoaded = () => {
    dispatch({
      type: "setAudioTrack",
      trackId,
      trackData: {
        audioPlayerRef,
        playing: false,
      },
    });
  };

  const increaseCount = () => {
    if (utility.isDefinedWithContent(track)) {
      if (track.playing) {
        // console.info("playing spot", trackSpot);
        setTrackSpot(trackSpot + 1);
      }
    }
  };

  useInterval(increaseCount, 1000, null);

  if (process.env.BROWSER) {
    return (
      <section ref={ref} className={`trackWaveForm ${className}`}>
        <div className="waveContainer">
          <Waveform
            peaks={peaks}
            barWidth={3}
            height={150}
            color="#FFF"
            progressGradientColors={[[0, "#df494a"], [1, "#df494a"]]}
            transitionDuration={1000}
            pos={trackSpot}
            duration={core.getTrackDuration(audioPlayerRef)}
          />
          <ReactAudioPlayer
            ref={audioPlayerRef}
            style={{ display: "none" }}
            src={audioUrl}
            controls={false}
            preload="metadata"
            // onPlay={() =>
            //   console.info("on play", audioPlayerRef.current.audioEl.duration)
            // }
            // volume
            // onAbort
            onCanPlay={() => metaDataLoaded()}
            // onCanPlayThrough
            // onEnded
            // onError
            // onListen
            // onPause
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
