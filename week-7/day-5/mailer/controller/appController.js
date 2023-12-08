const nodemailer = require("nodemailer");

const signup = async (req, res) => {
  /** testing account */
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: testAccount.user, /// generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let message = {
    from: "Fred Foo <foo@example.com", // sender address
    to: "saqlainish@pm.me", // list of receivers
    subject: "Hello", // subject line
    text: "Hello world is it working", // plain text body
    html: "<b>Hello World?</b>", // html body
  };

  transporter.sendMail(message).then(() => {
    return res
      .status(201)
      .json({ msg: "you should receive an email" })
      .catch((err) => {
        return res.status(500).json({ err });
      });
  });

  // res.status(201).json("Signup Successful...!");
};

const getBill = (req, res) => {
  res.status(201).json("getBill Successful...!");
};

module.exports = {
  signup,
  getBill,
};
