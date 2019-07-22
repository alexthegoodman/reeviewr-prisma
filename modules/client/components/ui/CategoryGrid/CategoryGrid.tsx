import * as React from "react";

import { Text } from "@blueprintjs/core";
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
        </div>
        <div className="categoryGridContent">{children}</div>
      </div>
    </section>
  );
};

export default CategoryGrid;
