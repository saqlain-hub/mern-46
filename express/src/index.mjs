import express from "express";

const app = express();

app.use(express.json());

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

app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;

  // when filter and value are undefined
  // if (!filter && !value) return res.send(mockUsers);

  if (filter && value)
    return res.send(mockUsers.filter((user) => user[filter].includes(value)));

  return res.send(mockUsers);
});

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

//endpoints
// localhost:3000
// localhost:3000/users
// localhost:3000/products

//req.params
// localhost:3000/api/users/:id
// localhost:3000/api/products/:id

//queryParams
// localhost:3000/products?key=value&key2=value2