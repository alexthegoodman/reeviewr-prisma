import * as React from "react";

import { TrackArtProps } from "./TrackArt.d";
import Core from "../../../../services/Core";
import { Image } from "cloudinary-react";

const TrackArt: React.FC<TrackArtProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  imageUrl = "",
  altText = "Reeviewr",
}) => {
  const core = new Core();

  const clickHandler = e => onClick(e);

  const path = core.pathFromUrl(imageUrl);

  let image = (
    <Image cloudName="hme3u9lwt" publicId={path} width="400" crop="fill" />
  );
  if (typeof path === "undefined") {
    image = <img src={imageUrl} alt={altText} title={altText} />;
  }

  return (
    <a ref={ref} className={`trackArt ${className}`} onClick={clickHandler}>
      {image}
    </a>
  );
};

export default TrackArt;
