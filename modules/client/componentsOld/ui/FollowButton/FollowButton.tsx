import * as React from "react";

import { useMutation } from "@apollo/react-hooks";
import { Button, Icon, Text } from "@blueprintjs/core";
import { useNavigation } from "react-navi";
import Core from "../../../../services/Core";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import {
  CREATE_USER_META,
  UPDATE_USER_META,
} from "../../../graphql/mutations/user";
import AuthClient from "../../../services/AuthClient";
import { FollowButtonProps } from "./FollowButton.d";

const FollowButton: React.FC<FollowButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  artist = "",
}) => {
  const legacy = new Legacy();
  const utility = new Utility();
  const core = new Core();
  const authClient = new AuthClient();

  const navigation = useNavigation();
  const [{ userData }, dispatch] = useAppContext();

  let following = null;
  let followingId = null;
  let savedFollowing = null;
  let followingMutation = null;
  let createFollowingMutation = null;

  let followers = null;
  let followersId = null;
  let savedFollowers = null;
  let followersMutation = null;
  let createFollowersMutation = null;

  let followed = false;

  let clickHandler = () => {
    navigation.navigate("/login");
  };

  if (utility.isDefinedWithContent(userData.user)) {
    // get the favs, the meta id, tranform favs into array, and check if currently faved
    savedFollowing = legacy.extractMetaValue(
      userData.user.userMeta,
      "following"
    );
    followingId = legacy.extractMetaProp(
      userData.user.userMeta,
      "following",
      "id"
    );
    following = core.getFromCSV(savedFollowing);
    followingMutation = useMutation(UPDATE_USER_META);
    createFollowingMutation = useMutation(CREATE_USER_META);

    savedFollowers = legacy.extractMetaValue(artist.userMeta, "followers");
    followersId = legacy.extractMetaProp(artist.userMeta, "followers", "id");
    followers = core.getFromCSV(savedFollowers);
    followersMutation = useMutation(UPDATE_USER_META);
    createFollowersMutation = useMutation(CREATE_USER_META);

    // console.info(
    //   "following",
    //   followingId,
    //   following,
    //   "artist followers",
    //   followersId,
    //   followers
    // );

    if (
      following !== null &&
      following.includes(artist.oldId) &&
      followers !== null &&
      followers.includes(userData.user.oldId)
    ) {
      followed = true;
    }

    clickHandler = async () => {
      // if faved, add the fav to favs, save that as favs
      if (followers === null) {
        followers = [];
      }
      if (following === null) {
        following = [];
      }

      followers[followers.length] = userData.user.oldId;
      following[following.length] = artist.oldId;

      const newFollowers = core.setAsCSV(followers);
      const newFollowing = core.setAsCSV(following);

      console.info(
        "set following",
        following,
        artist,
        artist.oldId,
        newFollowing
      );
      if (
        utility.isDefinedWithContent(followersId) &&
        newFollowers !== null &&
        userData.user.id !== null
      ) {
        // console.info("followers mutation", newFollowers);

        // add to followers on artist
        await followersMutation({
          variables: { metaId: followersId, metaValue: newFollowers },
          refetchQueries: ["user", "users", "userTracks"],
        });
      } else if (newFollowers !== null && userData.user.id !== null) {
        // console.info("create followers mutation", newFollowers);

        // add to followers on artist
        await createFollowersMutation({
          variables: {
            userId: artist.id,
            metaName: "followers",
            metaValue: newFollowers,
          },
          refetchQueries: ["user", "users", "userTracks"],
        });
      }

      if (
        utility.isDefinedWithContent(followingId) &&
        newFollowing !== null &&
        artist.id !== null
      ) {
        // console.info("following mutation", newFollowing);

        // add to following on current user
        await followingMutation({
          variables: { metaId: followingId, metaValue: newFollowing },
          refetchQueries: ["user", "users", "userTracks"],
        });
      } else if (newFollowing !== null && artist.id !== null) {
        // console.info("create following mutation", newFollowing);

        // add to following on current user
        await createFollowingMutation({
          variables: {
            userId: userData.user.id,
            metaName: "following",
            metaValue: newFollowing,
          },
          refetchQueries: ["user", "users", "userTracks"],
        });
      }

      authClient.getUserData(dispatch);
    };
  }

  return (
    <Button
      ref={ref}
      className={`trackButton followButton ${className} ${
        followed ? "selected" : ""
      }`}
      onClick={clickHandler}
      disabled={followed}
    >
      <Text tagName="span">
        <Icon icon="new-person" />
        {followed ? "Followed" : "Follow"}
      </Text>
    </Button>
  );
};

export default FollowButton;
