import * as React from "react";

import { HomeProps } from "./Home.d";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import { useQuery } from "react-apollo-hooks";
import { USERS_QUERY } from "../../../graphql/queries/user";
import { USER_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import UserTrack from "../../data/UserTrack/UserTrack";

import HorizontalScroll from "react-scroll-horizontal";
import Legacy from "../../../../services/Legacy";
import ArtistCardData from "../../data/ArtistCardData/ArtistCardData";
import Utility from "../../../../services/Utility";
import ReactJoyride from "react-joyride";
import { useAppContext } from "../../../context";

const Home: React.FC<HomeProps> = () => {
  const utility = new Utility();

  const [{ tour }, dispatch] = useAppContext();

  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USERS_QUERY
  );

  const {
    data: tracksData,
    error: tracksError,
    loading: tracksLoading,
  } = useQuery(USER_TRACKS_QUERY);

  if (userLoading) {
    return <div>Loading users...</div>;
  }
  if (userError) {
    return <div>Error on users! {userError.message}</div>;
  }

  if (tracksLoading) {
    return <div>Loading tracks...</div>;
  }
  if (tracksError) {
    return <div>Error on tracks! {tracksError.message}</div>;
  }

  if (
    !utility.isDefinedWithContent(userData.users) ||
    !utility.isDefinedWithContent(tracksData.userTracks)
  ) {
    return <div>Mechanical work at home...</div>;
  }

  console.info("Home Data", userData, tracksData);

  const steps = [
    {
      target: ".joyrideArtist",
      content: "You can find other artists on Reeviewr easily.",
    },
    {
      target: ".joyrideReview",
      content: "Discover music reviews tied to each Track.",
    },
  ];

  return (
    <>
      {/** TODO: Announcements, Social Media embeds, content plugs, etc */}

      {typeof window !== "undefined" ? (
        <ReactJoyride
          steps={steps}
          run={tour.run}
          continuous={true}
          showProgress={true}
          callback={state => {
            // console.info(state);
            if (state.action === "reset") {
              dispatch({
                type: "setTour",
                tour: { run: false },
              });
            }
          }}
        />
      ) : (
        <></>
      )}

      <HorizontalScroll
        style={{ height: 225, overflow: "visible", margin: "25px 0 50px 0" }}
        reverseScroll={true}
      >
        {userData.users.map(user => {
          return (
            <div className="joyrideArtist" key={user.id}>
              <ArtistCardData className="cardInRow" user={user} />
            </div>
          );
        })}
      </HorizontalScroll>

      {tracksData.userTracks.map(track => {
        return (
          <div className="joyrideTrack" key={track.id}>
            <UserTrack track={track} reviewLimit={3} />
          </div>
        );
      })}
    </>
  );
};

export default Home;
