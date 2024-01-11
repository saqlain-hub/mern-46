const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
