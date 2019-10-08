import * as React from "react";
import { hot } from "react-hot-loader";

import { useCookies } from "react-cookie";
import { useCurrentRoute, useNavigation } from "react-navi";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import AuthClient from "../../../services/AuthClient";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";
import { AppProps } from "./App.d";
import { useQuery } from "react-apollo";
import { GET_NOTIFICATIONS } from "../../../graphql/queries/notification";

const App: React.FC<AppProps> = ({ children }) => {
  const authClient = new AuthClient();
  const utility = new Utility();

  const [{ userData }, dispatch] = useAppContext();
  const route = useCurrentRoute();
  const navigation = useNavigation();

  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrId",
    "reeviewrDarkMode",
  ]);

  // Global Loading
  // Will users who are logged in be shown a loading symbol on SSR (with JS disabled)?
  if (
    userData === null &&
    utility.isDefinedWithContent(cookies["reeviewrId"])
  ) {
    // if reeviewrId belongs to no user, infinite loop occurs
    authClient.getUserData(dispatch);

    console.info("user data", userData);

    return (
      <>
        <LoadingIndicator loadingText="Loading user data..." />
      </>
    );
  }

  // Global Redirects
  // if (
  //   utility.isDefinedWithContent(userData) &&
  //   utility.isDefinedWithContent(userData.user)
  // ) {
  //   if (
  //     userData.user.userType === 1 &&
  //     route.url.pathname !== "/complete-profile"
  //   ) {
  //     navigation.navigate("/complete-profile");
  //   }
  // }

  // Global Analytics
  return <>{children}</>;
};

export default hot(module)(App);
