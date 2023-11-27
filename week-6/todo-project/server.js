const express = require("express");

const app = express();

const mongoose = require("mongoose");

const router = express.Router();
app.use(router);

const PORT = 5000;

router.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
