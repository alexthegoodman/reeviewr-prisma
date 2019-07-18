import * as React from "react";

import { AuthNavProps } from "./AuthNav.d";
import App from "../App/App";
import { Button } from "@blueprintjs/core";
import Header from "../../ui/Header/Header";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import { useAppContext } from "../../../context";

const AuthNav: React.FC<AuthNavProps> = ({ children }) => {
  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const [{ currentTrack }, dispatch] = useAppContext();

  return (
    <App>
      <Header
        leftElements={
          <>
            <Button
              className="textButton headerItem"
              minimal={true}
              onClick={() => navigation.navigate("/")}
            >
              Back to Browse
            </Button>
            <Button
              className="textButton headerItem"
              minimal={true}
              onClick={() => navigation.navigate("/login")}
            >
              Login
            </Button>
            <Button
              className="textButton headerItem"
              minimal={true}
              onClick={() => navigation.navigate("/sign-up")}
            >
              Sign Up
            </Button>
          </>
        }
        rightElements={<></>}
      />
      <section
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          paddingTop: 85,
          background: "#3E4B58",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {children}
      </section>
    </App>
  );
};

export default AuthNav;
