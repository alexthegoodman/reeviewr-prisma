import { prisma } from "../../../__generated__/prisma-client";
import EmailService from "../utils/email";
import Legacy from "../../services/Legacy";
import Utility from "../../services/Utility";
import { ERROR_CODE } from "../../services/ERROR_CODE";

// 1. Find user via email
// 2. Send reset password email containing forgotHash

export const forgotPassword = async (req, res) => {
  try {
    // mixpanel.track('User created', { time: new Date() });
    console.info("CALL:", req.method, req.url, req.params, req.body, req.query);

    const emailService = new EmailService();
    const legacy = new Legacy();
    const utility = new Utility();

    const { email } = req.body;

    if (utility.isDefinedWithContent(email)) {
      const user = await prisma.user({ userEmail: email });
      if (
        utility.isDefinedWithContent(user) &&
        utility.isDefinedWithContent(user.userEmail)
      ) {
        const userMeta = await prisma.userMeta({ oldId: user.oldId });
        // const firstName = legacy.extractMetaValue(userMeta, "firstName");
        let buttonText = "Click to Reset";
        emailService.sendEmail(
          user.userEmail,
          user.userEmail,
          "Reset Password",
          "reset-password",
          [
            {
              name: "reset-password-btn",
              content: `<a class="btn" style="Margin:0;background:#5bc1ed;border:none;border-radius:50px;box-shadow:none;color:#fff;cursor:pointer;display:block;font-family:Helvetica Neue,Arial,sans-serif;font-size:15px;font-weight:600;height:auto;letter-spacing:.2px;line-height:18px;margin:0 auto 25px auto;max-width:360px;padding:11px 15px 12px 15px;text-align:center;text-decoration:none;text-transform:uppercase;width:80%">${buttonText}</a>
          `,
            },
          ]
        );
      } else {
        throw Error(ERROR_CODE.C001);
      }
    } else {
      throw Error(ERROR_CODE.C002);
    }

    res.status(200);
    res.send({ success: true, data: {} });
    res.end();
  } catch (error) {
    // mixpanel.track('ERROR', { time: new Date() });
    console.error("ERROR ON:", req.method, req.url, req.params, req.query);
    console.error("ERROR DATA:", error);
    res.status(401);
    res.send({ success: false, error, errorMessage: error.message });
    res.end();
  }
};
