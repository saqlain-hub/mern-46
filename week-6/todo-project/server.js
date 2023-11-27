const express = require("express");

const app = express();

const mongoose = require("mongoose");

app.use(express.json());

const router = express.Router();
app.use(router);

const PORT = 5000;

databaseConnection().catch((err) => console.log(err));

async function databaseConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todosdb");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const TodoSchema = new mongoose.Schema({
  todoText: {
    type: String,
  },
  todoStatus: {
    type: Boolean,
  },
});

const Todo = new mongoose.model("Todo", TodoSchema);

router.get("/", (req, res) => {
  res.json("Server Running! Go to http://localhost:5000/todos");
});

router.get("/todos", async (req, res) => {
  const lists = await Todo.find({});
  res.json(lists);
});

router.get("/todos/complete", async (req, res) => {
  const completeTodos = await Todo.find({ todoStatus: true });
  res.json(completeTodos);
});

router.get("/todos/incomplete", async (req, res) => {
  const incompleteTodos = await Todo.find({ todoStatus: false });
  res.json(incompleteTodos);
});

router.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  res.json(todo);
});

router.post("/todos", async (req, res) => {
  const newTodo = new Todo({ ...req.body });
  const insertedTodo = await newTodo.save();
  res.json(insertedTodo);
});

router.patch("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const updateTodo = await Todo.findById(id);

  if (req.body.todoText) {
    updateTodo.todoText = req.body.todoText;
    console.log(updateTodo);
  }

  await updateTodo.save();

  res.json(updateTodo);
});

router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const deleteTodo = await Todo.findOne({ _id: id });
  if (deleteTodo) {
    const deletedTodo = await Todo.deleteOne({ _id: id });
    res.json(deletedTodo);
  } else {
    res.json("no todo exists with that id");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
