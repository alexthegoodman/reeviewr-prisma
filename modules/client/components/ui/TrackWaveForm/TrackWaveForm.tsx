// require("wavesurfer.js");
// require("wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js");
// require("wavesurfer.js/dist/plugin/wavesurfer.regions.min.js");
// require("wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js");

// window["WaveSurfer"] = WaveSurfer;

import * as React from "react";

import { TrackWaveFormProps } from "./TrackWaveForm.d";

// import Wavesurfer from "react-wavesurfer";
import ReactAudioPlayer from "react-audio-player";

const TrackWaveForm: React.FC<TrackWaveFormProps> = ({
  ref = null,
  className = "",
  audioUrl = "",
}) => {
  console.info("audioUrl", audioUrl, window["WaveSurfer"]);
  if (process.env.BROWSER) {
    return (
      <section ref={ref} className={`trackWaveForm ${className}`}>
        <div className="waveContainer">
          {/** Use skeleton loader and wait for first pos change */}
          {/* <Wavesurfer
            audioFile={audioUrl}
            pos={15}
            onPosChange={() => console.info("pos change")}
            playing={false}
            responsive={false}
            options={{ progressColor: "#df494a", waveColor: "#E5E5E5" }}
          /> */}
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
