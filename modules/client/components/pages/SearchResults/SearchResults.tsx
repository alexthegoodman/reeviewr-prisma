import * as React from "react";

import { SearchResultsProps } from "./SearchResults.d";
import { USERS_QUERY } from "../../../graphql/queries/user";
import { useQuery } from "react-apollo-hooks";
import { USER_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import { ALL_REVIEWS_QUERY } from "../../../graphql/queries/review";
import HorizontalScroll from "react-scroll-horizontal";
import { Text } from "@blueprintjs/core";
import ArtistCardData from "../../data/ArtistCardData/ArtistCardData";
import UserTrack from "../../data/UserTrack/UserTrack";
import ReviewCardData from "../../data/ReviewCardData/ReviewCardData";
import Utility from "../../../../services/Utility";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";

const SearchResults: React.FC<SearchResultsProps> = () => {
  const utility = new Utility();

  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const { search } = route.lastChunk.request.params;

  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USERS_QUERY,
    { variables: { search: encodeURIComponent(search) } }
  );

  const {
    data: tracksData,
    error: tracksError,
    loading: tracksLoading,
  } = useQuery(USER_TRACKS_QUERY, {
    variables: { search: encodeURIComponent(search) },
  });

  // const {
  //   data: reviewsData,
  //   error: reviewsError,
  //   loading: reviewsLoading,
  // } = useQuery(ALL_REVIEWS_QUERY, {
  //   variables: { search: encodeURIComponent(search) },
  // });

  // if (reviewsLoading) {
  //   return (
  //     <>
  //       <section className="searchResults">
  //         <div>Loading tracks...</div>
  //       </section>
  //     </>
  //   );
  // }
  // if (reviewsError) {
  //   return (
  //     <>
  //       <section className="searchResults">
  //         <div>Error on tracks! {reviewsError.message}</div>
  //       </section>
  //     </>
  //   );
  // }

  if (userLoading) {
    return (
      <>
        <section className="searchResults">
          <div>Loading users...</div>
        </section>
      </>
    );
  }
  if (userError) {
    return (
      <>
        <section className="searchResults">
          <div>Error on users! {userError.message}</div>
        </section>
      </>
    );
  }

  if (tracksLoading) {
    return (
      <>
        <section className="searchResults">
          <div>Loading tracks...</div>
        </section>
      </>
    );
  }
  if (tracksError) {
    return (
      <>
        <section className="searchResults">
          <div>Error on tracks! {tracksError.message}</div>
        </section>
      </>
    );
  }

  if (
    !utility.isDefinedWithContent(userData.users) ||
    !utility.isDefinedWithContent(tracksData.userTracks)
    // !utility.isDefinedWithContent(reviewsData.reviews)
  ) {
    return (
      <>
        <section className="searchResults">
          <div>Mechanical work...</div>
        </section>
      </>
    );
  }

  return (
    <>
      {search !== "" ? (
        <section className="searchResults">
          {!tracksLoading && !userLoading ? (
            <>
              <Text tagName="h1">Search Results</Text>

              {userData.users.length > 0 ? (
                <section className="grid col-4">
                  {userData.users.map(user => {
                    return <ArtistCardData key={user.id} user={user} />;
                  })}
                </section>
              ) : (
                <></>
              )}

              {/* {reviewsData.reviews.length > 0 ? (
                <section className="grid col-4">
                  {reviewsData.reviews.map(review => {
                    return <ReviewCardData key={review.id} review={review} />;
                  })}
                </section>
              ) : (
                <></>
              )} */}

              {tracksData.userTracks.length > 0 ? (
                <section>
                  {tracksData.userTracks.map(track => {
                    return <UserTrack key={track.id} track={track} />;
                  })}
                </section>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </section>
      ) : (
        <Text>No search phrase entered</Text>
      )}
    </>
  );
};

export default SearchResults;
