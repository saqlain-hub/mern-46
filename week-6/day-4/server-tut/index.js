const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });
const logger = require("./middleware/logger");

const app = express();

// init middleware
// app.use(logger);

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Members Api Route
app.use("/api/members", require("./routes/api/members"));

// API
// app.get("/", (req, res) => {
// res.send("<h1>Hello World</h1>");
// res.sendFile(path.join(__dirname, "public", "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
