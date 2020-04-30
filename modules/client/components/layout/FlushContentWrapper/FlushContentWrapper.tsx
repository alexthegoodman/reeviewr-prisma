import * as React from "react";

import { FlushContentWrapperProps } from "./FlushContentWrapper.d";

const FlushContentWrapper: React.FC<FlushContentWrapperProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  children = null,
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <div className="flushContentWrapper">
        <div className="flushContentWrapperContain">{children}</div>
      </div>
    </>
  );
};

export default FlushContentWrapper;
