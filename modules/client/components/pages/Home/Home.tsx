import * as React from "react";

import { useQuery } from "react-apollo-hooks";
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

  const [{ tour }, dispatch] = useAppContext();

  const {
    data: userData,
    error: userError,
    loading: userLoading,
    refetch: refetchUsers,
  } = useQuery(USERS_QUERY);

  const {
    data: tracksData,
    error: tracksError,
    loading: tracksLoading,
    refetch: refetchTracks,
  } = useQuery(USER_TRACKS_QUERY);

  if (userLoading) {
    return <LoadingIndicator loadingText="Loading users..." />;
  }
  if (userError) {
    return <div>Error on users! {userError.message}</div>;
  }

  if (tracksLoading) {
    return <LoadingIndicator loadingText="Loading tracks..." />;
  }
  if (tracksError) {
    return <div>Error on tracks! {tracksError.message}</div>;
  }

  if (!utility.isDefinedWithContent(userData.users)) {
    setTimeout(() => {
      refetchUsers();
    }, 2000);
    return <div>Users data must be defined Code 301... Please wait...</div>;
  }

  if (!utility.isDefinedWithContent(tracksData.userTracks)) {
    setTimeout(() => {
      refetchTracks();
    }, 2000);
    return <div>Tracks data must be defined Code 302... Please wait...</div>;
  }

  const steps = [
    {
      target: ".joyrideTracksPage",
      content: "Start by listening to some music and reviewing some songs.",
    },
    {
      target: ".joyrideArtistsPage",
      content: "Then start following artists and liking your favorite songs.",
    },
    {
      target: ".joyrideReviewsPage",
      content: "Browse all of the reviews and learn more about the community.",
    },
    {
      target: ".joyrideUploadPage",
      content: "After you earn 3 points, visit here to upload your music.",
    },

    // {
    //   target: ".joyrideArtist",
    //   content: "You can find other artists on Reeviewr easily.",
    // },
    // {
    //   target: ".joyrideReview",
    //   content: "Discover music reviews tied to each Track.",
    // },
  ];

  let horizontalHeight = 225;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 768) {
      horizontalHeight = 165;
    }
  }

  return (
    <>
      {/** TODO: Announcements, Social Media embeds, content plugs, etc */}

      <Callout title="Notice" intent="danger" className="betaNotice">
        <Text tagName="p">
          This is the Closed Beta. Features may not work as expected. Please
          report feedback directly to{" "}
          <a href="mailto:admin@reeviewr.com">admin@reeviewr.com</a>
        </Text>
      </Callout>

      {typeof window !== "undefined" && window.innerWidth > 768 ? (
        <ReactJoyride
          steps={steps}
          run={tour.run}
          continuous={true}
          showProgress={true}
          showSkipButton={true}
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

      <HomeHero />

      <Text tagName="h1" className="headline">
        Artists
      </Text>

      {/* <section className="horizontalScroll">
        <div className="scrollContain"> */}
      <div className="grid col-4">
        {userData.users.map((user, i) => {
          if (i < 3) {
            return (
              <div className="joyrideArtist" key={user.id}>
                <ArtistCardData className="cardInRow" user={user} />
              </div>
            );
          }
        })}
        <div className="seeMore">
          <Link href="/artists">See More Artists</Link>
        </div>
      </div>

      {/* </div>
      </section> */}

      <Text tagName="h2" className="headline">
        Tracks
      </Text>

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
