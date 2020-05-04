import * as React from "react";

import { useMutation } from "@apollo/react-hooks";
import { Button } from "@blueprintjs/core";
import { useAppContext } from "../../../context";
import { JOIN_SPACE, LEAVE_SPACE } from "../../../graphql/mutations/user";
import { JoinButtonProps } from "./JoinButton.d";
import Hawaii from "../../../services/Hawaii";
import Oahu from "../../../../services/Oahu";

const JoinButton: React.FC<JoinButtonProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  spaceId = null,
  spaceMembers = null,
}) => {
  const hawaii = new Hawaii();
  const oahu = new Oahu();
  const [{ userData }, dispatch] = useAppContext();

  if (!oahu.utility.isDefinedWithContent(userData)) return <></>;

  const [
    joinSpace,
    { data: joinData, loading: joinLoading, error: joinError },
  ] = useMutation(JOIN_SPACE);
  const [
    leaveSpace,
    { data: leaveData, loading: leaveLoading, error: leaveError },
  ] = useMutation(LEAVE_SPACE);

  let spaceMember = false;
  spaceMembers.forEach((member) => {
    if (member.id === userData.id) {
      spaceMember = true;
    }
  });

  const clickHandler = (e) => {
    const payload = {
      variables: {
        userId: userData.id,
        spaceId,
      },
      refetchQueries: ["categoriesSpacesPosts", "userJoinedSpaces"],
    };
    if (spaceMember) {
      leaveSpace(payload);
    } else {
      joinSpace(payload);
    }

    onClick(e);
  };

  return (
    <Button
      onClick={clickHandler}
      className="joinButton"
      disabled={joinLoading || leaveLoading}
    >
      {spaceMember ? "Joined" : "Join"}
    </Button>
  );
};

export default JoinButton;
