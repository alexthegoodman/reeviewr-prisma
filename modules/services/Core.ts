import * as moment from "moment";
import Strings from "../client/services/Strings";
import DataHandler from "./DataHandler";
import Utility from "./Utility";
const uuid = require("uuid");
const slugify = require("slugify");
const btoa = require("btoa");

export default class Core {
  public strings;
  public utility;
  public dataHandler;

  constructor() {
    this.strings = new Strings();
    this.utility = new Utility();
    this.dataHandler = new DataHandler();
  }

  // https://docs.aws.amazon.com/solutions/latest/serverless-image-handler/deployment.html
  imagePath(bucket = "reeviewr-pods", filename = "", options = {}) {
    const imageRequest = JSON.stringify({
      bucket,
      key: filename,
      edits: options,
    });
    const url = `${process.env.CLOUDFRONT_URL}/${btoa(imageRequest)}`;
    return url;
  }

  publicIdFromUrl(url) {
    const parts = url.split("/");
    return parts[parts.length - 1].split(".")[0];
  }

  pathFromUrl(url) {
    let parts = url.split("image/upload")[1];

    if (this.utility.isDefinedWithContent(parts)) {
      parts = parts.substring(12, parts.length);
    }

    return parts;
  }

  extractCoverArt(track) {
    let imageUrl = this.dataHandler.extractMetaValue(
      track.itemMeta,
      "coverArt"
    );

    // dataHandler soundcloud imports
    if (imageUrl === "" || imageUrl === null) {
      const soundcloudArtUrl = this.dataHandler.extractMetaValue(
        track.itemMeta,
        "scArtUrl",
        "",
        true
      );

      imageUrl = soundcloudArtUrl;

      // TODO: are soundcloud art pieces resized?

      // if (imageSize !== "") {
      //   imageUrl = imageUrl.split(".");
      //   imageUrl = process.env.V1_S3_DIR + imageUrl[0] + "-" + imageSize + "." + imageUrl[1];
      // }
    }

    if (imageUrl === "") {
      imageUrl = "https://via.placeholder.com/100";
    }

    return imageUrl;
  }

  getTrackDuration(audioPlayerRef, transform = false) {
    const duration =
      audioPlayerRef.current !== null &&
      !isNaN(audioPlayerRef.current.audioEl.duration)
        ? Math.floor(audioPlayerRef.current.audioEl.duration)
        : 1;

    const transformedDuration = transform
      ? moment.utc(duration * 1000).format("mm:ss")
      : duration;

    return transformedDuration;
  }

  getUploadDir() {
    const year = moment().format("YYYY");
    const month = moment().format("MM");
    const folder = `${year}/${month}/`;
    return folder;
  }

  getSizeBase64(length) {
    const size = length * (3 / 4);
    return size;
  }

  getPublicId(name) {
    const pieces = name.split(".");
    const publicId =
      encodeURIComponent(
        slugify(
          pieces[0]
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29")
            .replace(/\[/g, "%28")
            .replace(/\]/g, "%29")
        )
      ) +
      "-" +
      uuid.v4() +
      "." +
      pieces[pieces.length - 1];
    return publicId;
  }

  getFromCSV(items) {
    let splitItems = null;
    if (items !== "") {
      splitItems = decodeURIComponent(items);
      splitItems = splitItems.split(",");
    }
    return splitItems;
  }

  setAsCSV(splitItems) {
    let items = null;
    if (splitItems !== null && splitItems.length > 0) {
      items = splitItems.join(",");
      items = encodeURIComponent(splitItems);
    }
    return items;
  }
}
