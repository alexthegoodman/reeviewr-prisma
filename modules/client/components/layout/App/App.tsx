import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";
import AuthClient from "../../../services/AuthClient";
import { useAppContext } from "../../../context";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";

const App: React.FC<AppProps> = ({ children }) => {
  const authClient = new AuthClient();

  const [{ userData }, dispatch] = useAppContext();

  if (userData === null) {
    authClient.getUserData(dispatch);
    return (
      <>
        <LoadingIndicator loadingText="Loading user data..." />
      </>
    );
  }

  return <>{children}</>;
};

export default hot(module)(App);
