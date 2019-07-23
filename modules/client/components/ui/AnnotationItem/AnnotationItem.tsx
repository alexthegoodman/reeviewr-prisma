import * as React from "react";

import { AnnotationItemProps } from "./AnnotationItem.d";

const AnnotationItem: React.FC<AnnotationItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default AnnotationItem;
