import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "saqlain", displayName: "saqlain" },
  { id: 2, username: "shahzad", displayName: "shahzad" },
];

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello World" });
});

app.get("/api/users", (req, res) => {
  res.send(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  console.log(parsedId);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "bad request" });
  }
  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) return res.status(404).send({ msg: "User not found" });
  return res.send(findUser);
});

app.get("/api/products", (req, res) => {
  res.send([{ id: 123, name: "chicken breast", price: 240 }]);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/products
