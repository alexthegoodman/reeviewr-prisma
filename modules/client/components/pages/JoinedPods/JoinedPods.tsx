import * as React from "react";

import { Text } from "@blueprintjs/core";
import { useCookies } from "react-cookie";
import { USER_JOINED_PODS } from "../../../graphql/queries/user";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import CategoryGrid from "../../ui/CategoryGrid/CategoryGrid";
import PodCard from "../../ui/PodCard/PodCard";
import { JoinedPodsProps } from "./JoinedPods.d";

const JoinedPods: React.FC<JoinedPodsProps> = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrPrivateHash",
  ]);

  const [data, setData] = React.useState(null);

  return (
    <>
      <GraphQLData
        QUERY={USER_JOINED_PODS}
        loadingText="Loading joined pods..."
        onFinish={data => setData(data)}
        variables={{ privateHash: cookies["reeviewrPrivateHash"] }}
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
          <>
            <Text tagName="h1">Wait!</Text>
            <Text tagName="p">You have not joined any pods</Text>
          </>
        )}
      </GraphQLData>
    </>
  );
};

export default JoinedPods;
