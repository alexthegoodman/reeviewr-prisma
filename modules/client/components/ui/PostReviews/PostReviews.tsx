import * as React from "react";

import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import AddReview from "../AddReview/AddReview";
import PostInteraction from "../PostInteraction/PostInteraction";
import ReviewItem from "../ReviewItem/ReviewItem";
import { PostReviewsProps } from "./PostReviews.d";

const PostReviews: React.FC<PostReviewsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <PostInteraction
      header={
        <>
          <Text tagName="h3">Reviews</Text>
          <Link href="#!">All reviews</Link>
        </>
      }
      ctrls={<AddReview />}
    >
      <ReviewItem />
      <ReviewItem />
    </PostInteraction>
  );
};

export default PostReviews;
