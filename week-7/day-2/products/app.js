const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todo.routes");
// const prodRoutes = require("./routes/prod.routes");
const connectDatabase = require("./database/connection");
const handleError = require("./middleware/error");

connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", todoRoutes);
// app.use("/prod", prodRoutes);
app.use(handleError);

module.exports = app; // default export
