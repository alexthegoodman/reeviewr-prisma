import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";

const App: React.FC<AppProps> = ({ children }) => {
  return <>{children}</>;
};

export default hot(module)(App);
