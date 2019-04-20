import * as React from "react";

import { ArtistCardDataProps } from "./ArtistCardData.d";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import Legacy from "../../../services/Legacy";

const ArtistCardData: React.FC<ArtistCardDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  user,
}) => {
  const legacy = new Legacy();

  const clickHandler = e => onClick(e);

  let firstName = legacy.extractMetaValue(
    user.userMeta.filter(meta => meta.metaName === "firstName")
  );
  let lastName = legacy.extractMetaValue(
    user.userMeta.filter(meta => meta.metaName === "lastName")
  );
  let userArtistName = legacy.extractMetaValue(
    user.userMeta.filter(meta => meta.metaName === "userArtistName")
  );

  console.info("user", user);

  const profileImage = legacy.extractProfileImage(user);

  const reviewCount = user.reviews.length;
  const trackCount = user.userTracks.length;

  // TODO: add new profileImage meta to user
  // grab the first image attachedFile for legacy users, which may be cover art or hero image
  // but prefer the new profileImage

  return (
    <ArtistCard
      className="cardInRow"
      imageUrl={profileImage}
      artistTitle={
        userArtistName !== "" ? userArtistName : `${firstName} ${lastName}`
      }
      reviewCount={reviewCount}
      trackCount={trackCount}
      onClick={() => console.info("onClick")}
    />
  );
};

export default ArtistCardData;
