const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
  getTodo,
  createTodo,
  loginWithIdAndPassword,
} = require("../services/Todo.service");

exports.GetTodo = catchAsyncError(async (req, res, next) => {
  throw new CustomError("not found", 404);
  const todo = await getTodo();
  res.json(todo);
});
exports.login = catchAsyncError(async (req, res, next) => {
  const { id, password } = req.body;
  const { success, message, status } = await loginWithIdAndPassword(
    id,
    password
  );
  res.status(status).json({
    success,
    message,
  });
});
exports.createTodo = async (req, res, next) => {
  const { text, password } = req.body;
  const todo = await createTodo(text, password);
  todo.checkPassword(password, todo.password);
  res.json(todo);
};
