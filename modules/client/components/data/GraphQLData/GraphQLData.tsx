import * as React from "react";

import { useQuery } from "@apollo/react-hooks";
import Utility from "../../../../services/Utility";
import LoadingIndicator from "../../../components/ui/LoadingIndicator/LoadingIndicator";
import { GraphQLDataProps } from "./GraphQLData.d";
import { useCookies } from "react-cookie";

const GraphQLData: React.FC<GraphQLDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  children,
  QUERY = null,
  loadingText = "Loading...",
  onFinish = data => console.info("finish default", data),
  variables = null,
}) => {
  const utility = new Utility();
  const [cookies] = useCookies(["reeviewrId"]);

  let queryVars = { ...variables };

  if (variables !== null && typeof variables["userId"] === "undefined") {
    queryVars = { ...variables, userId: cookies["reeviewrId"] };
  }

  const {
    data,
    error,
    loading,
    refetch,
  }: { data?: any; loading?: any; error?: any; refetch: any } = useQuery(
    QUERY,
    {
      onCompleted: onFinish,
      variables: queryVars,
    }
  );

  React.useEffect(() => {
    if (error || !utility.isDefinedWithContent(data)) {
      console.error("GraphQLData ERROR:", error, data);
      refetch();
    }
  }, error);

  if (loading) {
    return <LoadingIndicator loadingText={loadingText} />;
  }

  if (error) {
    return <div>Error 001! Will attempt refetch. Output: {error.message}</div>;
  }
  if (!utility.isDefinedWithContent(data)) {
    return (
      <div>Error 002! Will attempt refetch. Output: Data not loading.</div>
    );
  }

  return <>{children}</>;
};

export default GraphQLData;
