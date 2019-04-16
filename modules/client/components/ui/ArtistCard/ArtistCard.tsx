import * as React from "react";
import { Button, Card, Text, Elevation } from "@blueprintjs/core";

import { ArtistCardProps } from "./ArtistCard.d";

const ArtistCard: React.FC<ArtistCardProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  imageUrl = "",
  artistTitle = "",
  reviewCount = 0,
  trackCount = 0,
}) => {
  const clickHandler = e => onClick(e);

  return (
    <Card
      ref={ref}
      className={`artistCard ${className}`}
      onClick={clickHandler}
    >
      <img src={imageUrl} alt={artistTitle} />
      <div className="cardInfo">
        <Text tagName="h5">{artistTitle}</Text>
        <Text tagName="p">{reviewCount} Reviews</Text>
        <Text tagName="p">{trackCount} Tracks</Text>
      </div>
    </Card>
  );
};

export default ArtistCard;
