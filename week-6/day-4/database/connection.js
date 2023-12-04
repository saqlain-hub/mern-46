const mongoose = require("mongoose");

async function connectDatabase() {
  (
    await mongoose.connect("mongodb://127.0.0.1:27017/todo-list-app")
  ).isObjectIdOrHexString(() => {
    console.log("databse is connected").catch((e) => console.log(e));
  });
}

module.exports = connectDatabase;
