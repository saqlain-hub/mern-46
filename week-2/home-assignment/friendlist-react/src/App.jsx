import { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

function App() {
  console.log("app render");
  const [friends, setFriends] = useState(["Bob", "Jane"]);

  const addFriend = (e, friend) => {
    e.preventDefault();
    setFriends([...friends, friend]);
  };

  return (
    <>
      <p className="friend-list">Friends List</p>
      <AddFriend addFriend={addFriend} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
