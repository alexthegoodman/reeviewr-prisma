import * as React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../containers/App/App";
import NotFound from "../containers/NotFound/NotFound";

import sockerClient from "../services/SocketClient";

global["socket"] = new sockerClient();

export default store => {
  return (
    <App socket={global["socket"]}>
      <Switch>
        <Route exact={true} path="/" component={NotFound} />
        <Route component={NotFound} status={404} />
      </Switch>
    </App>
  );
};
