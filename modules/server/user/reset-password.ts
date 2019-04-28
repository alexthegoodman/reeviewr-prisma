import { prisma } from "../../../__generated__/prisma-client";
import EmailService from "../utils/email";
import Legacy from "../../services/Legacy";
import Utility from "../../services/Utility";
import { ERROR_CODE } from "../../services/ERROR_CODE";

import * as bcrypt from "bcrypt";

// 1. Find user via forgotHash
// 2. Set new md5(password) as provided

export const resetPassword = async (req, res) => {
  try {
    // mixpanel.track('User created', { time: new Date() });
    console.info("CALL:", req.method, req.url, req.params, req.body, req.query);

    const emailService = new EmailService();
    const legacy = new Legacy();
    const utility = new Utility();

    const { forgotHash, password, passwordConfirm } = req.body;

    if (utility.isDefinedWithContent(forgotHash)) {
      bcrypt.hash(password, 12, async (err, hash) => {
        if (utility.isDefinedWithContent(hash)) {
          const updatedUser = await prisma.updateUser({
            data: { userPassword: hash },
            where: { forgotHash },
          });

          if (utility.isDefinedWithContent(updatedUser)) {
            res.status(200);
            res.send({ success: true, data: {} });
            res.end();
          } else {
            throw Error(ERROR_CODE.C004);
          }
        } else {
          throw Error(ERROR_CODE.C005);
        }
      });
    } else {
      throw Error(ERROR_CODE.C003);
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
