import * as React from "react";

import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import AddReview from "../AddReview/AddReview";
import ReviewItem from "../ReviewItem/ReviewItem";
import { PostReviewsProps } from "./PostReviews.d";

const PostReviews: React.FC<PostReviewsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="postReviews">
      <div className="postReviewsContain">
        <div className="postReviewsHeader">
          <Text tagName="h3">Reviews</Text>
          <Link href="#!">All reviews</Link>
        </div>
        <div className="postReviewsContent">
          <ReviewItem />
          <ReviewItem />
        </div>
        <div className="postReviewsCtrls">
          <AddReview />
        </div>
      </div>
    </section>
  );
};

export default PostReviews;
