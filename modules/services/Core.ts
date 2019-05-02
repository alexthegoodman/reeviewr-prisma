import Utility from "./Utility";
import Legacy from "./Legacy";

export default class Core {
  public utility;
  public legacy;

  constructor() {
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
}
