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
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
      <Query
        query={gql`
          query userTrack {
            userTracks(where: { itemName_contains: "computers" }) {
              id
              itemName
              files {
                itemName
                itemMeta(where: { metaName: "attachedFile" }) {
                  metaName
                  metaValue
                }
              }
              reviews {
                user {
                  oldId
                  userEmail
                }
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.userTracks.map(({ id, itemName }) => (
            <>
              {id} {itemName}
            </>
          ));
        }}
      </Query>
      <NotFoundBoundary render={NotFound}>{children}</NotFoundBoundary>
    </>
  );
};

export default hot(module)(App);
