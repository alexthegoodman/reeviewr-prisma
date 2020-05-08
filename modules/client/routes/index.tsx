import { lazy, mount, route } from "navi";
import * as React from "react";

import DataHandler from "../../services/DataHandler";
import Utility from "../../services/Utility";
import AppNav from "../components/layout/AppNav/AppNav";
import AuthNav from "../components/layout/AuthNav/AuthNav";
import CompleteProfile from "../components/pages/CompleteProfile/CompleteProfile";
import ConfirmEmail from "../components/pages/ConfirmEmail/ConfirmEmail";
import CreateSpace from "../components/pages/CreateSpace/CreateSpace";
import CreatePost from "../components/pages/CreatePost/CreatePost";
import Explore from "../components/pages/Explore/Explore";
import FindPeople from "../components/pages/FindPeople/FindPeople";
import ForgotPassword from "../components/pages/ForgotPassword/ForgotPassword";
import InviteFriends from "../components/pages/InviteFriends/InviteFriends";
import JoinedSpaces from "../components/pages/JoinedSpaces/JoinedSpaces";
import MailchimpSpaces070619 from "../components/pages/landing/MailchimpSpaces070619/MailchimpSpaces070619";
import MailchimpSpaces072019 from "../components/pages/landing/MailchimpSpaces072019/MailchimpSpaces072019";
import Login from "../components/pages/Login/Login";
import Messages from "../components/pages/Messages/Messages";
import Notifications from "../components/pages/Notifications/Notifications";
import SpaceDetail from "../components/pages/SpaceDetail/SpaceDetail";
import PostDetail from "../components/pages/PostDetail/PostDetail";
import ProfileFollowers from "../components/pages/ProfileFollowers/ProfileFollowers";
import ProfileFollowing from "../components/pages/ProfileFollowing/ProfileFollowing";
import ProfileLikes from "../components/pages/ProfileLikes/ProfileLikes";
import ResetPassword from "../components/pages/ResetPassword/ResetPassword";
import Reviews from "../components/pages/Reviews/Reviews";
import SearchResults from "../components/pages/SearchResults/SearchResults";
import SignUp from "../components/pages/SignUp/SignUp";
import YourFeed from "../components/pages/YourFeed/YourFeed";
import Strings from "../services/Strings";
import EditSpace from "../components/pages/EditSpace/EditSpace";
import EditPost from "../components/pages/EditPost/EditPost";

const utility = new Utility();
const dataHandler = new DataHandler();
const strings = new Strings();
const changeCase = require("change-case");

