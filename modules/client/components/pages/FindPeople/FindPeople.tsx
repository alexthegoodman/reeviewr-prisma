import * as React from "react";

import CategoryGrid from "../../layout/CategoryGrid/CategoryGrid";
import UserCard from "../../user/UserCard/UserCard";
import { FindPeopleProps } from "./FindPeople.d";
import { ALL_SPACES } from "../../../graphql/queries/space";
import { useQuery } from "react-apollo";
import { Space } from "../../../../../__generated__/gql-gen/grapql-types";
import GraphQLData from "../../data/GraphQLData/GraphQLData";

const FindPeople: React.FC<FindPeopleProps> = () => {
  const [data, setData] = React.useState<Space[]>(null);

  console.info("find people", data);

  return (
    <>
      <GraphQLData
        QUERY={ALL_SPACES}
        loadingText="Loading users..."
        onFinish={(gqlData) => setData(gqlData["spaces"])}
      >
        {typeof data !== "undefined" && data !== null ? (
          data.map((space) => {
            console.info("see space", space);
            return (
              <CategoryGrid
                key={space.id}
                title={"People interested in " + space.itemName}
              >
                {space.members.map((member, i) => {
                  console.info("see member", member);
                  return <UserCard key={member.id} user={member} />;
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

export default FindPeople;
