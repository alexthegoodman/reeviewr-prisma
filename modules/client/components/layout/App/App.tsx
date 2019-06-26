import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";
import AuthClient from "../../../services/AuthClient";
import { useAppContext } from "../../../context";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";
import FullStory from "react-fullstory";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { useCurrentRoute, useNavigation } from "react-navi";
import Utility from "../../../../services/Utility";

const App: React.FC<AppProps> = ({ children }) => {
  const authClient = new AuthClient();
  const utility = new Utility();

  const [{ userData }, dispatch] = useAppContext();
  let route = useCurrentRoute();
  let navigation = useNavigation();

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

  console.info("App route", userData, route);

  // global redirects
  if (
    utility.isDefinedWithContent(userData) &&
    utility.isDefinedWithContent(userData.user)
  ) {
    if (
      userData.user.userType === 1 &&
      route.url.pathname !== "/complete-profile"
    ) {
      navigation.navigate("/complete-profile");
    }
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
