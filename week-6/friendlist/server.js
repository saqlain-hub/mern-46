const express = require("express");
const app = express();

app.use(express.json());

const router = express.Router();

app.use(router);

const PORT = 5000;

router.get("/", (req, res) => {
  res.json("Server Running");
});

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
