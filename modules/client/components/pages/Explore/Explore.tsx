import * as React from "react";

import Utility from "../../../../services/Utility";
import { CATEGORIES_PODS_POSTS } from "../../../graphql/queries/category";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import CategoryGrid from "../../ui/CategoryGrid/CategoryGrid";
import PodCard from "../../ui/PodCard/PodCard";
import { ExploreProps } from "./Explore.d";

const Explore: React.FC<ExploreProps> = () => {
  const utility = new Utility();

  const [data, setData] = React.useState(null);

  return (
    <>
      <GraphQLData
        QUERY={CATEGORIES_PODS_POSTS}
        loadingText="Loading all pods..."
        onFinish={data => setData(data)}
      >
        {typeof data !== "undefined" && data !== null ? (
          data.findManyCategory.map(cpp => {
            return (
              <CategoryGrid key={cpp.id} title={cpp.itemName}>
                {cpp.pods.map(pod => {
                  return <PodCard key={pod.id} pod={pod} />;
                })}
              </CategoryGrid>
            );
          })
        ) : (
          <></>
        )}
      </GraphQLData>
    </>
  );
};

export default Explore;
