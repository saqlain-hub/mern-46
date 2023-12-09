const express = require("express");
const app = express();
let PORT = 5000;
const sendMail = require("./controllers/sendMail.js");

app.get("/", (req, res) => {
  res.json("Server is running");
});

app.get("/sendemail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server listening on port", PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
