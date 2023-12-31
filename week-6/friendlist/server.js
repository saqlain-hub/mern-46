const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const router = express.Router();

app.use(router);

dbConn().catch((err) => console.log("Connection error", err));
async function dbConn() {
  await mongoose.connect("mongodb://127.0.0.1:27017/friendslist");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const FriendsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: Number,
  },
});

const FriendsModel = new mongoose.model("FriendModel", FriendsSchema);

router.all("/", (req, res) => {
  res.status(200).json("Server Running :)");
});

router.get("/friend", async (req, res) => {
  const friendlist = await FriendsModel.find();
  res.status(200).json(friendlist);
});

router.get("/friend/:id", async (req, res) => {
  const { id } = req.body;
  const friend = await FriendsModel.findById(id);
  res.status(200).json(friend);
});

router.post("/friend", async (req, res) => {
  const newFriend = new FriendsModel({ ...req.body });
  const insertedFriend = await newFriend.save();
  res.status(200).json(insertedFriend);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
