import { prisma } from "../../../__generated__/prisma-client";
import EmailService from "../utils/email";
import bcrypt from "bcrypt";
import { ERROR_CODE } from "../../services/ERROR_CODE";
import Utility from "../../services/Utility";

export const createUser = async (req, res) => {
  try {
    // mixpanel.track('User created', { time: new Date() });
    console.info("CALL:", req.method, req.url, req.params, req.query, req.body);

    // Native Sign Up:
    // 1. Send email confirmation
    // 2. Create user as userConfirmed = 0, generate 4 UUIDs

    const utility = new Utility();
    const emailService = new EmailService();

    const {
      email,
      password,
      confirmPassword,
      artistName,
      aboutArtist,
      profilePicture,
      favoriteGenre,
      gender,
      age,
      explicit,
    } = req.body;
    bcrypt.hash(password, 12, async (err, hash) => {
      if (utility.isDefinedWithContent(hash)) {
        let newUser = await prisma.createUser({
          userEmail: email,
          userPassword: hash,
          userMeta: {
            create: [
              { metaName: "userArtistName", metaValue: artistName },
              { metaName: "userBio", metaValue: aboutArtist },
              { metaName: "userFavGenre", metaValue: favoriteGenre },
              { metaName: "userGenderDemo", metaValue: gender },
              { metaName: "userAgeDemo", metaValue: age },
              { metaName: "UserExplicitDemo", metaValue: explicit },
            ],
          },
          userConfirmed: 0,
          userType: 0,
          userDeleted: false,
        });

        // const emailContent = [{
        //   name: "",
        //   content: ""
        // }];
        // emailService.sendEmail();

        res.status(200);
        res.send({ success: true, data: {} });
        res.end();
      } else {
        throw Error(ERROR_CODE.C005);
      }
    });
  } catch (error) {
    // mixpanel.track('ERROR', { time: new Date() });
    console.error("ERROR ON:", req.method, req.url, req.params, req.query);
    console.error("ERROR DATA:", error);
  }
};
