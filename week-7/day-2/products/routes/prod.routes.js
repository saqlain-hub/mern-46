const express = require("express");
const router = express.Router();
const {
  GetProduct,
  createProduct,
  login,
} = require("../controllers/Prod.controller");
router.get("/", GetProduct);
router.post("/", createProduct);
router.post("/login", login);

module.exports = router;
