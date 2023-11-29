const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

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
  res.json("Server Running :)");
});

router.get("/friend", async (req, res) => {
  friendlist = await FriendsModel.find();
  res.json(friendlist);
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
