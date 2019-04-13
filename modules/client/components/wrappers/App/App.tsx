import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";

const App: React.FC<AppProps> = () => {
  return <h1>App</h1>;
};

export default hot(module)(App);
