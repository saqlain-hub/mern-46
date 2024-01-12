const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });
const members = require("./Members");
const logger = require("./middleware/logger");

const app = express();

// init middleware
// app.use(logger);

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// API
// app.get("/", (req, res) => {
// res.send("<h1>Hello World</h1>");
// res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Gets All Members
app.get("/api/members", (req, res) => res.json(members));

// Get single member
app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with id of ${req.params.id}` });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
