import * as React from "react";

import { ReviewsProps } from "./Reviews.d";
import Legacy from "../../../services/Legacy";
import Strings from "../../../services/Strings";
import ReviewCardData from "../../data/ReviewCardData/ReviewCardData";
import { ALL_REVIEWS_QUERY } from "../../../graphql/queries/review";
import { useQuery } from "react-apollo-hooks";

const Reviews: React.FC<ReviewsProps> = () => {
  const {
    data: reviewsData,
    error: reviewsError,
    loading: reviewsLoading,
  } = useQuery(ALL_REVIEWS_QUERY);

  if (reviewsLoading) {
    return <div>Loading tracks...</div>;
  }
  if (reviewsError) {
    return <div>Error on tracks! {reviewsError.message}</div>;
  }

  console.info("Reviews Data", reviewsData);

  return (
    <>
      <h1>Reviews</h1>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridRowGap: 25,
          gridColumnGap: 25,
        }}
      >
        {reviewsData.reviews.map(review => {
          return <ReviewCardData key={review.id} review={review} />;
        })}
      </section>
    </>
  );
};

export default Reviews;
