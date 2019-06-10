import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";
import AuthClient from "../../../services/AuthClient";
import { useAppContext } from "../../../context";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";
import FullStory from "react-fullstory";
import MessengerCustomerChat from "react-messenger-customer-chat";

const App: React.FC<AppProps> = ({ children }) => {
  const authClient = new AuthClient();

  const [{ userData }, dispatch] = useAppContext();

  if (userData === null) {
    authClient.getUserData(dispatch);
    return (
      <>
        <FullStory org="KKJA5" />
        <MessengerCustomerChat
          pageId="431860910314038"
          appId="1534142523521486"
        />
        <LoadingIndicator loadingText="Loading user data..." />
      </>
    );
  }

  return <>{children}</>;
};

export default hot(module)(App);
