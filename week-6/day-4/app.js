const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Server Running");
});

module.exports = app;
