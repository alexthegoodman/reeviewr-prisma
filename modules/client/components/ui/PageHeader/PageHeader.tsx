import * as React from "react";

import { PageHeaderProps } from "./PageHeader.d";
import { Text } from "@blueprintjs/core";

const PageHeader: React.FC<PageHeaderProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  title = "",
  children,
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className={`pageHeader ${className}`}>
      <div className="left">
        <Text tagName="h1">{title}</Text>
      </div>
      <div className="right">{children}</div>
    </section>
  );
};

export default PageHeader;
