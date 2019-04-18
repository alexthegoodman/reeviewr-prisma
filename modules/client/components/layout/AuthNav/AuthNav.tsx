import * as React from "react";

import { AuthNavProps } from "./AuthNav.d";
import App from "../App/App";

const AuthNav: React.FC<AuthNavProps> = ({ children }) => {
  return <App>{children}</App>;
};

export default AuthNav;
