const express = require("express");

const app = express();

const mongoose = require("mongoose");

app.use(express.json());

const router = express.Router();
app.use(router);
const PORT = 5000;

databaseConnection().catch((err) => console.log(err));

async function databaseConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todo");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const todoList = new mongoose.Schema({
  text: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

const Todo = mongoose.model("Todo", todoList);

router.get("/", async (req, res) => {
  const lists = await Todo.find({});
  res.json(lists);
});

router.post("/todos", function (req, res) {
  const todoItem = new Todo({
    text: req.body.text,
    status: req.body.status,
  });
  todoItem.save();
  res.json(req.body);
});

router.get("/taskcomplete", async (req, res) => {
  const lists = await Todo.find({ status: true });
  res.json(lists);
});

router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.updateOne({ id }, req.body);
  const updatedTodo = await Todo.findById(id);
  res.json(updatedTodo);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
