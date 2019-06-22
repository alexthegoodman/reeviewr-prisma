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

    // ATTN: This is not the place for analytics
    // It merely shows when loading
    return (
      <>
        <LoadingIndicator loadingText="Loading user data..." />
      </>
    );
  }

  // TODO: add to ENV
  return (
    <>
      <FullStory org="KKJA5" />
      <MessengerCustomerChat
        pageId="431860910314038"
        appId="1534142523521486"
      />
      {children}
    </>
  );
};

export default hot(module)(App);
