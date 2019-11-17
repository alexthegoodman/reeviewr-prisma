import { ERROR_CODE } from "../../services/ERROR_CODE";
import Legacy from "../../services/Legacy";
import Utility from "../../services/Utility";
import EmailService from "../utils/email";

import * as bcrypt from "bcrypt";

// 1. Find user via forgotHash
// 2. Set new md5(password) as provided

export const resetPassword = async (req, res, mixpanel, photon) => {
  try {
    console.info(
      "CALL resetPassword:",
      req.method,
      req.url,
      req.params,
      req.body,
      req.query
    );

    const emailService = new EmailService();
    const legacy = new Legacy();
    const utility = new Utility();

    const { forgotHash, password, passwordConfirm } = req.body;

    if (utility.isDefinedWithContent(forgotHash)) {
      bcrypt.hash(password, 12, async (err, hash) => {
        if (utility.isDefinedWithContent(hash)) {
          const updatedUser = await photon.users.update({
            data: { userPassword: hash },
            where: { forgotHash },
          });

          if (utility.isDefinedWithContent(updatedUser)) {
            mixpanel.track("Reset password", {
              env: process.env.NODE_ENV,
              time: new Date(),
            });

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
