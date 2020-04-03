import * as React from "react";

import { Button, Icon, Popover, Text } from "@blueprintjs/core";
import { ReviewItemProps } from "./ReviewItem.d";
import { LoremIpsum } from "lorem-ipsum";
import Hawaii from "../../../services/Hawaii";

const ReviewItem: React.FC<ReviewItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const hawaii = new Hawaii();
  const clickHandler = e => onClick(e);

  return (
    <section className="reviewItem">
      <div className="reviewItemContain">
        <div className="itemHeader">
          <div className="visual">
            <img src="" alt="" title="" />
          </div>
          <div className="info">
            <Text className="userName" tagName="span">
              {hawaii.stringHandler.lorem.generateWords(2)}
            </Text>
          </div>
        </div>
        <div className="itemContent">
          <Text className="reviewAnswer" tagName="span">
            {hawaii.stringHandler.lorem.generateSentences(3)}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default ReviewItem;
