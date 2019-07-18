import * as React from "react";
import { Button, Card, Text, Elevation } from "@blueprintjs/core";

import { ArtistCardProps } from "./ArtistCard.d";
import Strings from "../../../services/Strings";

const ArtistCard: React.FC<ArtistCardProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  imageUrl = "",
  artistTitle = "",
  reviewCount = 0,
  trackCount = 0,
}) => {
  const strings = new Strings();
  const clickHandler = e => onClick(e);

  artistTitle = strings.decode(artistTitle);

  return (
    <Card
      ref={ref}
      className={`artistCard ${className}`}
      onClick={clickHandler}
    >
      <img src={imageUrl} alt={artistTitle} />
      <div className="cardInfo">
        <Text tagName="h5">{artistTitle}</Text>
        <Text tagName="p">
          {reviewCount} {reviewCount > 1 ? "Reviews" : "Review"}
        </Text>
        <Text tagName="p">
          {trackCount} {trackCount > 1 ? "Tracks" : "Track"}
        </Text>
      </div>
    </Card>
  );
};

export default ArtistCard;
