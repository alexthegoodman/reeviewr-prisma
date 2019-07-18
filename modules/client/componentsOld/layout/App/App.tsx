import * as React from "react";
import { hot } from "react-hot-loader";

import { useCurrentRoute, useNavigation } from "react-navi";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import AuthClient from "../../../services/AuthClient";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";
import { AppProps } from "./App.d";

const App: React.FC<AppProps> = ({ children }) => {
  const authClient = new AuthClient();
  const utility = new Utility();

  const [{ userData }, dispatch] = useAppContext();
  const route = useCurrentRoute();
  const navigation = useNavigation();

  // Global Loading
  if (userData === null) {
    authClient.getUserData(dispatch);

    return (
      <>
        <LoadingIndicator loadingText="Loading user data..." />
      </>
    );
  }

  // Global Redirects
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

  // Global Analytics
  return <>{children}</>;
};

export default hot(module)(App);
