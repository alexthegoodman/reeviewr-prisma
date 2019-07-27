import { ERROR_CODE } from "../../services/ERROR_CODE";
import Legacy from "../../services/Legacy";
import Utility from "../../services/Utility";
import EmailService from "../utils/email";

export const confirmEmail = async (req, res, mixpanel, photon) => {
  try {
    console.info(
      "CALL confirmEmail:",
      req.method,
      req.url,
      req.params,
      req.body,
      req.query
    );

    const emailService = new EmailService();
    const legacy = new Legacy();
    const utility = new Utility();

    const { confirmHash } = req.body;

    if (utility.isDefinedWithContent(confirmHash)) {
      const user = await photon.users.findOne({ where: { confirmHash } });
      if (
        utility.isDefinedWithContent(user) &&
        utility.isDefinedWithContent(user.userEmail)
      ) {
        await photon.users.update({
          where: { id: user.id },
          data: { userConfirmed: 1 },
        });

        mixpanel.track("Email Confirmed", {
          env: process.env.NODE_ENV,
          time: new Date(),
        });

        res.status(200);
        res.send({ success: true, data: {} });
        res.end();
      } else {
        throw Error(ERROR_CODE.C010);
      }
    } else {
      throw Error(ERROR_CODE.C009);
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
