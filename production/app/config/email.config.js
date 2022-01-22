const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "mkcovid19testing@gmail.com",
    pass: "Pakistan12345$",
  },
});

module.exports = transporter;
