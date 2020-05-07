import * as React from "react";
import { AppContextAPI } from "./context/AppContextAPI";
import { View } from "react-navi";

const styles = require("./sass/style.scss");

interface AppProviderProps {}

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  return (
    <AppContextAPI>
      <View />
    </AppContextAPI>
  );
};
