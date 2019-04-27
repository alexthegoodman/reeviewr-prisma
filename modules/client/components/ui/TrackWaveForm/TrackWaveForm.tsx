import window from "global";

if (typeof window === "undefined") {
  global["window"] = window;
}

import WaveformData from "waveform-data";
// import Peaks from "peaks.js";

import Waveform from "react-audio-waveform";

// require("wavesurfer.js");
// require("wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js");
// require("wavesurfer.js/dist/plugin/wavesurfer.regions.min.js");
// require("wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js");
// window["WaveSurfer"] = WaveSurfer;
// import Wavesurfer from "react-wavesurfer";

import * as React from "react";

import { TrackWaveFormProps } from "./TrackWaveForm.d";

import ReactAudioPlayer from "react-audio-player";

import * as $ from "jquery";

import uuid from "uuid";

const TrackWaveForm: React.FC<TrackWaveFormProps> = ({
  ref = null,
  className = "",
  audioUrl = "",
  imageUrl = "",
}) => {
  const canvasId = uuid.v4();
  const datUrl = audioUrl.split(".mp3")[0] + ".dat";
  console.info("json", datUrl);

  fetch(datUrl)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      const waveform = WaveformData.create(buffer);

      console.log(waveform.duration);
      const canvas = $("#" + canvasId)
        .first()
        .get(0);
      const interpolateHeight = total_height => {
        const amplitude = 256;
        return size => total_height - ((size + 128) * total_height) / amplitude;
      };

      const y = interpolateHeight(canvas.height);
      const ctx = canvas.getContext("2d");
      ctx.beginPath();

      // from 0 to 100
      waveform.min.forEach((val, x) => {
        ctx.lineTo(x + 0.5, y(val) + 0.5);
      });

      // then looping back from 100 to 0
      waveform.max.reverse().forEach((val, x) => {
        ctx.lineTo(waveform.offset_length - x + 0.5, y(val) + 0.5);
      });

      ctx.fillStyle = "#df494a";

      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    });

  if (process.env.BROWSER) {
    return (
      <section ref={ref} className={`trackWaveForm ${className}`}>
        <div className="waveContainer">
          <canvas id={canvasId} style={{ width: "100%", height: 150 }} />
          {/* <Waveform
            barWidth={2}
            peaks={datUrl}
            height={150}
            pos={50}
            duration={3536727601}
            onClick={() => console.info("click")}
            color="#FFF"
            progressGradientColors={[[1, "#888"], [1, "#aaa"]]}
          /> */}
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
