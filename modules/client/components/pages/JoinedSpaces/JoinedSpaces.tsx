import * as React from "react";

import { Text } from "@blueprintjs/core";
import { useCookies } from "react-cookie";
import { USER_JOINED_SPACES } from "../../../graphql/queries/user";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import CategoryGrid from "../../layout/CategoryGrid/CategoryGrid";
import NoResults from "../../system/NoResults/NoResults";
import SpaceCard from "../../space/SpaceCard/SpaceCard";
import { JoinedSpacesProps } from "./JoinedSpaces.d";
import { User } from "../../../../../__generated__/gql-gen/grapql-types";

const JoinedSpaces: React.FC<JoinedSpacesProps> = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["reeviewrId"]);

  const [data, setData] = React.useState<User>(null);

  return (
    <>
      <GraphQLData
        QUERY={USER_JOINED_SPACES}
        loadingText="Loading joined spaces..."
        onFinish={(gqlData) => setData(gqlData["user"])}
        variables={{ id: cookies["reeviewrId"] }}
      >
        {data !== null && data.memberOf.length > 0 ? (
          <CategoryGrid title="Joined Spaces">
            {data.memberOf.map((space) => {
              return <SpaceCard key={space.id} space={space} />;
            })}
          </CategoryGrid>
        ) : (
          <NoResults />
        )}
      </GraphQLData>
    </>
  );
};

export default JoinedSpaces;
