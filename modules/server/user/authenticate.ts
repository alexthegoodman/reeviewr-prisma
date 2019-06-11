import { prisma } from "../../../__generated__/prisma-client";
import Utility from "../../services/Utility";
import { ERROR_CODE } from "../../services/ERROR_CODE";

// 1. access user via email and bcrypt(password)
// 2. Check userType = 0 and userConfirmed = 1

export const authenticate = async (req, res, passport, mixpanel) => {
  passport.authenticate("local", function(error, user, info) {
    try {
      console.info(
        "CALL:",
        req.method,
        req.url,
        req.params,
        req.body,
        req.query
      );

      const utility = new Utility();

      if (error) {
        throw Error(JSON.stringify(error));
      }

      if (utility.isDefinedWithContent(user)) {
        if (user.userType === 0) {
          if (user.userConfirmed === 1) {
            if (process.env.NODE_ENV === "development") {
              res.cookie("reeviewrPrivateHash", user.privateHash, {
                domain: "localhost",
              });
            } else {
              res.cookie("reeviewrPrivateHash", user.privateHash, {
                domain: "reeviewr.com",
                secure: true,
              });
            }

            mixpanel.track("User authenticated", {
              env: process.env.NODE_ENV,
              time: new Date(),
            });

            res.status(200);
            res.send({ success: true, data: {} });
            res.end();
          } else {
            throw Error(ERROR_CODE.C007);
          }
        } else {
          throw Error(ERROR_CODE.C006);
        }
      } else {
        throw Error(ERROR_CODE.C003);
      }
    } catch (error) {
      mixpanel.track("ERROR", {
        errorMessage: error.message,
        time: new Date(),
      });
      console.error("ERROR ON:", req.method, req.url, req.params, req.query);
      console.error("ERROR DATA:", error);
      res.status(401);
      res.send({ success: false, error, errorMessage: error.message });
      res.end();
    }
  })(req, res);
};
