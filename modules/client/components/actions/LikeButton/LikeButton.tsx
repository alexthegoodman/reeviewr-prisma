import * as React from "react";

import { useMutation } from "@apollo/react-hooks";
import { Button, Icon, Text } from "@blueprintjs/core";
import { useNavigation } from "react-navi";
import Core from "../../../../services/Core";
import DataHandler from "../../../../services/DataHandler";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import AuthClient from "../../../services/AuthClient";
import { LikeButtonProps } from "./LikeButton.d";

const LikeButton: React.FC<LikeButtonProps> = ({
  ref = null,
  className = "",
  trackOldId = "",
  onClick = (e) => console.info("Click"),
}) => {
  const dataHandler = new DataHandler();
  const utility = new Utility();
  const core = new Core();
  const authClient = new AuthClient();

  const navigation = useNavigation();
  const [{ userData }, dispatch] = useAppContext();

  const faved = false;

  const clickHandler = (e) => onClick(e);

  return (
    <Button
      ref={ref}
      className={`postCtrlButton likeButton ${className} ${
        faved ? "selected" : ""
      }`}
      onClick={clickHandler}
      disabled={faved}
      icon="heart"
    >
      Like
    </Button>
  );
};

export default LikeButton;
