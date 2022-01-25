const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "Moin@covid19testingcenter.info",
    pass: "Pakistan1",
  },
});

module.exports = transporter;
