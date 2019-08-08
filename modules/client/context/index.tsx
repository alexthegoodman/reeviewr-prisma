import * as React from "react";
import { IInitialAppState, InitialAppState } from "./AppContextAPI";

// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

export const AppContext = React.createContext({});

export const AppContextProvider = ({
  reducer,
  initialState,
  children,
}: {
  reducer: any;
  initialState: IInitialAppState;
  children: any;
}) => {
  return (
    <AppContext.Provider value={React.useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () =>
  React.useContext(AppContext) as Iterable<any>;
