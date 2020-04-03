import * as React from "react";

import { useQuery } from "@apollo/react-hooks";
import Utility from "../../../../services/Utility";
import LoadingIndicator from "../../../components/ui/LoadingIndicator/LoadingIndicator";
import { GraphQLDataProps } from "./GraphQLData.d";
import { useCookies } from "react-cookie";
import Hawaii from "../../../services/Hawaii";
import Oahu from "../../../../services/Oahu";

const GraphQLData: React.FC<GraphQLDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  children,
  QUERY = null,
  loadingText = "Loading...",
  onFinish = data => console.info("finish default", data),
  onError = error => console.error("error", error),
  variables = null,
}) => {
  const hawaii = new Hawaii();
  const oahu = new Oahu();
  const [cookies] = useCookies(["reeviewrId"]);

  let queryVars = { ...variables };

  if (variables !== null && typeof variables["userId"] === "undefined") {
    queryVars = { ...variables, userId: cookies["reeviewrId"] };
  }

  const finishError = error => {
    setTimeout(() => {
      hawaii.apolloClient.reFetchObservableQueries();
    }, process.env.ERROR_REFETCH_DELAY as any);
    // hawaii.apolloClient.reFetchObservableQueries
    onError(error);
  };

  const finishSuccess = data => {
    onFinish(data);
  };

  const {
    data,
    error,
    loading,
    refetch,
  }: { data?: any; loading?: any; error?: any; refetch: any } = useQuery(
    QUERY,
    {
      onError: finishError,
      onCompleted: finishSuccess,
      variables: queryVars,
      pollInterval: process.env.POLL_INTERVAL as any,
    }
  );

  if (loading) {
    return <LoadingIndicator loadingText={loadingText} />;
  }

  if (error) {
    return <div>Error 001! Will attempt refetch. Output: {error.message}</div>;
  }
  if (!oahu.utility.isDefinedWithContent(data)) {
    return (
      <div>Error 002! Will attempt refetch. Output: Data not loading.</div>
    );
  }

  return <>{children}</>;
};

export default GraphQLData;
