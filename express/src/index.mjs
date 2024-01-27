import express from "express";
import { query } from "express-validator";

const app = express();

app.use(express.json());

// Middleware
const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

const resolveIndexByUserId = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);
  req.findUserIndex = findUserIndex;
  next();
};

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "saqlain", displayName: "Saqlain" },
  { id: 2, username: "adil", displayName: "Adil" },
  { id: 3, username: "shahzad", displayName: "Shahzad" },
];

// GET Requests
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello World" });
});

app.get("/api/users", query("filter").isString().notEmpty(), (req, res) => {
  console.log(req);
  const {
    query: { filter, value },
  } = req;

  // when filter and value are undefined
  // if (!filter && !value) return res.send(mockUsers);

  if (filter && value)
    return res.send(mockUsers.filter((user) => user[filter].includes(value)));

  return res.send(mockUsers);
});

// POST Request
app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { body } = req;
  const newUser = {
    id: mockUsers[mockUsers.length - 1].id + 1,
    ...body,
  };
  mockUsers.push(newUser);
  return res.status(201).send(newUser);
});

app.get("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { findUserIndex } = req;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) return res.status(404).send({ msg: "User not found" });
  return res.send(findUser);
});

app.get("/api/products", (req, res) => {
  res.send([{ id: 123, name: "chicken breast", price: 240 }]);
});

// PUT request
app.put("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req;

  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return res.sendStatus(200);
});

// PATCH request
app.patch("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req;

  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return res.sendStatus(200);
});

// DELETE Request
app.delete("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { findUserIndex } = req;

  mockUsers.splice(findUserIndex, 1);

  return res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

//endpoints
// localhost:3000
// localhost:3000/users
// localhost:3000/products

//req.params
// localhost:3000/api/users/:id
// localhost:3000/api/products/:id

//queryParams
// localhost:3000/products?key=value&key2=value2

//HTTP Requests
// GET    200
// POST   201
// PUT
// PATCH
// DELETE
