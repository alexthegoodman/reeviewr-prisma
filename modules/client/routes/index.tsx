import * as React from "react";
import { lazy, mount, route } from "navi";

import Home from "../components/pages/Home/Home";
import Tracks from "../components/pages/Tracks/Tracks";
import TrackDetail from "../components/pages/TrackDetail/TrackDetail";
import Artists from "../components/pages/Artists/Artists";
import ArtistDetail from "../components/pages/ArtistDetail/ArtistDetail";
import Reviews from "../components/pages/Reviews/Reviews";

const routes = mount({
  "/": route({
    title: "Home / Reeviewr",
    // getData: () => api.fetchProducts(), // TODO: consider integrating Apollo Client here
    view: <Home />,
  }),
  // "/products": lazy(() => import("./productsRoutes")), // TODO: set up code-splitting
  "/tracks": route(req => {
    return {
      title: "Tracks / Reeviewr",
      view: <Tracks />,
    };
  }),
  "/tracks/:trackId/:name": route(async req => {
    const { trackId, name } = req.params;

    return {
      title: `${name} / Tracks / Reeviewr`,
      view: <TrackDetail trackId={trackId} />,
    };
  }),
  "/artists": route(async req => {
    return {
      title: "Artists / Reeviewr",
      view: <Artists />,
    };
  }),
  "/artists/:artistId/:name": route(async req => {
    const { artistId, name } = req.params;

    return {
      title: `${name} / Artists / Reeviewr`,
      view: <ArtistDetail artistId={artistId} />,
    };
  }),
  "/reviews": route(async req => {
    return {
      title: "Reviews / Reeviewr",
      view: <Reviews />,
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
