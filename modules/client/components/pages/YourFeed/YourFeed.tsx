import * as React from "react";

import { useCookies } from "react-cookie";
import { USER_JOINED_PODS_POSTS } from "../../../graphql/queries/user";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import NoResults from "../../system/NoResults/NoResults";
import PodHero from "../../pod/PodHero/PodHero";
import PostCard from "../../post/PostCard/PostCard";
import { YourFeedProps } from "./YourFeed.d";

const YourFeed: React.FC<YourFeedProps> = () => {
  const [data, setData] = React.useState(null);

  return (
    <>
      <PodHero showStats={false} />
      <GraphQLData
        QUERY={USER_JOINED_PODS_POSTS}
        loadingText="Loading pod's posts..."
        onFinish={(data) => setData(data)}
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
