import bcrypt from "bcrypt";
import { ERROR_CODE } from "../../services/ERROR_CODE";
import Utility from "../../services/Utility";
import EmailService from "../utils/email";
const uuid = require("uuid");
import Core from "../../services/Core";

const Mailchimp = require("mailchimp-api-v3");
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

export const createUser = async (req, res, mixpanel, photon) => {
  try {
    console.info(
      "CALL createUser:",
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

    const { email, password, confirmPassword } = req.body;

    photon.users
      .findOne({
        where: { userEmail: email },
      })
      .then(data => {
        console.info("UNINTENDED PHOTON DATA", data);
        throw Error(ERROR_CODE.C008);
      })
      .catch(err => {
        console.error("INTENDED PHOTON ERROR", err.message);
        // if (
        //   err.message ===
        //   "Error in Photon: \nConnectorError(RecordDoesNotExist)"
        // ) {
        bcrypt.hash(password, 12, async (err, hash) => {
          if (utility.isDefinedWithContent(hash)) {
            const privateHash = uuid.v4();
            const newUser = await photon.users.create({
              data: {
                userEmail: email,
                userPassword: hash,
                userConfirmed: 0,
                userType: 1, // yet to complete profile
                forgotHash: uuid.v4(),
                confirmHash: uuid.v4(),
                publicHash: uuid.v4(),
                privateHash,
                userDeleted: false,
              },
            });

            console.info("new user", newUser);

            const buttonText = "Confirm Email";

            // TODO: send client-side error if email fails to send
            const host = req.get("host");
            const confirmEmailUrl =
              req.protocol +
              "://" +
              host +
              "/confirm-email?confirmHash=" +
              newUser.confirmHash;

            emailService.sendEmail(
              newUser.userEmail,
              newUser.userEmail,
              "Confirm Email",
              "confirm-email",
              [
                {
                  name: "confirm-email-btn",
                  content: `<a href="${confirmEmailUrl}" class="btn" style="Margin:0;background:#5bc1ed;border:none;border-radius:50px;box-shadow:none;color:#fff;cursor:pointer;display:block;font-family:Helvetica Neue,Arial,sans-serif;font-size:15px;font-weight:600;height:auto;letter-spacing:.2px;line-height:18px;margin:0 auto 25px auto;max-width:360px;padding:11px 15px 12px 15px;text-align:center;text-decoration:none;text-transform:uppercase;width:80%">${buttonText}</a>`,
                },
              ]
            );

            try {
              mailchimp.post("/lists/a4be7a94c5/members", {
                email_address: email,
                status: "subscribed",
              });
            } catch (error) {
              console.error("MAILCHIMP ERROR:", error);
            }

            mixpanel.track("User created", {
              env: process.env.NODE_ENV,
              time: new Date(),
              data: {
                userEmail: email,
              },
            });

            // TODO: cookie on server
            if (process.env.NODE_ENV === "development") {
              res.cookie("reeviewrPrivateHash", privateHash, {
                domain: "localhost",
              });
            } else {
              res.cookie("reeviewrPrivateHash", privateHash, {
                domain: host,
                secure: true,
              });
            }

            res.status(200);
            res.send({ success: true, data: { privateHash } });
            res.end();
          } else {
            throw Error(ERROR_CODE.C005);
          }
        });
        // } else {
        //   throw new Error(err);
        // }
      });
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
