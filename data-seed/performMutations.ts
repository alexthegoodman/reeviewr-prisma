import { request } from "graphql-request";

// added a query to create user 0, which represented Mturk Workers I believe
// run ts-node on the writeMutations then the performMutations
// flush db: https://github.com/Radu-Raicea/Dockerized-Flask/wiki/%5BDocker%5D-Remove-all-Docker-volumes-to-delete-the-database

const files = [
  { file: "user/user0", count: 0 },
  { file: "blogPost/blogPost0", count: 0 },
  { file: "profilePage/profilePage0", count: 0 },
  { file: "review/review0", count: 0 },
  { file: "review/review1", count: 999 },
  { file: "review/review2", count: 1999 },
  { file: "review/review3", count: 2999 },
  { file: "review/review4", count: 3999 },
  { file: "userMeta/userMeta0", count: 0 },
  { file: "userMeta/userMeta1", count: 999 },
  { file: "userMeta/userMeta2", count: 1999 },
  { file: "userMeta/userMeta3", count: 2999 },
  { file: "userMeta/userMeta4", count: 3999 },
  { file: "userTrack/userTrack0", count: 0 },
  { file: "file/file0", count: 0 },
  { file: "itemMeta/itemMeta0", count: 0 },
  { file: "itemMeta/itemMeta1", count: 999 },
  { file: "itemMeta/itemMeta2", count: 1999 },
  { file: "itemMeta/itemMeta3", count: 2999 },
  { file: "itemMeta/itemMeta4", count: 3999 },
  { file: "itemMeta/itemMeta5", count: 4999 },
  { file: "itemMeta/itemMeta6", count: 5999 },
  { file: "itemMeta/itemMeta7", count: 6999 },
  { file: "itemMeta/itemMeta8", count: 7999 },
  { file: "itemMeta/itemMeta9", count: 8999 },
  { file: "itemMeta/itemMeta10", count: 9999 },
  { file: "itemMeta/itemMeta11", count: 10999 },
  { file: "itemMeta/itemMeta12", count: 11999 },
  { file: "itemMeta/itemMeta13", count: 12999 },
  { file: "itemMeta/itemMeta14", count: 13999 },
  { file: "itemMeta/itemMeta15", count: 14999 },
  { file: "itemMeta/itemMeta16", count: 15999 },
  { file: "itemMeta/itemMeta17", count: 16999 },
  { file: "itemMeta/itemMeta18", count: 17999 },
  { file: "itemMeta/itemMeta19", count: 18999 },
  { file: "itemMeta/itemMeta20", count: 19999 },
  { file: "itemMeta/itemMeta21", count: 20999 },
  { file: "itemMeta/itemMeta22", count: 21999 },
  { file: "itemMeta/itemMeta23", count: 22999 },
  { file: "itemMeta/itemMeta24", count: 23999 },
  { file: "itemMeta/itemMeta25", count: 24999 },
  { file: "itemMeta/itemMeta26", count: 25999 },
  { file: "itemMeta/itemMeta27", count: 26999 },
  { file: "itemMeta/itemMeta28", count: 27999 },
  { file: "itemMeta/itemMeta29", count: 28999 },
  { file: "itemMeta/itemMeta30", count: 29999 },
  { file: "itemMeta/itemMeta31", count: 30999 },
  { file: "itemMeta/itemMeta32", count: 31999 },
  { file: "itemMeta/itemMeta33", count: 32999 },
  { file: "itemMeta/itemMeta34", count: 33999 },
  { file: "itemMeta/itemMeta35", count: 34999 },
];

let fileCount = 0;
let count = 0;

loadFile();

function loadFile() {
  console.info("loading file ", files[fileCount].file, files[fileCount].count);
  count = files[fileCount].count;
  import("./mutations/" + files[fileCount].file).then(mutations => {
    // console.info(Object.keys(mutations.default), mutations.default[1]);
    makeRequest(mutations.default);
  });
}

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
    fileCount++;
    loadFile();
  }
}
