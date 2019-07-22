import * as React from "react";

import { Text } from "@blueprintjs/core";
import CategoryGrid from "../../ui/CategoryGrid/CategoryGrid";
import PodCard from "../../ui/PodCard/PodCard";
import { ExploreProps } from "./Explore.d";

const Explore: React.FC<ExploreProps> = () => {
  return (
    <>
      <CategoryGrid title="Music Pods">
        <PodCard />
        <PodCard />
        <PodCard />
      </CategoryGrid>
      <CategoryGrid title="Painting Pods">
        <PodCard />
        <PodCard />
        <PodCard />
      </CategoryGrid>
      <CategoryGrid title="Video Pods">
        <PodCard />
        <PodCard />
        <PodCard />
      </CategoryGrid>
    </>
  );
};

export default Explore;
