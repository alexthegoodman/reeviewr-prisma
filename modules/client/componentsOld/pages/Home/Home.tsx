import * as React from "react";

import { useQuery } from "@apollo/react-hooks";
import { USERS_QUERY } from "../../../graphql/queries/user";
import { USER_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import UserTrack from "../../data/UserTrack/UserTrack";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import { HomeProps } from "./Home.d";

import { Callout, Text } from "@blueprintjs/core";
import ReactJoyride from "react-joyride";
import { Link } from "react-navi";
import HorizontalScroll from "react-scroll-horizontal";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import ArtistCardData from "../../data/ArtistCardData/ArtistCardData";
import HomeHero from "../../ui/HomeHero/HomeHero";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";

const Home: React.FC<HomeProps> = () => {
  const utility = new Utility();

  return <></>;
};

export default Home;
