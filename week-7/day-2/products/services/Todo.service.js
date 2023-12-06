const TodoModel = require("../models/Todo.model");
// export 1. way 1 :: adding export with functions
const createTodo = async (text, password) => {
  return await TodoModel.create({ text, password });
};

const loginWithIdAndPassword = async (id, password) => {
  const user = await TodoModel.findById(id);
  if (user) {
    const matched = await user.checkPassword(password);
    // console.log(user.password); // hash
    if (matched) {
      return {
        success: true,
        message: "User Found and Password Matched",
        status: 200,
      };
    }
    return {
      success: false,
      message: "User Found but password is incorrect",
      status: 400,
    };
  } else return { success: false, message: "User not Found", status: 404 };
};
const getTodo = async () => {
  return await TodoModel.find();
};

module.exports = {
  loginWithIdAndPassword,
  createTodo,
  getTodo,
};
