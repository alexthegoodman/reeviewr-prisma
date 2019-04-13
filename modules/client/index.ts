import * as React from "react";
import * as ReactDOM from "react-dom";

import { createBrowserHistory } from "history";

import createStore from "./redux/create/store";
import RootProvider from "./RootProvider";

const history = createBrowserHistory();
const store = createStore(history);
const styles = require("./sass/style.scss");

/**
 * Render App
 */
const rootProvider = new RootProvider();
const client = rootProvider.getProvider(store, history);

/**
 * Listen to Redux Store Updates
 */
store.subscribe(() => {
  const state = store.getState();
  console.info("redux state", state);
});

export default client;
