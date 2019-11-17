import * as React from "react";

import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import urlencode from "urlencode";
import { ImageSizes } from "../../../../defs/imageSizes";
import Legacy from "../../../../services/Legacy";
import { useAppContext } from "../../../context";
import Strings from "../../../services/Strings";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import { ArtistCardDataProps } from "./ArtistCardData.d";

const ArtistCardData: React.FC<ArtistCardDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  user,
}) => {
  const legacy = new Legacy();
  const strings = new Strings();

  const [{ mixpanel }, dispatch] = useAppContext();

  const route = useCurrentRoute();
  const loadingRoute = useLoadingRoute();
  const navigation = useNavigation();

  const clickHandler = e => onClick(e);

  const firstName = legacy.extractMetaValue(user.userMeta, "firstName");
  const lastName = legacy.extractMetaValue(user.userMeta, "lastName");
  const userArtistName = legacy.extractMetaValue(
    user.userMeta,
    "userArtistName"
  );

  // const profileImage = legacy.extractProfileImage(
  //   user,
  //   ImageSizes.ProfileImage
  // );

  const profileImage = legacy.extractMetaValue(user.userMeta, "profileImage");

  const reviewCount = user.reviews.length;
  const trackCount = user.userTracks.length;

  // TODO: add new profileImage meta to user
  // grab the first image attachedFile for legacy users, which may be cover art or hero image
  // but prefer the new profileImage

  return (
    <ArtistCard
      className={className}
      imageUrl={profileImage}
      artistTitle={
        userArtistName !== "" ? userArtistName : `${firstName} ${lastName}`
      }
      reviewCount={reviewCount}
      trackCount={trackCount}
      onClick={e => {
        mixpanel.track("Navigate to artist", {
          env: process.env.NODE_ENV,
          time: new Date(),
        });
        navigation.navigate(
          `/artists/${user.id}/${strings.convertToSlug(userArtistName)}`
        );
        clickHandler(e);
      }}
    />
  );
};

export default ArtistCardData;
