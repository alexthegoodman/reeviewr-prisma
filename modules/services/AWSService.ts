import * as moment from "moment";
import Strings from "../client/services/Strings";
import Legacy from "./Legacy";
import Utility from "./Utility";
const uuid = require("uuid");
const slugify = require("slugify");
import S3 from "aws-sdk/clients/s3";
import Core from "./Core";
const atob = require("atob");

export default class AWSService {
  public strings;
  public utility;
  public legacy;
  public core;
  public s3;

  constructor() {
    this.strings = new Strings();
    this.utility = new Utility();
    this.legacy = new Legacy();
    this.core = new Core();

    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  uploadImage(base64, filename, bucket = "reeviewr-pods") {
    return new Promise((resolve, reject) => {
      const dotIndex = filename.lastIndexOf(".");
      const ext = filename.substring(dotIndex);
      const title = filename.substring(0, dotIndex);
      const filepath = this.core.getUploadDir();
      const key = filepath + title + "-" + uuid.v4() + ".jpg";

      base64 = base64.split(",")[1];

      const buf = new Buffer(
        base64.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );

      const data = {
        Key: key,
        Body: buf,
        ContentEncoding: "base64",
        ContentType: "image/jpeg",
        Bucket: bucket,
      };

      console.info("uploading", ext, title, data);

      this.s3.putObject(data, function(err, data) {
        if (err) {
          console.log(err);
          console.log("Error uploading data: ", data);
          reject(err);
        } else {
          console.log("succesfully uploaded the image!", data);
          resolve(key);
        }
      });
    });
  }

  uploadVideo() {}

  uploadAudio() {}

  // dataURItoBlob(dataURI, dataType) {
  //   const binary = atob(dataURI.split(",")[1]);
  //   const array = [];
  //   for (let i = 0; i < binary.length; i++) {
  //     array.push(binary.charCodeAt(i));
  //   }
  //   return new Blob([new Uint8Array(array)], { type: dataType });
  // }
}
