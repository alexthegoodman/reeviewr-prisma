import * as React from "react";

import { Text } from "@blueprintjs/core";
import { useCookies } from "react-cookie";
import { USER_JOINED_PODS } from "../../../graphql/queries/user";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import CategoryGrid from "../../ui/CategoryGrid/CategoryGrid";
import NoResults from "../../ui/NoResults/NoResults";
import PodCard from "../../ui/PodCard/PodCard";
import { JoinedPodsProps } from "./JoinedPods.d";

const JoinedPods: React.FC<JoinedPodsProps> = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrId",
  ]);

  const [data, setData] = React.useState(null);

  return (
    <>
      <GraphQLData
        QUERY={USER_JOINED_PODS}
        loadingText="Loading joined pods..."
        onFinish={data => setData(data)}
        variables={{ id: cookies["reeviewrId"] }}
      >
        {data !== null &&
          data.findOneUser !== null &&
          data.findOneUser.memberOf.length > 0 ? (
            <CategoryGrid title="Joined Pods">
              {data.findOneUser.memberOf.map(pod => {
                return <PodCard key={pod.id} pod={pod} />;
              })}
            </CategoryGrid>
          ) : (
            <NoResults />
          )}
      </GraphQLData>
    </>
  );
};

export default JoinedPods;
