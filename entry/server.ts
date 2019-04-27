import { startServer } from "../modules/server";
import * as throng from "throng";
import * as config from "config";
import window from "global";

if (typeof window === "undefined") {
  global["window"] = window;
}

// if (config.get<boolean>("server.cluster")) {
//   console.log(`Starting ${config.get<number>("server.workers")} workers`);
//   throng(config.get<number>("server.workers"), startServer);
// } else {
startServer();
// }
