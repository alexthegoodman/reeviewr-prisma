import * as React from "react";

import { SeeMoreTextProps } from "./SeeMoreText.d";
import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";

const HEIGHTS = {
  CLOSED: 70,
  OPENED: 150,
};

const SeeMoreText: React.FC<SeeMoreTextProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  text = "",
}) => {
  const [open, setOpen] = React.useState(false);
  const showButton = text.length > 140 ? true : false;

  let buttonComp = <></>;
  if (showButton) {
    buttonComp = (
      <>
        {open ? (
          <>
            <Link
              href="#!"
              onClick={() => {
                setOpen(false);
              }}
            >
              See Less
            </Link>
          </>
        ) : (
          <>
            <Link
              href="#!"
              onClick={() => {
                setOpen(true);
              }}
            >
              See More
            </Link>
          </>
        )}
      </>
    );
  }

  return (
    <>
      <div
        style={{
          overflow: open ? "scroll" : "hidden",
          height: open ? HEIGHTS.OPENED : HEIGHTS.CLOSED,
        }}
      >
        <Text className="description" tagName="p">
          {text}
        </Text>
      </div>
      {buttonComp}
    </>
  );
};

export default SeeMoreText;
