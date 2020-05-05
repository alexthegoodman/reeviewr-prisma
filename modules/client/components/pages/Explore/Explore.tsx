import * as React from "react";

import Utility from "../../../../services/Utility";
import { CATEGORIES_SPACES_POSTS } from "../../../graphql/queries/category";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import CategoryGrid from "../../layout/CategoryGrid/CategoryGrid";
import SpaceCard from "../../space/SpaceCard/SpaceCard";
import { ExploreProps } from "./Explore.d";
import { Category } from "../../../../../__generated__/gql-gen/grapql-types";

const Explore: React.FC<ExploreProps> = () => {
  const utility = new Utility();

  const [data, setData] = React.useState<Category[]>(null);

  return (
    <>
      <GraphQLData
        QUERY={CATEGORIES_SPACES_POSTS}
        loadingText="Loading all spaces..."
        onFinish={(gqlData) => setData(gqlData["categories"])}
      >
        {typeof data !== "undefined" && data !== null ? (
          data.map((cpp) => {
            return (
              <CategoryGrid key={cpp.id} title={cpp.itemName}>
                {cpp.spaces.map((space) => {
                  return <SpaceCard key={space.id} space={space} />;
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
