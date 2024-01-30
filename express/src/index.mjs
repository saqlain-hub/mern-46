import express from "express";
import routes from "./routes/index.mjs";
const app = express();

app.use(express.json());
app.use(routes);

// Middleware
const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

const PORT = process.env.PORT || 3000;

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
