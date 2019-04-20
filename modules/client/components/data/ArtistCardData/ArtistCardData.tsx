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

  let firstName = user.userMeta.filter(meta => meta.metaName === "firstName");
  let lastName = user.userMeta.filter(meta => meta.metaName === "lastName");
  let userArtistName = user.userMeta.filter(
    meta => meta.metaName === "userArtistName"
  );

  firstName =
    typeof firstName[0] !== "undefined" ? firstName[0]["metaValue"] : "";
  lastName = typeof lastName[0] !== "undefined" ? lastName[0]["metaValue"] : "";
  userArtistName =
    typeof userArtistName[0] !== "undefined"
      ? userArtistName[0]["metaValue"]
      : "";

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
