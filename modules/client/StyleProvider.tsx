import * as React from "react";
import { AppContextAPI } from "./context/AppContextAPI";
import { View } from "react-navi";

const styles = require("./sass/style.scss");

interface StyleProviderProps {}

export const StyleProvider: React.FC<StyleProviderProps> = (props) => {
  return (
    <AppContextAPI>
      <View />
    </AppContextAPI>
  );
};
