import * as React from "react";

import { useMutation } from "@apollo/react-hooks";
import { Button } from "@blueprintjs/core";
import { useAppContext } from "../../../context";
import { JOIN_POD, LEAVE_POD } from "../../../graphql/mutations/user";
import { JoinButtonProps } from "./JoinButton.d";
import Hawaii from "../../../services/Hawaii";
import Oahu from "../../../../services/Oahu";

const JoinButton: React.FC<JoinButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  podId = null,
  podMembers = null,
}) => {
  const hawaii = new Hawaii();
  const oahu = new Oahu();
  const [{ userData }, dispatch] = useAppContext();

  if (!oahu.utility.isDefinedWithContent(userData)) return <></>;

  const [
    joinPod,
    { data: joinData, loading: joinLoading, error: joinError },
  ] = useMutation(JOIN_POD);
  const [
    leavePod,
    { data: leaveData, loading: leaveLoading, error: leaveError },
  ] = useMutation(LEAVE_POD);

  let podMember = false;
  podMembers.forEach(member => {
    if (member.id === userData.id) {
      podMember = true;
    }
  });

  const clickHandler = e => {
    const payload = {
      variables: {
        userId: userData.id,
        podId,
      },
      refetchQueries: ["categoriesPodsPosts", "userJoinedPods"],
    };
    if (podMember) {
      leavePod(payload);
    } else {
      joinPod(payload);
    }

    onClick(e);
  };

  return (
    <Button
      onClick={clickHandler}
      className="joinButton"
      disabled={joinLoading || leaveLoading}
    >
      {podMember ? "Joined" : "Join"}
    </Button>
  );
};

export default JoinButton;
