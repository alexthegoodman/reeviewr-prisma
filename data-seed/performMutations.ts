import { request } from "graphql-request";

let count = 0;
import MUTATIONS from "./mutations/user/user0";
// let count = 0;
// import MUTATIONS from "./mutations/blogPost/blogPost0";
// let count = 0;
// import MUTATIONS from "./mutations/profilePage/profilePage0";
// let count = 0;
// import MUTATIONS from "./mutations/review/review0";
// let count = 0;
// import MUTATIONS from "./mutations/review/review1";
// let count = 0;
// import MUTATIONS from "./mutations/review/review2";
// let count = 0;
// import MUTATIONS from "./mutations/review/review3";
// let count = 0;
// import MUTATIONS from "./mutations/review/review4";
// let count = 0;
// import MUTATIONS from "./mutations/userMeta/userMeta0";
// let count = 0;
// import MUTATIONS from "./mutations/userMeta/userMeta1";
// let count = 0;
// import MUTATIONS from "./mutations/userMeta/userMeta2";
// let count = 0;
// import MUTATIONS from "./mutations/userMeta/userMeta3";
// let count = 0;
// import MUTATIONS from "./mutations/userMeta/userMeta4";
// let count = 0;
// import MUTATIONS from "./mutations/userTrack/userTrack0";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta0";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta1";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta2";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta3";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta4";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta5";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta6";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta7";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta8";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta9";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta10";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta11";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta12";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta13";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta14";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta15";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta16";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta17";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta18";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta19";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta20";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta21";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta22";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta23";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta24";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta25";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta26";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta27";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta28";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta29";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta30";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta31";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta32";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta33";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta34";
// let count = 0;
// import MUTATIONS from "./mutations/itemMeta/itemMeta35";

// var fs = require("fs");

// if (process.argv.length <= 2) {
//   console.log("Usage: " + __filename + " path/to/directory");
//   process.exit(-1);
// }

// var path = process.argv[2];

// fs.readdir("./data-seed/mutations/review/", function(err: any, items: any) {
//   for (var i = 0; i < items.length; i++) {
//     const MUTATIONS = require(items[i]);
//     console.info(MUTATIONS);
//   }
// });

makeRequest(MUTATIONS);

function makeRequest(mutations: any): any {
  count++;
  return request("http://localhost:4466/", mutations[count])
    .then((data: any) => {
      callRequest(mutations);
    })
    .catch((err: any) => {
      console.error(err);
      callRequest(mutations);
    });
}

function callRequest(mutations: any) {
  if (typeof mutations[count + 1] !== "undefined") {
    console.info("continue", count);
    makeRequest(mutations);
  } else {
    console.info("done", count);
  }
}
