import window from "global";
import TagManager from "react-gtm-module";

import * as React from "react";
import * as ReactDom from "react-dom";
import RootProvider from "../modules/client/RootProvider";

const bootstrapClient = () => {
  console.info("bootstrap client");

  const tagManagerArgs = {
    gtmId: "GTM-KQD7SP",
  };

  TagManager.initialize(tagManagerArgs);

  ReactDom.render(<RootProvider />, document.getElementById("app"));
};

bootstrapClient();
