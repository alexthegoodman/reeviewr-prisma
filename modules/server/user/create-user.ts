import { prisma } from "../../../__generated__/prisma-client";
import EmailService from "../utils/email";

export const createUser = (req, res) => {
  try {
    // mixpanel.track('User created', { time: new Date() });
    console.info("CALL:", req.method, req.url, req.params, req.query);

    // Native Sign Up:
    // 1. Send email confirmation
    // 2. Create user as userConfirmed = 0, generate 4 UUIDs

    const emailService = new EmailService();

    const newUser = {};

    // const emailContent = [{
    //   name: "",
    //   content: ""
    // }];
    // emailService.sendEmail();

    res.status(200);
    res.send({ success: true, data: {} });
    res.end();
  } catch (error) {
    // mixpanel.track('ERROR', { time: new Date() });
    console.error("ERROR ON:", req.method, req.url, req.params, req.query);
    console.error("ERROR DATA:", error);
  }
};
