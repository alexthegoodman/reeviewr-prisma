import * as React from "react";

import { useQuery } from "@apollo/react-hooks";
import Utility from "../../../../services/Utility";
import LoadingIndicator from "../../../components/ui/LoadingIndicator/LoadingIndicator";
import { GraphQLDataProps } from "./GraphQLData.d";
import { useCookies } from "react-cookie";
import Hawaii from "../../../services/Hawaii";
import Oahu from "../../../../services/Oahu";
import { Text, Callout } from "@blueprintjs/core";
import OutputSystemMessage from "../../ui/OutputSystemMessage/OutputSystemMessage";

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
      // TODO: Toast "Syncing"
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

  if (loading && !oahu.utility.isDefinedWithContent(data)) {
    return <LoadingIndicator loadingText={loadingText} />;
  }

  // TODO: Create ErrorCallout / OutputMessages comp
  // with options ex. type={error} code={001} attemptRefetch={true} output={Text}
  if (error) {
    return (
      <OutputSystemMessage
        type="ERROR"
        code="GRAPHQLDATA-001"
        attemptRefetch={true}
        output={error.message}
      />
    );
  }
  if (!oahu.utility.isDefinedWithContent(data)) {
    return (
      <OutputSystemMessage
        type="ERROR"
        code="GRAPHQLDATA-002"
        attemptRefetch={true}
        output="Data not loading."
      />
    );
  }

  return <>{children}</>;
};

export default GraphQLData;
