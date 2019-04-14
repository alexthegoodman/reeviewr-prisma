import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";
import {
  useCurrentRoute,
  useLoadingRoute,
  NotFoundBoundary,
  useNavigation,
} from "react-navi";
import BusyIndicator from "react-busy-indicator";

import NotFound from "../../pages/status/NotFound/NotFound";

const App: React.FC<AppProps> = ({ children }) => {
  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  return (
    <>
      <BusyIndicator
        color="red"
        style={{}}
        className={"busyIndicator"}
        active={null}
        isBusy={!!loadingRoute}
        delayMs={200}
      />
      <h1>App</h1>
      <NotFoundBoundary render={NotFound}>{children}</NotFoundBoundary>
    </>
  );
};

export default hot(module)(App);
