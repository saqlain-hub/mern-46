const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 2;

const TodoSchema = new mongoose.Schema({
  password: String,
  text: String,
  status: { type: Boolean, default: false },
});
TodoSchema.methods.checkPassword = async function (plainPassword) {
  // console.log(this.password, "this password");
  const matched = await bcrypt.compare(plainPassword, this.password); // this method takes hash and the plain password to match according to the hash
  return matched;
  // decrypt
};
TodoSchema.pre("save", async function (next) {
  // console.log("this is params", params);
  this.password = await bcrypt.hash(this.password, saltRounds);
  // next();
});

const TodoModel = mongoose.model("Todos", TodoSchema);
module.exports = TodoModel;
