import * as React from "react";

import { AddReviewProps } from "./AddReview.d";
import { Button, Text } from "@blueprintjs/core";

const AddReview: React.FC<AddReviewProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  imageUrl = "",
}) => {
  const clickHandler = e => onClick(e);

  return (
    <Button className="addReview" onClick={clickHandler}>
      {/* {imageUrl !== "" ? <img src={imageUrl} /> : <></>} */}
      <Text tagName="span">Add Review</Text>
    </Button>
  );
};

export default AddReview;
