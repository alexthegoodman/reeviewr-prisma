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

const routes = mount({
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
  "/forgot-password": route(req => {
    return {
      title: "Forgot Password / Reeviewr",
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
      view: (
        <AuthNav>
          <ResetPassword />
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
  "/tracks/:trackId/:name": route(req => {
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
  "/artists": route(req => {
    return {
      title: "Artists / Reeviewr",
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
      title: `${name} / Artists / Reeviewr`,
      view: (
        <AppNav>
          <ArtistDetail artistId={artistId} />
        </AppNav>
      ),
    };
  }),
  "/reviews": route(req => {
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
