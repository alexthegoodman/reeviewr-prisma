import * as React from "react";

import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import AddReview from "../../actions/AddReview/AddReview";
import PostInteraction from "../PostInteraction/PostInteraction";
import ReviewItem from "../ReviewItem/ReviewItem";
import { PostReviewsProps } from "./PostReviews.d";
import ReviewQuestions from "../../review/ReviewQuestions/ReviewQuestions";

const PostReviews: React.FC<PostReviewsProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
}) => {
  const clickHandler = (e) => onClick(e);
  return (
    <PostInteraction
      header={
        <>
          <Text className="postHeadline" tagName="h3">
            Reviews
          </Text>
          <Link href="#!">All reviews</Link>
        </>
      }
      ctrls={<AddReview />}
    >
      <ReviewQuestions
        questions={[
          { text: "This is the question being asked?" },
          { text: "This is where the weird happens to happen?" },
          { text: "Do I enjoy asking questions and being strange?" },
        ]}
      />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </PostInteraction>
  );
};

export default PostReviews;
