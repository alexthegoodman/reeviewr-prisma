import * as React from "react";
import { MixpanelConsumer } from "react-mixpanel";
import { AppContextProvider } from ".";
import { User } from "../../../__generated__/gql-gen/grapql-types";
import Utility from "../../services/Utility";

export interface IInitialAppState {
  currentTrack: {
    playing: string;
    trackId: string;
  };
  tour: {
    run: true;
  };
  userData: User;
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

  // load API data via AuthClient or another Client and client.query

  return (
    <MixpanelConsumer>
      {mixpanel => (
        <AppContextProvider
          initialState={{ ...InitialAppState, mixpanel }}
          reducer={reducer}
        >
          {children}
        </AppContextProvider>
      )}
    </MixpanelConsumer>
  );
};
