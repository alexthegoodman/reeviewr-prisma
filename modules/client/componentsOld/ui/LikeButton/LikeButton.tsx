import * as React from "react";

import { useMutation } from "@apollo/react-hooks";
import { Button, Icon, Text } from "@blueprintjs/core";
import { useNavigation } from "react-navi";
import Core from "../../../../services/Core";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import { UPDATE_USER_META } from "../../../graphql/mutations/user";
import { USER_QUERY } from "../../../graphql/queries/user";
import AuthClient from "../../../services/AuthClient";
import { LikeButtonProps } from "./LikeButton.d";

const LikeButton: React.FC<LikeButtonProps> = ({
  ref = null,
  className = "",
  trackOldId = "",
  onClick = e => console.info("Click"),
}) => {
  const legacy = new Legacy();
  const utility = new Utility();
  const core = new Core();
  const authClient = new AuthClient();

  const navigation = useNavigation();
  const [{ userData }, dispatch] = useAppContext();

  // const clickHandler = e => onClick(e);

  let favs = null;
  let favId = null;
  let savedFavs = null;
  let likeMutation = null;
  let faved = false;

  let clickHandler = () => {
    navigation.navigate("/login");
  };

  if (utility.isDefinedWithContent(userData.user)) {
    // get the favs, the meta id, tranform favs into array, and check if currently faved
    savedFavs = legacy.extractMetaValue(userData.user.userMeta, "favs");
    favId = legacy.extractMetaProp(userData.user.userMeta, "favs", "id");
    favs = core.getFromCSV(savedFavs);
    likeMutation = useMutation(UPDATE_USER_META);

    if (favs !== null && favs.includes(trackOldId)) {
      faved = true;
    }

    clickHandler = async () => {
      // if faved, add the fav to favs, save that as favs
      if (favs === null) {
        favs = [];
      }
      favs[favs.length] = trackOldId;
      const newFavs = core.setAsCSV(favs);
      if (newFavs !== null && trackOldId !== null) {
        console.info("like mutation", trackOldId, favId, newFavs);
        await likeMutation({
          variables: { metaId: favId, metaValue: newFavs },
          refetchQueries: ["user", "users", "userTracks"],
        });

        authClient.getUserData(dispatch);
      }
    };
  }

  return (
    <Button
      ref={ref}
      className={`trackButton likeButton ${className} ${
        faved ? "selected" : ""
      }`}
      onClick={clickHandler}
      disabled={faved}
    >
      <Text tagName="span">
        <Icon icon="heart" />
        {faved ? "Liked" : "Like"}
      </Text>
    </Button>
  );
};

export default LikeButton;