const routes = mount({
  "/login": route((req) => {
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
  "/sign-up": route((req) => {
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
  "/complete-profile": route((req) => {
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
  "/forgot-password": route((req) => {
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
  "/reset-password": route((req) => {
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
  "/confirm-email": route((req) => {
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
    title: "Explore / Reeviewr",
    // getData: () => api.fetchProducts(), // TODO: consider integrating Apollo Client here
    head: (
      <>
        <link rel="canonical" href="https://reeviewr.com/" />
      </>
    ),
    view: (
      <AppNav>
        <Explore />
      </AppNav>
    ),
  }),
  "/spaces/:spaceId/:slug": route((req) => {
    const { spaceId, slug } = req.params;

    return {
      title: "Space Detail / Reeviewr",
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/spaces/${spaceId}/${slug}`}
          />
        </>
      ),
      view: (
        <AppNav>
          <SpaceDetail />
        </AppNav>
      ),
    };
  }),
  "/spaces/:spaceId/:slug/edit": route((req) => {
    const { spaceId, slug } = req.params;

    return {
      title: "Edit Space / Reeviewr",
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/spaces/${spaceId}/${slug}/edit`}
          />
        </>
      ),
      view: (
        <AppNav>
          <EditSpace />
        </AppNav>
      ),
    };
  }),
  "/spaces/create": route((req) => {
    return {
      title: "Create Space / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/spaces/create`} />
        </>
      ),
      view: (
        <AppNav>
          <CreateSpace />
        </AppNav>
      ),
    };
  }),
  "/posts/:postId/:slug": route((req) => {
    const { postId, slug } = req.params;

    return {
      title: "Post Detail / Reeviewr",
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/posts/${postId}/${slug}`}
          />
        </>
      ),
      view: (
        <AppNav>
          <PostDetail />
        </AppNav>
      ),
    };
  }),
  "/posts/:postId/:slug/edit": route((req) => {
    const { postId, slug } = req.params;

    return {
      title: "Edit Post / Reeviewr",
      head: (
        <>
          <link
            rel="canonical"
            href={`https://reeviewr.com/posts/${postId}/${slug}/edit`}
          />
        </>
      ),
      view: (
        <AppNav>
          <EditPost />
        </AppNav>
      ),
    };
  }),
  "/posts/create": route((req) => {
    return {
      title: "Create Post / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/posts/create`} />
        </>
      ),
      view: (
        <AppNav>
          <CreatePost />
        </AppNav>
      ),
    };
  }),
  "/find-people": route((req) => {
    return {
      title: "Find People / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/find-people`} />
        </>
      ),
      view: (
        <AppNav>
          <FindPeople />
        </AppNav>
      ),
    };
  }),
  "/invite-friends": route((req) => {
    return {
      title: "Invite Friends / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/invite-friends`} />
        </>
      ),
      view: (
        <AppNav>
          <InviteFriends />
        </AppNav>
      ),
    };
  }),
  "/joined-spaces": route((req) => {
    return {
      title: "Joined Spaces / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/joined-spaces`} />
        </>
      ),
      view: (
        <AppNav>
          <JoinedSpaces />
        </AppNav>
      ),
    };
  }),
  "/feed": route((req) => {
    return {
      title: "Your Feed / Reeviewr",
      head: (
        <>
          <link rel="canonical" href={`https://reeviewr.com/feed`} />
        </>
      ),
      view: (
        <AppNav>
          <YourFeed />
        </AppNav>
      ),
    };
  }),
  "/search": route((req) => {
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
  "/messages": route((req) => {
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
  "/notifications": route((req) => {
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
  "/landing/spaces-a": route((req) => {
    return {
      title: "Reeviewr Spaces",
      head: (
        <>
          <title>Reeviewr Spaces</title>
        </>
      ),
      view: <MailchimpSpaces070619 />,
    };
  }),
  "/landing/spaces-b": route((req) => {
    return {
      title: "Reeviewr Spaces",
      head: (
        <>
          <title>Reeviewr Spaces</title>
        </>
      ),
      view: <MailchimpSpaces072019 />,
    };
  }),
  // "/products": lazy(() => import("./productsRoutes")), // TODO: set up code-splitting
  // "/tracks": route(req => {
  //   return {
  //     title: "Tracks / Reeviewr",
  //     head: (
  //       <>
  //         <link rel="canonical" href="https://reeviewr.com/tracks" />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <Tracks />
  //       </AppNav>
  //     ),
  //   };
  // }),
  // "/tracks/:trackId/:name": route(req => {
  //   const { trackId, name } = req.params;

  //   return {
  //     title: `${strings.decode(
  //       he.decode(changeCase.sentenceCase(name))
  //     )} / Tracks / Reeviewr`,
  //     head: (
  //       <>
  //         <link
  //           rel="canonical"
  //           href={`https://reeviewr.com/tracks/${trackId}/${name}`}
  //         />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <TrackDetail trackId={trackId} />
  //       </AppNav>
  //     ),
  //   };
  // }),
  // "/artists": route(req => {
  //   return {
  //     title: "Artists / Reeviewr",
  //     head: (
  //       <>
  //         <link rel="canonical" href={`https://reeviewr.com/artists`} />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <Artists />
  //       </AppNav>
  //     ),
  //   };
  // }),
  // "/artists/:artistId/:name": route(req => {
  //   const { artistId, name } = req.params;

  //   return {
  //     title: `${strings.decode(name)} / Artist / Reeviewr`,
  //     head: (
  //       <>
  //         <link
  //           rel="canonical"
  //           href={`https://reeviewr.com/artists/${artistId}/${name}`}
  //         />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <ArtistDetail artistId={artistId} />
  //       </AppNav>
  //     ),
  //   };
  // }),
  // "/artists/:artistId/:name/likes": route(req => {
  //   const { artistId, name } = req.params;

  //   return {
  //     title: `${strings.decode(
  //       he.decode(changeCase.sentenceCase(name))
  //     )} / Artist Likes / Reeviewr`,
  //     head: (
  //       <>
  //         <link
  //           rel="canonical"
  //           href={`https://reeviewr.com/artiists/${artistId}/${name}/likes`}
  //         />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <ProfileLikes artistId={artistId} />
  //       </AppNav>
  //     ),
  //   };
  // }),
  // "/artists/:artistId/:name/following": route(req => {
  //   const { artistId, name } = req.params;

  //   return {
  //     title: `${strings.decode(
  //       he.decode(changeCase.sentenceCase(name))
  //     )} / Artist Following / Reeviewr`,
  //     head: (
  //       <>
  //         <link
  //           rel="canonical"
  //           href={`https://reeviewr.com/artiists/${artistId}/${name}/following`}
  //         />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <ProfileFollowing artistId={artistId} />
  //       </AppNav>
  //     ),
  //   };
  // }),
  // "/artists/:artistId/:name/followers": route(req => {
  //   const { artistId, name } = req.params;

  //   return {
  //     title: `${strings.decode(
  //       he.decode(changeCase.sentenceCase(name))
  //     )} / Artist Followers / Reeviewr`,
  //     head: (
  //       <>
  //         <link
  //           rel="canonical"
  //           href={`https://reeviewr.com/artiists/${artistId}/${name}/followers`}
  //         />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <ProfileFollowers artistId={artistId} />
  //       </AppNav>
  //     ),
  //   };
  // }),
  // "/reviews": route(req => {
  //   return {
  //     title: "Reviews / Reeviewr",
  //     head: (
  //       <>
  //         <link rel="canonical" href={`https://reeviewr.com/reviews`} />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <Reviews />
  //       </AppNav>
  //     ),
  //   };
  // }),
  // "/upload": route(req => {
  //   return {
  //     title: "Upload Track / Reeviewr",
  //     head: (
  //       <>
  //         <link rel="canonical" href={`https://reeviewr.com/upload`} />
  //       </>
  //     ),
  //     view: (
  //       <AppNav>
  //         <UploadTrack />
  //       </AppNav>
  //     ),
  //   };
  // }),
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
