const fs = require("fs");
import * as db from "../modules/db";
const knex = db.getConnection();
import { request } from "graphql-request";
const promiseForeach = require("promise-foreach");

function formRequest(count: any, reviewMeta: any) {
  let meta = reviewMeta[count];
  let fileContent = `mutation update${count} {updateReview(where: { oldId: "${
    meta.itemOldId
  }" }, data: { userTrack: { connect: { oldId: "${
    meta.metaValue
  }" } } }) {id}} `;
  count++;
  makeRequest(count, reviewMeta, fileContent);
}

function makeRequest(count: any, reviewMeta: any, fileContent: any) {
  request("http://localhost:4466/", fileContent)
    .then(data => {
      console.info("continue", count);
      formRequest(count, reviewMeta);
    })
    .catch(err => {
      console.info(err);
      formRequest(count, reviewMeta);
    });
}

// update Review with UserTrack
knex("ReviewMeta")
  .where("metaName", "preTrackId")
  .then((reviewMeta: any) => {
    let count = 0;

    console.info(reviewMeta.length); // WHY? Because there are only about 2900 trackIds correleted to about 4000 reviews, for some reason many reviews lack a trackId, andd are probably uneeded

    // formRequest(count, reviewMeta);
  })
  .catch((err: any) => console.error(err));

function formRequest2(count: any, trackMeta: any) {
  let meta = trackMeta[count];
  let fileContent = `mutation update${count} {updateFile(where: { oldId: "${
    meta.metaValue
  }" }, data: { userTrack: { connect: { oldId: "${
    meta.itemOldId
  }" } } }) {id}}`;
  count++;
  makeRequest2(count, trackMeta, fileContent);
}

function makeRequest2(count: any, trackMeta: any, fileContent: any) {
  request("http://localhost:4466/", fileContent)
    .then((data: any) => {
      console.info("continue", count);
      formRequest2(count, trackMeta);
    })
    .catch(err => {
      console.info(err);
      formRequest2(count, trackMeta);
    });
}
// update File with UserTrack
knex("UserTrackMeta")
  .where("metaName", "audioId")
  .then((userTrackMeta: any) => {
    let count = 0;

    console.info(userTrackMeta.length); // 135 tracks have an audioId attached, the others are probably drafts

    formRequest2(count, userTrackMeta);
  })
  .catch((err: any) => console.error(err));
