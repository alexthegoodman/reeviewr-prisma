import * as React from "react";

import { useCookies } from "react-cookie";
import { JOINED_PODS_POSTS } from "../../../graphql/queries/post";
import { USER_JOINED_PODS_POSTS } from "../../../graphql/queries/user";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import NoResults from "../../ui/NoResults/NoResults";
import PodHero from "../../ui/PodHero/PodHero";
import PostCard from "../../ui/PostCard/PostCard";
import { YourFeedProps } from "./YourFeed.d";

const YourFeed: React.FC<YourFeedProps> = () => {
  const [data, setData] = React.useState(null);

  return (
    <>
      <PodHero showStats={false} />
      <GraphQLData
        QUERY={USER_JOINED_PODS_POSTS}
        loadingText="Loading pod's posts..."
        onFinish={data => setData(data)}
        variables={{ postId: null }}
      >
        {data !== null &&
        data.findOneUser !== null &&
        data.findOneUser.memberOfPosts !== null ? (
          <section className="postWrapper">
            <div className="postWrapperContain">
              {data.findOneUser.memberOfPosts.map((post, i) => {
                return <PostCard key={i} post={post} />;
              })}
            </div>
          </section>
        ) : (
          <NoResults />
        )}
      </GraphQLData>
    </>
  );
};

export default YourFeed;
