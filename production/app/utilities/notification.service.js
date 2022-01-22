const EmailSender = require("../config/email.config");

const emailSender = function (user, file) {
  return new Promise((resolve, reject) => {
    const mailObject = {
      from: "usman.nigam@gmail.com",
      to: user.email,
      subject: "Report from M K LABS, INC",
      html: "<code>This is an unattended mail box, please Do Not Reply.</code>",
      attachments: [
        {
          filename: `${file.name}.pdf`,
          path: file.path,
        },
      ],
    };
    EmailSender.sendMail(mailObject, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = emailSender;