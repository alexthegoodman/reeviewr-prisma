import * as React from "react";

import { Button, Text } from "@blueprintjs/core";
import { CategoryGridProps } from "./CategoryGrid.d";

const CategoryGrid: React.FC<CategoryGridProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  children = null,
  title = "",
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="categoryGrid">
      <div className="categoryGridContain">
        <div className="categoryGridHeader">
          <Text tagName="h6">{title}</Text>
          <Button
            className="button createPodButton"
            onClick={() => console.info("create")}
          >
            Create Pod
          </Button>
        </div>
        <div className="categoryGridContent">{children}</div>
      </div>
    </section>
  );
};

export default CategoryGrid;
