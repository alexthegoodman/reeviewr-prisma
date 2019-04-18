import { prisma } from "../../../__generated__/prisma-client";

export const resendEmailConfirmation = (req, res) => {
  try {
    // mixpanel.track('User created', { time: new Date() });
    console.info("CALL:", req.method, req.url, req.params, req.query);

    // const users = await prisma.users();

    // 1. Find user via email
    // 2. Send email confirmation

    res.status(200);
    res.send({ success: true, data: {} });
    res.end();
  } catch (error) {
    // mixpanel.track('ERROR', { time: new Date() });
    console.error("ERROR ON:", req.method, req.url, req.params, req.query);
    console.error("ERROR DATA:", error);
  }
};
