import bcrypt from "bcrypt";
import { prisma } from "../../../__generated__/prisma-client";
import { ERROR_CODE } from "../../services/ERROR_CODE";
import Utility from "../../services/Utility";
import EmailService from "../utils/email";
const uuid = require("uuid");
const cloudinary = require("cloudinary").v2;
import Core from "../../services/Core";

const Mailchimp = require("mailchimp-api-v3");

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const mailchimpSubscribe = async (req, res, mixpanel) => {
  try {
    console.info(
      "CALL mailchimpSubscribe:",
      req.method,
      req.url,
      req.params,
      req.query
    );

    const { email, question } = req.body;

    try {
      mailchimp.post("/lists/a4be7a94c5/members", {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          MMERGE3: question,
        },
      });
    } catch (error) {
      console.error("MAILCHIMP ERROR:", error);
    }

    mixpanel.track("Mailchimp subscribe", {
      env: process.env.NODE_ENV,
      time: new Date(),
      data: {
        userEmail: email,
        question,
      },
    });

    res.status(200);
    res.send({ success: true, data: {} });
    res.end();
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
