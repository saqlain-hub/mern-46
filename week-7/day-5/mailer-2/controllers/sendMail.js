const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transport = await nodemailer.createTransport({});

  res.send("Email Sent");
};

module.exports = sendMail;
