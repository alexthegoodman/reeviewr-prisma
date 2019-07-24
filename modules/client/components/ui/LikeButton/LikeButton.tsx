import * as React from "react";

import { Button, Icon, Text } from "@blueprintjs/core";
import { useMutation } from "react-apollo-hooks";
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

  const faved = false;

  const clickHandler = e => onClick(e);

  return (
    <Button
      ref={ref}
      className={`trackButton likeButton ${className} ${
        faved ? "selected" : ""
      }`}
      onClick={clickHandler}
      disabled={faved}
      icon="heart"
    />
  );
};

export default LikeButton;
