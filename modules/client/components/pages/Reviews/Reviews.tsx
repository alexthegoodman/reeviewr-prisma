import * as React from "react";

import { ReviewsProps } from "./Reviews.d";
import { useQuery } from "@apollo/react-hooks";
import LoadingIndicator from "../../system/LoadingIndicator/LoadingIndicator";

const Reviews: React.FC<ReviewsProps> = () => {
  // const {
  //   data: reviewsData,
  //   error: reviewsError,
  //   loading: reviewsLoading,
  // } = useQuery(ALL_REVIEWS_QUERY);

  // if (reviewsLoading) {
  //   return <LoadingIndicator loadingText="Loading reviews..." />;
  // }
  // if (reviewsError) {
  //   return <div>Error on tracks! {reviewsError.message}</div>;
  // }

  return (
    <>
      <h1 className="headline">Reviews</h1>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridRowGap: 25,
          gridColumnGap: 25,
        }}
      >
        {/* {reviewsData.reviews.map((review, i) => {
          return <ReviewCardData key={review.id} node={i} review={review} />;
        })} */}
      </section>
    </>
  );
};

export default Reviews;
