import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";
import AuthClient from "../../../services/AuthClient";
import { useAppContext } from "../../../context";

const App: React.FC<AppProps> = ({ children }) => {
  const authClient = new AuthClient();

  const [{ userData }, dispatch] = useAppContext();

  if (userData === null) {
    authClient.getUserData(dispatch);
    return <>Loading user data...</>;
  }

  return <>{children}</>;
};

export default hot(module)(App);
