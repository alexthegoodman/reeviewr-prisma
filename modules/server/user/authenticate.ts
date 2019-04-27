import { prisma } from "../../../__generated__/prisma-client";

export const authenticate = async (req, res, passport) => {
  try {
    // mixpanel.track('User created', { time: new Date() });
    console.info("CALL:", req.method, req.url, req.params, req.body, req.query);

    passport.authenticate("local", function(error, user, info) {
      // this will execute in any case, even if a passport strategy will find an error
      // log everything to console
      console.log(error);
      console.log(user);
      console.log(info);

      if (error) {
        res.status(401).send(error);
      } else if (!user) {
        res.status(401).send(info);
      }

      res.status(401).send(info);
    })(req, res);

    // const users = await prisma.users();

    // 1. access user via email and md5(password)
    // 2. Check userType = 0 and userConfirmed = 1

    // res.status(200);
    // res.send({ success: true, data: {} });
    // res.end();
  } catch (error) {
    // mixpanel.track('ERROR', { time: new Date() });
    console.error("ERROR ON:", req.method, req.url, req.params, req.query);
    console.error("ERROR DATA:", error);
    // res.status(400);
    // res.send({ success: false, data: {} });
    // res.end();
  }
};
