import startServer from "../modules/server/index";
import * as throng from "throng";
import * as config from "config";
import window from "global";

if (typeof window === "undefined") {
  global["window"] = window;
}

console.info("Initiate entry file...");

startServer();
