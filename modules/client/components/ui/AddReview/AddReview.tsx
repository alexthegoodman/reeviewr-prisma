import * as React from "react";

import { AddReviewProps } from "./AddReview.d";
import { Button, Text } from "@blueprintjs/core";

const AddReview: React.FC<AddReviewProps> = ({ imageUrl = "" }) => {
  return (
    <Button className="addReview">
      <img src={imageUrl} />
      <Text tagName="span">Add Review</Text>
    </Button>
  );
};

export default AddReview;
