import * as React from "react";

import { Button } from "@blueprintjs/core";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import { useAppContext } from "../../../context";
import Header from "../../navigation/Header/Header";
import App from "../App/App";
import { AuthNavProps } from "./AuthNav.d";

const AuthNav: React.FC<AuthNavProps> = ({ children }) => {
  const route = useCurrentRoute();
  const loadingRoute = useLoadingRoute();
  const navigation = useNavigation();

  const [{ currentTrack }, dispatch] = useAppContext();

  return (
    <App>
      <Header
        className="noLogo"
        leftElements={
          <>
            <Button
              className="textButton headerItem"
              minimal={true}
              onClick={() => navigation.navigate("/")}
            >
              Back to Home
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
          paddingTop: 25,
          background: "#FFFFFF",
          height: "calc(100vh - 81px)",
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
