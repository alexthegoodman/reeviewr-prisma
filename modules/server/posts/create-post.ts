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

export const createPost = async (req, res, mixpanel, photon) => {
  try {
    console.info(
      "CALL createPost:",
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
    // 2. upload image and Post
    // 3. if audio - generate waveform
    // 4. create Post item and meta
    // 6. send notifications
    // TODO: build privateHash middleware

    const {
      id,
      pod,
      content,
      contentData,
      contentSize,
      contentType,
      title,
      description,
      tags,

      questionType1,
      questionContent1,
      questionOne1,
      questionTwo1,
      questionThree1,
      questionFour1,

      questionType2,
      questionContent2,
      questionOne2,
      questionTwo2,
      questionThree2,
      questionFour2,

      questionType3,
      questionContent3,
      questionOne3,
      questionTwo3,
      questionThree3,
      questionFour3,
    } = req.body;

    console.info("create post call", pod, tags);

    const authUser = await photon.users.findOne({ where: { id } });

    console.info("authUser", authUser);

    if (utility.isDefinedWithContent(authUser)) {
      if (
        core.getSizeBase64(contentData.length) < 100000000 &&
        contentSize < 100000000
      ) {
        console.info("permitted size");

        let filename = "";
        if (pod.postType !== "Text") {
          filename = (await awsService.uploadImage(
            contentData,
            content
          )) as any;
        }

        const newPost = await photon.posts.create({
          data: {
            user: { connect: { id: authUser.id } },
            itemType: "default",
            itemStatus: "active",
            itemUrlSegment: slugify(title),
            itemName: title,
            itemContent: "",
            itemDeleted: false,
            itemMimeType: contentType,
            itemMeta: {
              create: [
                {
                  metaName: "content",
                  metaValue: `${content}`,
                  metaType: "default",
                },
                {
                  metaName: "contentFilename",
                  metaValue: `${filename}`,
                  metaType: "default",
                },
                {
                  metaName: "description",
                  metaValue: `${description}`,
                  metaType: "default",
                },
                {
                  metaName: "questionType1",
                  metaValue: `${questionType1}`,
                  metaType: "default",
                },
                {
                  metaName: "questionContent1",
                  metaValue: `${questionContent1}`,
                  metaType: "default",
                },
                {
                  metaName: "questionOne1",
                  metaValue: `${questionOne1}`,
                  metaType: "default",
                },
                {
                  metaName: "questionTwo1",
                  metaValue: `${questionTwo1}`,
                  metaType: "default",
                },
                {
                  metaName: "questionThree1",
                  metaValue: `${questionThree1}`,
                  metaType: "default",
                },
                {
                  metaName: "questionFour1",
                  metaValue: `${questionFour1}`,
                  metaType: "default",
                },
                {
                  metaName: "questionType2",
                  metaValue: `${questionType2}`,
                  metaType: "default",
                },
                {
                  metaName: "questionContent2",
                  metaValue: `${questionContent2}`,
                  metaType: "default",
                },
                {
                  metaName: "questionOne2",
                  metaValue: `${questionOne2}`,
                  metaType: "default",
                },
                {
                  metaName: "questionTwo2",
                  metaValue: `${questionTwo2}`,
                  metaType: "default",
                },
                {
                  metaName: "questionThree2",
                  metaValue: `${questionThree2}`,
                  metaType: "default",
                },
                {
                  metaName: "questionFour2",
                  metaValue: `${questionFour2}`,
                  metaType: "default",
                },
                {
                  metaName: "questionType3",
                  metaValue: `${questionType3}`,
                  metaType: "default",
                },
                {
                  metaName: "questionContent3",
                  metaValue: `${questionContent3}`,
                  metaType: "default",
                },
                {
                  metaName: "questionOne3",
                  metaValue: `${questionOne3}`,
                  metaType: "default",
                },
                {
                  metaName: "questionTwo3",
                  metaValue: `${questionTwo3}`,
                  metaType: "default",
                },
                {
                  metaName: "questionThree3",
                  metaValue: `${questionThree3}`,
                  metaType: "default",
                },
                {
                  metaName: "questionFour3",
                  metaValue: `${questionFour3}`,
                  metaType: "default",
                },
              ],
            },
            pod: { connect: { id: pod.value } },
            tags: {
              connect: tags.map(tag => {
                return { id: tag.value };
              }),
            },
          },
        });

        console.info("post created", newPost);

        mixpanel.track("Post created", {
          env: process.env.NODE_ENV,
          time: new Date(),
          data: {
            title,
          },
        });

        res.status(200);
        res.send({ success: true, data: { newPost } });
        res.end();
      } else {
        console.error(
          "sizes",
          core.getSizeBase64(contentData.length),
          contentSize
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
