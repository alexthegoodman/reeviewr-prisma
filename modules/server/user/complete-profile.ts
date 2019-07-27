import bcrypt from "bcrypt";
import { ERROR_CODE } from "../../services/ERROR_CODE";
import Utility from "../../services/Utility";
import EmailService from "../utils/email";
const uuid = require("uuid");
const cloudinary = require("cloudinary").v2;
import * as moment from "moment";
import Core from "../../services/Core";
const Mailchimp = require("mailchimp-api-v3");
// const Chatkit = require("@pusher/chatkit-server");

// const chatkit = new Chatkit.default({
//   instanceLocator: process.env.CHATKIT_INSTANCE,
//   key: process.env.CHATKIT_KEY,
// });

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const completeProfile = async (req, res, mixpanel, photon) => {
  try {
    console.info(
      "CALL completeProfile:",
      req.method,
      req.url,
      req.params,
      req.query
    );

    // Native Sign Up:
    // 1. Send email confirmation
    // 2. Create user as userConfirmed = 0, generate 4 UUIDs

    const core = new Core();
    const utility = new Utility();
    const emailService = new EmailService();

    const {
      privateHash,
      artistName,
      aboutArtist,
      profilePicture,
      profilePictureData,
      favoriteGenre,
      gender,
      age,
      explicit,
    } = req.body;

    const authUser = await photon.users.findOne({ where: { privateHash } });
    const authUserMeta = await photon.users
      .findOne({ where: { privateHash } })
      .userMeta();

    console.info("authUser", authUser);

    if (utility.isDefinedWithContent(authUser)) {
      const folder = core.getUploadDir();
      const public_id = core.getPublicId(profilePicture);

      cloudinary.uploader.upload(
        profilePictureData,
        { public_id, folder, resource_type: "image" },
        async function(error, result) {
          console.log("result", error, result);
          const updatedUser = await photon.users.update({
            where: { id: authUser.id },
            data: {
              userType: 0,
              userMeta: {
                create: [
                  {
                    metaName: "profileImage",
                    metaValue: `${result.secure_url}`,
                  },
                  { metaName: "userArtistName", metaValue: `${artistName}` },
                  { metaName: "userBio", metaValue: `${aboutArtist}` },
                  { metaName: "userFavGenre", metaValue: `${favoriteGenre}` },
                  { metaName: "userGenderDemo", metaValue: `${gender}` },
                  { metaName: "userAgeDemo", metaValue: `${age}` },
                  { metaName: "userExplicitDemo", metaValue: `${explicit}` },
                  { metaName: "points", metaValue: `0` },
                  // TODO: add default favs and followers
                ],
              },
            },
          });

          mixpanel.track("Profile completed", {
            env: process.env.NODE_ENV,
            time: new Date(),
            data: {
              userEmail: authUser.userEmail,
            },
          });

          // try {
          //   chatkit.createUser({
          //     id: authUser.id,
          //     name: artistName,
          //     avatarURL: result.secure_url,
          //   });
          // } catch (error) {
          //   console.error("CHATKIT ERROR:", error);
          // }

          res.status(200);
          res.send({ success: true, data: {} });
          res.end();
        }
      );
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
