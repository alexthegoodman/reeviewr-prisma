import { ERROR_CODE } from "../../services/ERROR_CODE";
import { prisma } from "../../../__generated__/prisma-client";
import Utility from "../../services/Utility";
import EmailService from "../utils/email";
import Core from "../../services/Core";
import fs from "fs";
import Legacy from "../../services/Legacy";
// import * as cmd from "node-cmd";
const exec = require("child-process-promise").exec;
const cmd = require("node-cmd-promise");
const uuid = require("uuid");
const cloudinary = require("cloudinary").v2;
const slugify = require("slugify");

export const createTrack = async (req, res, mixpanel) => {
  try {
    // mixpanel.track('User created', { time: new Date() });
    console.info(
      "CALL createTrack:",
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

    // 1. check size minimums and maximums
    // 2. upload image and track
    // 3. generate waveform
    // 4. create track item and meta
    // 5. decrement user points
    // 6. send notifications
    // TODO: build privateHash middleware

    const {
      privateHash,
      trackTitle,
      genre,

      coverArt,
      coverArtType,
      coverArtSize,
      coverArtData,

      trackAudio,
      trackAudioType,
      trackAudioSize,
      trackAudioData,

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

    const authUser = await prisma.user({ privateHash });
    const authUserMeta = await prisma.user({ privateHash }).userMeta();

    console.info("authUser", authUser);

    if (utility.isDefinedWithContent(authUser)) {
      if (
        core.getSizeBase64(coverArtData.length) < 100000000 &&
        core.getSizeBase64(trackAudioData.length) < 100000000 &&
        coverArtSize < 100000000 &&
        trackAudioSize < 100000000
      ) {
        const folder = core.getUploadDir();
        const public_id = core.getPublicId(coverArt);

        cloudinary.uploader.upload(
          coverArtData,
          { public_id, folder, resource_type: "image" },
          async function(error, result) {
            console.info("result", result);
            if (error) {
              console.error("error", error);
            }
            const public_id_2 = core.getPublicId(trackAudio);

            const trimmedTrackAudioData = trackAudioData.replace(
              /^data:([A-Za-z-+/]+);base64,/,
              ""
            );
            fs.writeFile(
              `tmp/${public_id_2}`,
              trimmedTrackAudioData,
              "base64",
              err => {
                console.log(err);

                cloudinary.uploader.upload(
                  trackAudioData,
                  { public_id: public_id_2, folder, resource_type: "video" },
                  async function(error2, result2) {
                    console.info("resul2", result2);
                    if (error2) {
                      console.error("error2", error2);
                    }
                    // generate waveform
                    // exec("echo hello")

                    // await exec(
                    //   `audiowaveform -i tmp/${public_id_2} -o tmp/${public_id_2}.dat --pixels-per-second 100 --bits 16`,
                    //   { maxBuffer: 1024 * 5000 }
                    // );
                    // await exec(
                    //   `audiowaveform -i tmp/${public_id_2}.dat -o tmp/${public_id_2}.json`,
                    //   { maxBuffer: 1024 * 5000 }
                    // );
                    await exec(
                      `audiowaveform -i tmp/${public_id_2} -o tmp/${public_id_2}.json --pixels-per-second 10000 --bits 16`,
                      { maxBuffer: 1024 * 5000 }
                    );
                    // not running
                    await exec(
                      `python3 data-seed/scale-json.py tmp/${public_id_2}.json`,
                      {
                        maxBuffer: 1024 * 5000,
                      }
                    );

                    cloudinary.uploader.upload(
                      `tmp/${public_id_2}.json`,
                      {
                        public_id: `${public_id_2}.json`,
                        folder,
                        resource_type: "raw",
                      },
                      async function(error3, result3) {
                        console.info("result3", result3);
                        if (error3) {
                          console.error("error3", error3);
                        }

                        let newTrack = await prisma.createUserTrack({
                          oldId: uuid.v4().substr(0, 6),
                          itemName: trackTitle,
                          user: { connect: { id: authUser.id } },
                          itemContent: "none",
                          itemUrlSegment: slugify(trackTitle),
                          itemType: "userTrack",
                          itemStatus: "v2publish",
                          itemMeta: {
                            create: [
                              {
                                metaName: "audioFile",
                                metaValue: `${result2.secure_url}`,
                              },
                              {
                                metaName: "audioJson",
                                metaValue: `${result3.secure_url}`,
                              },
                              {
                                metaName: "coverArt",
                                metaValue: `${result.secure_url}`,
                              },
                              {
                                metaName: "questionCount",
                                metaValue: `3`,
                              },
                              {
                                metaName: "theOption",
                                metaValue: `none`,
                              },
                              {
                                metaName: "genre",
                                metaValue: `${genre}`,
                              },
                              {
                                metaName: "questionType1",
                                metaValue: `${questionType1}`,
                              },
                              {
                                metaName: "questionContent1",
                                metaValue: `${questionContent1}`,
                              },
                              {
                                metaName: "questionOne1",
                                metaValue: `${questionOne1}`,
                              },
                              {
                                metaName: "questionTwo1",
                                metaValue: `${questionTwo1}`,
                              },
                              {
                                metaName: "questionThree1",
                                metaValue: `${questionThree1}`,
                              },
                              {
                                metaName: "questionFour1",
                                metaValue: `${questionFour1}`,
                              },
                              {
                                metaName: "questionType2",
                                metaValue: `${questionType2}`,
                              },
                              {
                                metaName: "questionContent2",
                                metaValue: `${questionContent2}`,
                              },
                              {
                                metaName: "questionOne2",
                                metaValue: `${questionOne2}`,
                              },
                              {
                                metaName: "questionTwo2",
                                metaValue: `${questionTwo2}`,
                              },
                              {
                                metaName: "questionThree2",
                                metaValue: `${questionThree2}`,
                              },
                              {
                                metaName: "questionFour2",
                                metaValue: `${questionFour2}`,
                              },
                              {
                                metaName: "questionType3",
                                metaValue: `${questionType3}`,
                              },
                              {
                                metaName: "questionContent3",
                                metaValue: `${questionContent3}`,
                              },
                              {
                                metaName: "questionOne3",
                                metaValue: `${questionOne3}`,
                              },
                              {
                                metaName: "questionTwo3",
                                metaValue: `${questionTwo3}`,
                              },
                              {
                                metaName: "questionThree3",
                                metaValue: `${questionThree3}`,
                              },
                              {
                                metaName: "questionFour3",
                                metaValue: `${questionFour3}`,
                              },
                              {
                                metaName: "paid",
                                metaValue: `0`,
                              },
                              {
                                metaName: "reviewCount",
                                metaValue: `0`,
                              },
                              {
                                metaName: "reviewedBy",
                                metaValue: ``,
                              },
                            ],
                          },
                        });

                        const points = legacy.extractMetaValue(
                          authUserMeta,
                          "points"
                        );

                        // let updatedUser = await prisma.updateUserMeta({
                        //   where: { privateHash },
                        //   data: { userMeta: { update: { where: {}, data: {} } } },
                        // });

                        console.info(
                          "new track",
                          newTrack,
                          points,
                          authUserMeta
                        );

                        //       let buttonText = "Confirm Email";

                        // // TODO: send client-side error if email fails to send
                        // emailService.sendEmail(
                        //   newUser.userEmail,
                        //   newUser.userEmail,
                        //   "Confirm Email",
                        //   "confirm-email",
                        //   [
                        //     {
                        //       name: "confirm-email",
                        //       content: `<a class="btn" style="Margin:0;background:#5bc1ed;border:none;border-radius:50px;box-shadow:none;color:#fff;cursor:pointer;display:block;font-family:Helvetica Neue,Arial,sans-serif;font-size:15px;font-weight:600;height:auto;letter-spacing:.2px;line-height:18px;margin:0 auto 25px auto;max-width:360px;padding:11px 15px 12px 15px;text-align:center;text-decoration:none;text-transform:uppercase;width:80%">${buttonText}</a>`,
                        //     },
                        //   ]
                        // );

                        res.status(200);
                        res.send({ success: true, data: {} });
                        res.end();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      } else {
        console.error(
          "sizes",
          core.getSizeBase64(coverArtData.length),
          core.getSizeBase64(trackAudioData.length),
          coverArtSize,
          trackAudioSize
        );
        throw Error(ERROR_CODE.B001);
      }
    } else {
      throw Error(ERROR_CODE.C008);
    }
  } catch (error) {
    // mixpanel.track('ERROR', { time: new Date() });
    console.error("ERROR ON:", req.method, req.url, req.params, req.query);
    console.error("ERROR DATA:", error);
    res.status(401);
    res.send({ success: false, error, errorMessage: error.message });
    res.end();
  }
};
