import * as React from "react";

import { ContentFooterProps } from "./ContentFooter.d";

const ContentFooter: React.FC<ContentFooterProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <footer className="contentFooter">
      <span>Footer here</span>
    </footer>
  );
};

export default ContentFooter;
