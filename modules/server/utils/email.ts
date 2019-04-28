const mandrill = require("node-mandrill")(process.env.MANDRILL_KEY);

export default class EmailService {
  constructor() {}

  public sendEmail(
    toEmail: string,
    toName: string,
    subject: string,
    templateName: string,
    templateContent: object[]
  ) {
    try {
      return mandrill(
        "/messages/send-template",
        {
          message: {
            to: [
              {
                email: toEmail,
                type: "to",
                name: toName,
              },
            ],
            from_email: "admin@homscout.com",
            from_name: "Reeviewr",
            subject,
          },
          template_content: templateContent,
          template_name: templateName,
        },
        (err, res) => {
          if (err) {
            console.error(
              "ERROR. sendEmail ",
              toEmail,
              toName,
              subject,
              templateName,
              JSON.stringify(err)
            );
          } else {
            console.info(
              "SUCCESS. sendEmail ",
              toEmail,
              toName,
              subject,
              templateName,
              res
            );
          }
        }
      );
    } catch (error) {}
  }
}
