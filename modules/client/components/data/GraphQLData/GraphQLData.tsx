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
  }: { data?: any; loading?: any; error?: any } = useQuery(QUERY, {
    onCompleted: onFinish,
    variables: queryVars,
  });

  if (loading) {
    return <LoadingIndicator loadingText={loadingText} />;
  }
  if (error) {
    console.error("GraphQLData ERROR:", error);
    return <div>Error! {error.message}</div>;
  }
  if (!utility.isDefinedWithContent(data)) {
    return <div>Error 2! Data not loading. Will attempt refetch.</div>;
  }

  return <>{children}</>;
};

export default GraphQLData;
