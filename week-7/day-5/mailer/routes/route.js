const express = require("express");
const router = express.Router();

const { signup, getBill } = require("../controller/appController.js");

/** HTTP Request */
router.get("/", (req, res) => {
  res.status(200).json("Server running");
});
router.post("/user/signup", signup);
router.post("/product/getBill", getBill);

module.exports = router;
