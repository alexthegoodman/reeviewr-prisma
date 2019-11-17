import * as React from "react";

import { Button, Icon, Popover, Text } from "@blueprintjs/core";
import { ReviewItemProps } from "./ReviewItem.d";

const ReviewItem: React.FC<ReviewItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
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
              Henry Lolligag
            </Text>
          </div>
        </div>
        <div className="itemContent">
          <Text className="reviewAnswer" tagName="span">
            This is the first answer on the review...
          </Text>
        </div>
      </div>
    </section>
  );
};

export default ReviewItem;
