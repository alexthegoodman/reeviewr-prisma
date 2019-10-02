import * as React from "react";

import { SearchResultsProps } from "./SearchResults.d";
import { useQuery } from "@apollo/react-hooks";
import { Text } from "@blueprintjs/core";
import ArtistCardData from "../../data/ArtistCardData/ArtistCardData";
import UserTrack from "../../data/UserTrack/UserTrack";
import Utility from "../../../../services/Utility";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";
import { USERS_QUERY, SEARCH_USER_META } from "../../../graphql/queries/user";
import { POSTS_QUERY } from "../../../graphql/queries/post";
import PostCard from "../../ui/PostCard/PostCard";
import UserCard from "../../ui/UserCard/UserCard";
import { SEARCH_PODS } from "../../../graphql/queries/pod";
import PodCard from "../../ui/PodCard/PodCard";

const SearchResults: React.FC<SearchResultsProps> = () => {
  const utility = new Utility();

  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const { search } = route.lastChunk.request.params;

  const {
    data: userData,
    error: userError,
    loading: userLoading
  } = useQuery(
    SEARCH_USER_META,
    { variables: { search: encodeURIComponent(search) } }
  );

  const {
    data: postsData,
    error: postsError,
    loading: postsLoading,
  } = useQuery(
    POSTS_QUERY,
    { variables: { search: encodeURIComponent(search) } }
  );

  const {
    data: podsData,
    error: podsError,
    loading: podsLoading,
  } = useQuery(
    SEARCH_PODS,
    { variables: { search: encodeURIComponent(search) } }
  );

  if (userLoading) {
    return (
      <>
        <section className="searchResults">
          <LoadingIndicator loadingText="Loading people..." />
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

  if (postsLoading) {
    return (
      <>
        <section className="searchResults">
          <LoadingIndicator loadingText="Loading posts..." />
        </section>
      </>
    );
  }

  if (postsError) {
    return (
      <>
        <section className="searchResults">
          <div>Error on posts! {postsError.message}</div>
        </section>
      </>
    );
  }

  if (podsLoading) {
    return (
      <>
        <section className="searchResults">
          <LoadingIndicator loadingText="Loading pods..." />
        </section>
      </>
    );
  }

  if (podsError) {
    return (
      <>
        <section className="searchResults">
          <div>Error on pods! {podsError.message}</div>
        </section>
      </>
    );
  }

  if (
    !utility.isDefinedWithContent(userData.findManyUserMeta) &&
    !utility.isDefinedWithContent(postsData.findManyPost) &&
    !utility.isDefinedWithContent(podsData.findManyPod)
  ) {
    return (
      <>
        <section className="searchResults">
          <Text tagName="h5">No results</Text>
        </section>
      </>
    );
  }

  return (
    <>
      {search !== "" ? (
        <section className="searchResults">
          {!postsLoading && !userLoading && !podsLoading ? (
            <>
              <Text tagName="h1">Search Results</Text>

              {userData.findManyUserMeta.length > 0 ? (
                <section className="grid col-4">
                  {userData.findManyUserMeta.map(userMeta => {
                    return <UserCard user={userMeta.user} />
                  })}
                </section>
              ) : (
                  <></>
                )}

              {postsData.findManyPost.length > 0 ? (
                <section className="grid col-4">
                  {postsData.findManyPost.map(post => {
                    return <PostCard post={post} />
                  })}
                </section>
              ) : (
                  <></>
                )}

              {podsData.findManyPod.length > 0 ? (
                <section className="grid col-4">
                  {podsData.findManyPod.map(pod => {
                    return <PodCard pod={pod} />
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
          <Text tagName="h5" className="headline">
            No search phrase entered
        </Text>
        )}
    </>
  );
};

export default SearchResults;
