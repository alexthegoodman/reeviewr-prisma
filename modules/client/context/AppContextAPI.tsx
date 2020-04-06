// import * as photon from "@generated/photon";
import * as React from "react";
import { MixpanelConsumer } from "react-mixpanel";
import { AppContextProvider } from ".";
import Utility from "../../services/Utility";
import { useQuery } from "react-apollo";
import { GET_NOTIFICATIONS } from "../graphql/queries/notification";
import { useCookies } from "react-cookie";

export interface IInitialAppState {
  currentTrack: {
    playing: string;
    trackId: string;
  };
  tour: {
    run: true;
  };
  // userData: photon.User;
  // notificationsData: photon.Notification[],
  userData: any;
  notificationsData: any;
  audioManager: {
    tracks: any;
  };
}

export let InitialAppState: Partial<IInitialAppState> = {
  currentTrack: {
    playing: null,
    trackId: null,
  },
  tour: {
    run: true,
  },
  userData: null,
  audioManager: {
    tracks: {},
  },
};

export const AppContextAPI = ({ children }) => {
  const utility = new Utility();

  const reducer = (state, action) => {
    switch (action.type) {
      case "setCurrentTrack":
        return {
          ...state,
          currentTrack: action.currentTrack,
        };

      case "setTour":
        return {
          ...state,
          tour: action.tour,
        };

      case "setUserData":
        return {
          ...state,
          userData: action.userData,
        };

      case "setAudioTrack":
        return {
          ...state,
          audioManager: {
            ...state.audioManager,
            tracks: {
              ...state.audioManager.tracks,
              [action.trackId]: action.trackData,
            },
          },
        };

      default:
        return state;
    }
  };

  return (
    <MixpanelConsumer>
      {(mixpanel) => (
        <AppContextProvider
          initialState={{
            ...InitialAppState,
            // notificationsData,
            mixpanel,
          }}
          reducer={reducer}
        >
          {children}
        </AppContextProvider>
      )}
    </MixpanelConsumer>
  );
};
