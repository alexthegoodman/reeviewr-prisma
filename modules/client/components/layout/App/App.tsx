import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";
import {
  useCurrentRoute,
  useLoadingRoute,
  NotFoundBoundary,
  useNavigation,
} from "react-navi";
// import BusyIndicator from "react-busy-indicator";

import NotFound from "../../pages/status/NotFound/NotFound";
import { useAppContext } from "../../../context";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Header from "../../ui/Header/Header";
import Sidebar from "../../ui/Sidebar/Sidebar";
import MenuItem from "../../ui/MenuItem/MenuItem";
import { Menu, Button } from "@blueprintjs/core";
import ProfileItem from "../../ui/ProfileItem/ProfileItem";
import BeyondSearch from "../../ui/BeyondSearch/BeyondSearch";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";

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
      <Sidebar>
        <Menu className="sidebarMenu">
          <MenuItem active={true}>Tracks</MenuItem>
          <MenuItem>Artists</MenuItem>
          <MenuItem>Reviews</MenuItem>
        </Menu>
      </Sidebar>
      <Header
        leftElements={
          <>
            <ProfileItem
              className="headerItem"
              imageUrl="https://via.placeholder.com/100"
              name="Regina Spektor"
            />
            <BeyondSearch />
          </>
        }
        rightElements={
          <>
            <Button className="textButton headerItem" minimal={true}>
              How it Works
            </Button>
            <Button className="textButton headerItem" minimal={true}>
              About Reeviewr
            </Button>
          </>
        }
      />
      <section
        style={{
          paddingLeft: 325,
          paddingTop: 85,
          background: "#3E4B58",
          height: "100vh",
        }}
      >
        <h1 style={{ color: "white" }}>Artists</h1>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridColumnGap: 50,
          }}
        >
          <ArtistCard
            imageUrl={"https://via.placeholder.com/100"}
            artistTitle={"Artist Title"}
            reviewCount={10}
            trackCount={5}
            onClick={() => console.info("onClick")}
          />
          <ArtistCard
            imageUrl={"https://via.placeholder.com/100"}
            artistTitle={"Artist Title"}
            reviewCount={10}
            trackCount={5}
            onClick={() => console.info("onClick")}
          />
          <ArtistCard
            imageUrl={"https://via.placeholder.com/100"}
            artistTitle={"Artist Title"}
            reviewCount={10}
            trackCount={5}
            onClick={() => console.info("onClick")}
          />
        </section>

        {/* <Button onClick={toggleTrack}>Toggle Track</Button>
        <NotFoundBoundary render={NotFound}>{children}</NotFoundBoundary> */}
      </section>
    </>
  );
};

export default hot(module)(App);
