import * as React from "react";
import { AppContextProvider } from ".";
import { User } from "../../../__generated__/gql-gen/grapql-types";
import { useCookies } from "react-cookie";
import { useQuery } from "react-apollo-hooks";
import { USER_QUERY } from "../graphql/queries/user";
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

      default:
        return state;
    }
  };

  const [cookies] = useCookies(["reeviewrPrivateHash"]);

  if (utility.isDefinedWithContent(cookies["reeviewrPrivateHash"])) {
    const { data: userData, error: userError, loading: userLoading } = useQuery(
      USER_QUERY,
      { variables: { privateHash: cookies["reeviewrPrivateHash"] } }
    );
    if (userLoading) {
      return <div>Loading user...</div>;
    }
    if (userError) {
      return <div>Error on user! {userError.message}</div>;
    }
    if (
      Object.keys(userData).length === 0 ||
      !utility.isDefinedWithContent(userData)
    ) {
      return <div>Void data error 401...</div>;
    }

    InitialAppState = { ...InitialAppState, userData };
  }

  return (
    <AppContextProvider initialState={InitialAppState} reducer={reducer}>
      {children}
    </AppContextProvider>
  );
};
