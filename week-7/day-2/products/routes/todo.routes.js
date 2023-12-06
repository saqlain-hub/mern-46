const express = require("express");
const router = express.Router();
const {
  GetTodo,
  createTodo,
  login,
} = require("../controllers/Todo.controller");
router.get("/", GetTodo);
router.post("/", createTodo);
router.post("/login", login);

module.exports = router;
