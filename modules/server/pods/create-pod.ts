import fs from "fs";
import AWSService from "../../services/AWSService";
import Core from "../../services/Core";
import { ERROR_CODE } from "../../services/ERROR_CODE";
import Legacy from "../../services/Legacy";
import Utility from "../../services/Utility";
import EmailService from "../utils/email";
// import * as cmd from "node-cmd";
const exec = require("child-process-promise").exec;
const cmd = require("node-cmd-promise");
const uuid = require("uuid");
const cloudinary = require("cloudinary").v2;
const slugify = require("slugify");

// TODO: legacy endpoint - swap out for createPost

export const createPod = async (req, res, mixpanel, photon) => {
  try {
    // mixpanel.Pod('User created', { time: new Date() });
    console.info(
      "CALL createPod:",
      req.method,
      req.url,
      req.params,
      req.query,
      "BODY omitted due to size"
    );

    const core = new Core();
    const utility = new Utility();
    const legacy = new Legacy();
    const emailService = new EmailService();
    const awsService = new AWSService();

    // 1. check size minimums and maximums
    // 2. upload image and Pod
    // 3. if audio - generate waveform
    // 4. create Pod item and meta
    // 6. send notifications
    // TODO: build privateHash middleware

    const {
      privateHash,
      name,
      description,
      banner,
      bannerData,
      bannerSize,
      bannerType,
      postType,
      privatePod,
      category,
    } = req.body;

    const authUser = await photon.users.findOne({ where: { privateHash } });
    // const authUserMeta = await photon.users
    //   .findOne({ where: { privateHash } })
    //   .userMeta();

    console.info("authUser", authUser);

    if (utility.isDefinedWithContent(authUser)) {
      if (
        core.getSizeBase64(bannerData.length) < 100000000 &&
        bannerSize < 100000000
      ) {
        console.info("permitted size");

        awsService
          .uploadImage(bannerData, banner)
          .then(async (filename: any) => {
            // const bannerUrl = core.imagePath("reeviewr-pods", filename, {
            //   width: 200,
            //   height: 200,
            // });
            // console.info("image uploaded", authUser.id, bannerUrl, filename);
            await photon.pods.create({
              data: {
                user: { connect: { id: authUser.id } },
                itemType: "default",
                itemStatus: "active",
                itemUrlSegment: slugify(name),
                itemName: name,
                itemContent: "",
                itemDeleted: false,
                itemMeta: {
                  create: [
                    {
                      metaName: "description",
                      metaValue: `${description}`,
                      metaType: "default",
                    },
                    {
                      metaName: "postType",
                      metaValue: `${postType}`,
                      metaType: "default",
                    },
                    {
                      metaName: "privatePod",
                      metaValue: `${privatePod}`,
                      metaType: "default",
                    },
                    {
                      metaName: "bannerFilename",
                      metaValue: `${filename}`,
                      metaType: "default",
                    },
                  ],
                },
                // posts: { connect: {} },
                categories: { connect: { id: category.value } },
              },
            });

            console.info("pod created");

            res.status(200);
            res.send({ success: true, data: {} });
            res.end();
          })
          .catch(err => {
            console.error(err);
            throw Error(ERROR_CODE.D001);
          });
      } else {
        console.error(
          "sizes",
          core.getSizeBase64(bannerData.length),
          bannerSize
        );
        throw Error(ERROR_CODE.B001);
      }
    } else {
      throw Error(ERROR_CODE.C008);
    }
  } catch (error) {
    mixpanel.track("ERROR", {
      env: process.env.NODE_ENV,
      errorMessage: error.message,
      time: new Date(),
    });
    console.error("ERROR ON:", req.method, req.url, req.params, req.query);
    console.error("ERROR DATA:", error);
    res.status(401);
    res.send({ success: false, error, errorMessage: error.message });
    res.end();
  }
};
