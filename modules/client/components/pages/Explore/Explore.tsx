import * as React from "react";

import { Text } from "@blueprintjs/core";
import PodCard from "../../ui/PodCard/PodCard";
import PodCategory from "../../ui/PodCategory/PodCategory";
import { ExploreProps } from "./Explore.d";

const Explore: React.FC<ExploreProps> = () => {
  return (
    <>
      <PodCategory title="Music Pods">
        <PodCard />
        <PodCard />
        <PodCard />
      </PodCategory>
    </>
  );
};

export default Explore;
