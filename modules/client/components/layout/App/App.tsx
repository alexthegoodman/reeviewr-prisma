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
import { useAppContext } from "../../../context";

const App: React.FC<AppProps> = ({ children }) => {
  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const [{ currentTrack }, dispatch] = useAppContext();

  console.info("current track", currentTrack);

  const toggleTrack = () => {
    dispatch({
      type: "setCurrentTrack",
      currentTrack: { playing: !currentTrack.playing },
    });
  };

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
      <button onClick={toggleTrack}>Toggle Track</button>
      <NotFoundBoundary render={NotFound}>{children}</NotFoundBoundary>
    </>
  );
};

export default hot(module)(App);
