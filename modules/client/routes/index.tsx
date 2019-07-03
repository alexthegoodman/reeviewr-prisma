import * as React from "react";
import { lazy, mount, route } from "navi";

import Home from "../components/pages/Home/Home";
import Tracks from "../components/pages/Tracks/Tracks";
import TrackDetail from "../components/pages/TrackDetail/TrackDetail";
import Artists from "../components/pages/Artists/Artists";
import ArtistDetail from "../components/pages/ArtistDetail/ArtistDetail";
import Reviews from "../components/pages/Reviews/Reviews";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import AuthNav from "../components/layout/AuthNav/AuthNav";
import AppNav from "../components/layout/AppNav/AppNav";
import ForgotPassword from "../components/pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../components/pages/ResetPassword/ResetPassword";
import ProfileLikes from "../components/pages/ProfileLikes/ProfileLikes";
import ProfileFollowing from "../components/pages/ProfileFollowing/ProfileFollowing";
import ProfileFollowers from "../components/pages/ProfileFollowers/ProfileFollowers";
import UploadTrack from "../components/pages/UploadTrack/UploadTrack";
import SearchResults from "../components/pages/SearchResults/SearchResults";
import ConfirmEmail from "../components/pages/ConfirmEmail/ConfirmEmail";
import CompleteProfile from "../components/pages/CompleteProfile/CompleteProfile";
import Messages from "../components/pages/Messages/Messages";
import Notifications from "../components/pages/Notifications/Notifications";

