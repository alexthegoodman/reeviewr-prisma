import * as React from "react";

import PodHero from "../../ui/PodHero/PodHero";
import PostCard from "../../ui/PostCard/PostCard";
import { YourFeedProps } from "./YourFeed.d";

const YourFeed: React.FC<YourFeedProps> = () => {
  return (
    <>
      <PodHero showStats={false} />
      <section className="postWrapper">
        <div className="postWrapperContain">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </>
  );
};

export default YourFeed;
