import * as React from "react";

import { AnnotationItemProps } from "./AnnotationItem.d";
import { Button, Text } from "@blueprintjs/core";
import Hawaii from "../../../services/Hawaii";

const AnnotationItem: React.FC<AnnotationItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const hawaii = new Hawaii();
  const clickHandler = e => onClick(e);
  return (
    <section className="annotationItem">
      <div className="annotationItemContain">
        <div className="left">
          <img className="annotationImage" src="" alt="" title="" />
          <div className="annotationInfo">
            <Text className="annotationUserName" tagName="span">
              {hawaii.stringHandler.lorem.generateWords(2)}
            </Text>
            <Text className="annotationCount" tagName="span">
              7 Comments
            </Text>
          </div>
        </div>
        <div className="right">
          <Button className="button">View</Button>
        </div>
      </div>
    </section>
  );
};

export default AnnotationItem;
