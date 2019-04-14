import * as React from "react";
import { AppContextProvider } from ".";

export interface IInitialAppState {
  currentTrack: {
    playing: string;
    trackId: string;
  };
}

export const InitialAppState: Partial<IInitialAppState> = {
  currentTrack: {
    playing: null,
    trackId: null,
  },
};

export const AppContextAPI = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setCurrentTrack":
        return {
          ...state,
          currentTrack: action.currentTrack,
        };

      default:
        return state;
    }
  };

  return (
    <AppContextProvider initialState={InitialAppState} reducer={reducer}>
      {children}
    </AppContextProvider>
  );
};
