import express from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";

// If an error for import not defined is thrown add this line in the package.json file <// "type": "module">
// Instead of using nodemon we are using node --watch in this the upcoming tutorials <// node --watch ./src/index"
// nodemon script <// "dev": "nodemon ./src/index.js" //>

const app = express();

app.use(express.json());
app.use(cookieParser("helloworld"));
app.use(
  session({
    secret: "saqlain the dev",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  req.session.visited = true;
  res.cookie("hello", "world", { maxAge: 6000 * 60 * 2, signed: true });
  res.status(201).send({ msg: "Hello" });
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
