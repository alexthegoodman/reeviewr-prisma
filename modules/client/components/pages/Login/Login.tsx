import * as React from "react";

import { LoginProps } from "./Login.d";
import { Text, Button } from "@blueprintjs/core";
import Auth0 from "../../../services/Auth0";

const Login: React.FC<LoginProps> = () => {
  const auth0 = new Auth0();
  const { isAuthenticated } = auth0;

  const login = () => {
    auth0.login();
  };

  const logout = () => {
    auth0.logout();
  };

  React.useEffect(() => {
    const { renewSession } = auth0;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }, []);

  return (
    <>
      <Text tagName="h1">Auth0 Implementation</Text>
      {isAuthenticated ? (
        <Button onClick={login}>Login</Button>
      ) : (
        <Button onClick={login}>Logout</Button>
      )}
    </>
  );
};

export default Login;
