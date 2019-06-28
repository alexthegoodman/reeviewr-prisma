import Utility from "./Utility";
import Legacy from "./Legacy";
import * as moment from "moment";
import Strings from "../client/services/Strings";
const uuid = require("uuid");
const slugify = require("slugify");

export default class Core {
  public strings;
  public utility;
  public legacy;

  constructor() {
    this.strings = new Strings();
    this.utility = new Utility();
    this.legacy = new Legacy();
  }

  // extractImageOfSize(fileUrl, imageSize) {
  //   let finalUrl;

  //   const jpg = fileUrl.split(".jpg");
  //   const jpeg = fileUrl.split(".jpeg");
  //   const png = fileUrl.split(".png");

  //   if (
  //     typeof jpg[1] !== "undefined" ||
  //     typeof jpeg[1] !== "undefined" ||
  //     typeof png[1] !== "undefined"
  //   ) {
  //     finalUrl = fileUrl;

  //     if (imageSize !== "") {
  //       finalUrl = fileUrl.split("/");
  //       finalUrl = finalUrl[0] + "-" + imageSize + "." + finalUrl[1];
  //     }
  //   }

  //   return finalUrl;
  // }

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
    let imageUrl = this.legacy.extractMetaValue(track.itemMeta, "coverArt");

    // legacy soundcloud imports
    if (imageUrl === "" || imageUrl === null) {
      const soundcloudArtUrl = this.legacy.extractMetaValue(
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
