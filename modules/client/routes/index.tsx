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
import Auth0Callback from "../components/pages/Auth0Callback/Auth0Callback";

const routes = mount({
  "/auth0-callback": route(req => {
    return {
      title: "Callback / Reeviewr",
      view: (
        <AuthNav>
          <Auth0Callback />
        </AuthNav>
      ),
    };
  }),
  "/login": route(req => {
    return {
      title: "Login / Reeviewr",
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
      view: (
        <AuthNav>
          <SignUp />
        </AuthNav>
      ),
    };
  }),
  "/": route({
    title: "Home / Reeviewr",
    // getData: () => api.fetchProducts(), // TODO: consider integrating Apollo Client here
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
      view: (
        <AppNav>
          <Tracks />
        </AppNav>
      ),
    };
  }),
  "/tracks/:trackId/:name": route(async req => {
    const { trackId, name } = req.params;

    return {
      title: `${name} / Tracks / Reeviewr`,
      view: (
        <AppNav>
          <TrackDetail trackId={trackId} />
        </AppNav>
      ),
    };
  }),
  "/artists": route(async req => {
    return {
      title: "Artists / Reeviewr",
      view: (
        <AppNav>
          <Artists />
        </AppNav>
      ),
    };
  }),
  "/artists/:artistId/:name": route(async req => {
    const { artistId, name } = req.params;

    return {
      title: `${name} / Artists / Reeviewr`,
      view: (
        <AppNav>
          <ArtistDetail artistId={artistId} />
        </AppNav>
      ),
    };
  }),
  "/reviews": route(async req => {
    return {
      title: "Reviews / Reeviewr",
      view: (
        <AppNav>
          <Reviews />
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
