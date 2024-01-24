import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello World" });
});

app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, username: "saqlain", displayName: "saqlain" },
    { id: 2, username: "shahzad", displayName: "shahzad" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/products
