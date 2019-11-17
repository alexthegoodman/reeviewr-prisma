export const resendEmailConfirmation = (req, res, mixpanel, photon) => {
  try {
    // mixpanel.track('User created', { time: new Date() });
    console.info(
      "CALL resendEmailConfirmation:",
      req.method,
      req.url,
      req.params,
      req.query
    );

    // const users = await prisma.users();

    // 1. Find user via email
    // 2. Send email confirmation

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
  }
};
