import * as React from "react";

import { AnnotationItemProps } from "./AnnotationItem.d";

const AnnotationItem: React.FC<AnnotationItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="annotationItem">
      <div className="annotationItemContain">
        <img src="" alt="" title="" />
      </div>
    </section>
  );
};

export default AnnotationItem;
