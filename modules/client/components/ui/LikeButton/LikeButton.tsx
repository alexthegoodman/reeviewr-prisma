import * as React from "react";

import { LikeButtonProps } from "./LikeButton.d";
import { Button, Text, Icon } from "@blueprintjs/core";
import Utility from "../../../../services/Utility";
import Legacy from "../../../../services/Legacy";
import Core from "../../../../services/Core";
import { useAppContext } from "../../../context";
import { useMutation } from "react-apollo-hooks";
import { UPDATE_USER_META } from "../../../graphql/mutations/user";

const LikeButton: React.FC<LikeButtonProps> = ({
  ref = null,
  className = "",
  trackOldId = "",
  onClick = e => console.info("Click"),
}) => {
  const legacy = new Legacy();
  const utility = new Utility();
  const core = new Core();

  const [{ userData }, dispatch] = useAppContext();

  // const clickHandler = e => onClick(e);

  let favs = null;
  let favId = null;
  let savedFavs = null;
  let likeMutation = null;
  let faved = false;
  if (utility.isDefinedWithContent(userData.user)) {
    savedFavs = legacy.extractMetaValue(userData.user.userMeta, "favs");
    favId = legacy.extractMetaProp(userData.user.userMeta, "favs", "id");
    favs = core.getFromCSV(savedFavs);
    likeMutation = useMutation(UPDATE_USER_META);
    console.info("like button favs", trackOldId, favs);

    if (favs.includes(trackOldId)) {
      console.info("YOU LIKED");
      faved = true;
    }
  }

  const clickHandler = () => {
    // favs[favs.length] = userData.user.oldId;  // these are MY favs, not Track favs
    favs[favs.length] = trackOldId;
    const newFavs = core.setAsCSV(favs);
    if (newFavs !== null && trackOldId !== null) {
      console.info("like mutation", trackOldId, favId, newFavs);
      likeMutation({
        variables: { metaId: favId, metaValue: newFavs },
      });
    }
  };

  return (
    <Button
      ref={ref}
      className={`trackButton likeButton ${className} ${faved ? "faved" : ""}`}
      onClick={clickHandler}
    >
      <Text tagName="span">
        <Icon icon="heart" />
        Like
      </Text>
    </Button>
  );
};

export default LikeButton;
