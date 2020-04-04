import * as React from "react";

import { OutputSystemMessageProps } from "./OutputSystemMessage.d";
import { Callout, Text } from "@blueprintjs/core";

const OutputSystemMessage: React.FC<OutputSystemMessageProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  type = "ERROR",
  code = "",
  attemptRefetch = false,
  output = "",
}) => {
  const clickHandler = e => onClick(e);

  let title = "";
  switch (type) {
    case "ERROR":
      title = `ERROR ${code}`;
      break;

    default:
      title = `ATTENTION ${code}`;
      break;
  }

  return (
    <>
      <Callout className="outputSystemMessage" icon="warning-sign">
        {title !== "" ? (
          <Text tagName="p">
            <Text tagName="strong">{title}</Text>
          </Text>
        ) : (
          <></>
        )}
        {attemptRefetch ? (
          <Text tagName="p">Will attempt refetch.</Text>
        ) : (
          <></>
        )}
        {output !== "" ? (
          <>
            <Text tagName="p">
              <Text tagName="strong">Output</Text>
            </Text>
            <Text tagName="p">{output}</Text>
          </>
        ) : (
          <></>
        )}
      </Callout>
    </>
  );
};

export default OutputSystemMessage;
