import * as React from "react";

import { Text } from "@blueprintjs/core";
import { PodCategoryProps } from "./PodCategory.d";

const PodCategory: React.FC<PodCategoryProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  children = null,
  title = "Pods",
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <section className="podCategory">
        <div className="podCategoryContain">
          <div className="podCategoryHeader">
            <Text tagName="h6">{title}</Text>
          </div>
          <div className="podCategoryContent">{children}</div>
        </div>
      </section>
    </>
  );
};

export default PodCategory;
