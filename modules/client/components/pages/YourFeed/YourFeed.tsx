import * as React from "react";

import PodHero from "../../ui/PodHero/PodHero";
import PostCard from "../../ui/PostCard/PostCard";
import { YourFeedProps } from "./YourFeed.d";

const YourFeed: React.FC<YourFeedProps> = () => {
  return (
    <>
      <PodHero />
      <section className="postWrapper">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </>
  );
};

export default YourFeed;
