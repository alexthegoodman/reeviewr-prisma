import * as React from "react";

import { TagListProps } from "./TagList.d";

const TagList: React.FC<TagListProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default TagList;
