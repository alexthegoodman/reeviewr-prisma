import * as React from "react";

import CategoryGrid from "../../ui/CategoryGrid/CategoryGrid";
import PodCard from "../../ui/PodCard/PodCard";
import { JoinedPodsProps } from "./JoinedPods.d";

const JoinedPods: React.FC<JoinedPodsProps> = () => {
  return (
    <CategoryGrid title="Joined Pods">
      <PodCard />
      <PodCard />
      <PodCard />
      <PodCard />
      <PodCard />
      <PodCard />
      <PodCard />
      <PodCard />
      <PodCard />
    </CategoryGrid>
  );
};

export default JoinedPods;
