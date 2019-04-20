import Strings from "./Strings";

export default class Legacy {
  public strings;

  constructor() {
    this.strings = new Strings();
  }

  extractProfileImage(user): string {
    let profileImageUrl = null;

    let profileImage = user.userMeta.filter(
      meta => meta.metaName === "profileImage"
    );
    profileImage =
      typeof profileImage[0] !== "undefined"
        ? profileImage[0]["metaValue"]
        : "";

    if (profileImage === "") {
      let firstImage = null;
      user.files.forEach(file => {
        let attachedFile = file.itemMeta.filter(
          meta => meta.metaName === "attachedFile"
        );
        attachedFile =
          typeof attachedFile[0] !== "undefined"
            ? attachedFile[0]["metaValue"]
            : "";

        const jpg = attachedFile.split(".jpg");
        const jpeg = attachedFile.split(".jpeg");
        const png = attachedFile.split(".png");

        if (
          typeof jpg[1] !== "undefined" ||
          typeof jpeg[1] !== "undefined" ||
          typeof png[1] !== "undefined"
        ) {
          firstImage = attachedFile;
        }
      });
      profileImageUrl = firstImage;
    } else {
      profileImageUrl = profileImage;
    }

    if (profileImageUrl !== null) {
      profileImageUrl = process.env.V1_S3_DIR + profileImageUrl;
    } else {
      profileImageUrl = "https://via.placeholder.com/100";
    }

    return profileImageUrl;
  }

  extractArtUrl(imageData, track) {
    let imageUrl = null;
    if (imageData.file !== null) {
      // background-image: url(/uploads/2014/12/yophantom-pic-150x150.jpg)
      imageUrl = this.extractMetaValue(
        imageData.file.itemMeta,
        "attachedFile",
        process.env.V1_S3_DIR
      );
    }

    // legacy soundcloud imports
    if (imageUrl === "" || imageUrl === null) {
      const soundcloudArtUrl = this.extractMetaValue(
        track.itemMeta,
        "scArtUrl",
        "",
        true
      );

      imageUrl = soundcloudArtUrl;
    }

    return imageUrl;
  }

  extractMetaValue(allMeta, metaName, prependValue = "", decode = false) {
    let metaObj = allMeta.filter(meta => meta.metaName === metaName);

    metaObj =
      typeof metaObj[0] !== "undefined"
        ? prependValue + metaObj[0]["metaValue"]
        : "";

    if (decode) {
      metaObj = this.strings.decode(metaObj);
    }

    return metaObj;
  }
}
