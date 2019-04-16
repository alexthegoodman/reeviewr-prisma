import * as React from "react";

import { TrackArtProps } from "./TrackArt.d";

const TrackArt: React.FC<TrackArtProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  imageUrl = "",
  altText = "Reeviewr",
}) => {
  const clickHandler = e => onClick(e);

  return (
    <a ref={ref} className={`trackArt ${className}`} onClick={clickHandler}>
      <img src={imageUrl} alt={altText} title={altText} />
    </a>
  );
};

export default TrackArt;
