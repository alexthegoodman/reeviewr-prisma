import * as React from "react";

import { SearchResultsProps } from "./SearchResults.d";
import { useQuery } from "@apollo/react-hooks";
import { Text } from "@blueprintjs/core";
import Utility from "../../../../services/Utility";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import LoadingIndicator from "../../system/LoadingIndicator/LoadingIndicator";
import { SEARCH_USER_META } from "../../../graphql/queries/user";
import { POSTS_QUERY } from "../../../graphql/queries/post";
import PostCard from "../../post/PostCard/PostCard";
import UserCard from "../../user/UserCard/UserCard";
import { SEARCH_SPACES } from "../../../graphql/queries/space";
import SpaceCard from "../../space/SpaceCard/SpaceCard";

const SearchResults: React.FC<SearchResultsProps> = () => {
  const utility = new Utility();

  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const { search } = route.lastChunk.request.params;

  const { data: userData, error: userError, loading: userLoading } = useQuery(
    SEARCH_USER_META,
    {
      variables: { search: encodeURIComponent(search) },
    }
  );

  const {
    data: postsData,
    error: postsError,
    loading: postsLoading,
  } = useQuery(POSTS_QUERY, {
    variables: { search: encodeURIComponent(search) },
  });

  const {
    data: spacesData,
    error: spacesError,
    loading: spacesLoading,
  } = useQuery(SEARCH_SPACES, {
    variables: { search: encodeURIComponent(search) },
  });

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

  if (spacesLoading) {
    return (
      <>
        <section className="searchResults">
          <LoadingIndicator loadingText="Loading spaces..." />
        </section>
      </>
    );
  }

  if (spacesError) {
    return (
      <>
        <section className="searchResults">
          <div>Error on spaces! {spacesError.message}</div>
        </section>
      </>
    );
  }

  if (
    !utility.isDefinedWithContent(userData.findManyUserMeta) &&
    !utility.isDefinedWithContent(postsData.findManyPost) &&
    !utility.isDefinedWithContent(spacesData.findManySpace)
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
          {!postsLoading && !userLoading && !spacesLoading ? (
            <>
              <Text tagName="h1">Search Results</Text>

              {userData.findManyUserMeta.length > 0 ? (
                <section className="grid col-4">
                  {userData.findManyUserMeta.map((userMeta) => {
                    return <UserCard user={userMeta.user} />;
                  })}
                </section>
              ) : (
                <></>
              )}

              {postsData.findManyPost.length > 0 ? (
                <section className="grid col-4">
                  {postsData.findManyPost.map((post) => {
                    return <PostCard post={post} />;
                  })}
                </section>
              ) : (
                <></>
              )}

              {spacesData.findManySpace.length > 0 ? (
                <section className="grid col-4">
                  {spacesData.findManySpace.map((space) => {
                    return <SpaceCard space={space} />;
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