const routes = mount({
  "/login": route(req => {
    return {
      title: "Login / Reeviewr",
      head: (
        <>
          <link rel="canonical" href="https://reeviewr.com/login" />
        </>
      ),
      view: (
        <AuthNav>
          <Login />
        </AuthNav>
      ),
    };
  }),
  "/sign-up": route(req => {
    return {
      title: "Sign Up / Reeviewr",
      head: (
        <>
          <link rel="canonical" href="https://reeviewr.com/sign-up" />
        </>
      ),
      view: (
        <AuthNav>
          <SignUp />
        </AuthNav>
      ),
    };
  }),
  "/complete-profile": route(req => {
    return {
      title: "Complete Profile / Reeviewr",
      head: (
        <>
          <link rel="canonical" href="https://reeviewr.com/complete-profile" />
        </>
      ),
      view: (
        <AuthNav>
          <CompleteProfile />
        </AuthNav>
      ),
    };
  }),
  "/forgot-password": route(req => {
    return {
      title: "Forgot Password / Reeviewr",
      head: (
        <>
          <link rel="canonical" href="https://reeviewr.com/forgot-password" />
        </>
      ),
      view: (
        <AuthNav>
          <ForgotPassword />
        </AuthNav>
      ),
    };
  }),
  "/reset-password": route(req => {
    return {
      title: "Reset Password / Reeviewr",
      head: (
        <>
          <link rel="canonical" href="https://reeviewr.com/reset-password" />
        </>
      ),
      view: (
        <AuthNav>
          <ResetPassword />
        </AuthNav>
      ),
    };
  }),
  "/confirm-email": route(req => {
    return {
      title: "Confirm Email / Reeviewr",
      head: (
        <>
          <link rel="canonical" href="https://reeviewr.com/confirm-email" />
        </>
      ),
      view: (
        <AuthNav>
          <ConfirmEmail />
        </AuthNav>
      ),
    };
  }),
  "/": route({
    title: "Home / Reeviewr",
    // getData: () => api.fetchProducts(), // TODO: consider integrating Apollo Client here
    head: (
      <>
        <link rel="canonical" href="https://reeviewr.com/" />
      </>
    ),
    view: (
      <AppNav>
        <Home />
      </AppNav>
    ),
  }),
  // "/products": lazy(() => import("./productsRoutes")), // TODO: set up code-splitting
  "/tracks": route(req => {
    return {
      title: "Tracks / Reeviewr",
      head: (
        <>
          <link rel="canonical" href="https://reeviewr.com/tracks" />
        </>
      ),
      view: (
        <AppNav>
          <Tracks />
        </AppNav>
      ),
    };
  }),
  "/tracks/:trackId/:name": route(req => {
    const { trackId, name } = req.params;

    return {
      title: `${name} / Tracks / Reeviewr`,
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/tracks/${trackId}/${name}`}
          />
        </>
      ),
      view: (
        <AppNav>
          <TrackDetail trackId={trackId} />
        </AppNav>
      ),
    };
  }),
  "/artists": route(req => {
    return {
      title: "Artists / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/artists`} />
        </>
      ),
      view: (
        <AppNav>
          <Artists />
        </AppNav>
      ),
    };
  }),
  "/artists/:artistId/:name": route(req => {
    const { artistId, name } = req.params;

    return {
      title: `${name} / Artist / Reeviewr`,
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/artists/${artistId}/${name}`}
          />
        </>
      ),
      view: (
        <AppNav>
          <ArtistDetail artistId={artistId} />
        </AppNav>
      ),
    };
  }),
  "/artists/:artistId/:name/likes": route(req => {
    const { artistId, name } = req.params;

    return {
      title: `${name} / Artist Likes / Reeviewr`,
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/artiists/${artistId}/${name}/likes`}
          />
        </>
      ),
      view: (
        <AppNav>
          <ProfileLikes artistId={artistId} />
        </AppNav>
      ),
    };
  }),
  "/artists/:artistId/:name/following": route(req => {
    const { artistId, name } = req.params;

    return {
      title: `${name} / Artist Following / Reeviewr`,
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/artiists/${artistId}/${name}/following`}
          />
        </>
      ),
      view: (
        <AppNav>
          <ProfileFollowing artistId={artistId} />
        </AppNav>
      ),
    };
  }),
  "/artists/:artistId/:name/followers": route(req => {
    const { artistId, name } = req.params;

    return {
      title: `${name} / Artist Followers / Reeviewr`,
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/artiists/${artistId}/${name}/followers`}
          />
        </>
      ),
      view: (
        <AppNav>
          <ProfileFollowers artistId={artistId} />
        </AppNav>
      ),
    };
  }),
  "/reviews": route(req => {
    return {
      title: "Reviews / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/reviews`} />
        </>
      ),
      view: (
        <AppNav>
          <Reviews />
        </AppNav>
      ),
    };
  }),
  "/upload": route(req => {
    return {
      title: "Upload Track / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/upload`} />
        </>
      ),
      view: (
        <AppNav>
          <UploadTrack />
        </AppNav>
      ),
    };
  }),
  "/search": route(req => {
    return {
      title: "Search Results / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/search`} />
        </>
      ),
      view: (
        <AppNav>
          <SearchResults />
        </AppNav>
      ),
    };
  }),
  "/messages": route(req => {
    return {
      title: "Messages / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/messages`} />
        </>
      ),
      view: (
        <AppNav>
          <Messages />
        </AppNav>
      ),
    };
  }),
  "/notifications": route(req => {
    return {
      title: "Notifications / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/notifications`} />
        </>
      ),
      view: (
        <AppNav>
          <Notifications />
        </AppNav>
      ),
    };
  }),
});

export default routes;

// TODO: additional configuration
// let route = {
//   url: {
//     pathname: '/navi/core-concepts/',
//     // ...
//   }
//   segments: [/* ... */],
//   title: "Core Concepts",
//   heads: [
//     <meta name="description" content="amazeballs" />, // https://frontarm.com/navi/en/guides/setting-head-meta-title/
//   ],
//   views: [
//     <NaviLayout />,
//     <NaviMDXLayout MDXComponent={/* ... */} />,
//   ],
//   data: {
//     language: 'en',
//   },
// }

// Read more: https://frontarm.com/navi/en/guides/requests-routes-matchers/
// https://frontarm.com/navi/en/guides/nested-views/
// Upload: https://frontarm.com/navi/en/guides/authenticated-routes/
