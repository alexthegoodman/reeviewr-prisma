import * as React from "react";

import { TrackHeaderProps } from "./TrackHeader.d";
import { Text, Icon } from "@blueprintjs/core";

import he from "he";
import { useAppContext } from "../../../context";
import Utility from "../../../../services/Utility";

const TrackHeader: React.FC<TrackHeaderProps> = ({
  ref = null,
  className = "",
  trackTitle = "",
  artistName = "",
  trackId = "",
  onTrackClick = e => console.info("Track click"),
  onArtistClick = e => console.info("Artist click"),
}) => {
  const utility = new Utility();

  const [{ audioManager }, dispatch] = useAppContext();
  const track = audioManager.tracks[trackId];

  const trackClickHandler = e => onTrackClick(e);
  const artistClickHandler = e => onArtistClick(e);
  const playBtnClickHandler = e => {
    if (track.playing) {
      track.audioPlayerRef.current.audioEl.pause();
    } else {
      track.audioPlayerRef.current.audioEl.play();
    }

    dispatch({
      type: "setAudioTrack",
      trackId,
      trackData: {
        audioPlayerRef: track.audioPlayerRef,
        playing: !track.playing,
      },
    });
  };

  return (
    <section ref={ref} className={`trackHeader ${className}`}>
      {utility.isDefinedWithContent(track) ? (
        <div className="trackHeaderCtrls">
          <button
            className="trackPlayBtn"
            disabled={track.audioPlayerRef.current === null}
            onClick={playBtnClickHandler}
          >
            {track.playing ? <Icon icon="pause" /> : <Icon icon="play" />}
          </button>
        </div>
      ) : (
        <Text tagName="p" className="loadingDots">
          ...
        </Text>
      )}
      <div className="trackHeaderInfo">
        <a className="trackTitle" onClick={trackClickHandler}>
          {decodeURI(decodeURIComponent(he.decode(trackTitle)))}
        </a>
        <a className="artistName" onClick={artistClickHandler}>
          {decodeURI(decodeURIComponent(artistName))}
        </a>
      </div>
    </section>
  );
};

export default TrackHeader;
