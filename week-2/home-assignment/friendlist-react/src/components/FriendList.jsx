import { useState } from "react";

const FriendList = () => {
  let name;
  const list = ["Sam Sepiol", "Darlene", "Cisco"];
  const [friendList, setFriendList] = useState([...list]);

  const pushInput = (e) => {
    e.preventDefault();
    list.push(name);
    setFriendList([...list]);
    console.log(list);
    console.log(friendList);
  };

  return (
    <div className="wrapper">
      <h4>Enter your friend's name onto the list</h4>
      <form>
        <input
          onChange={(e) => {
            name = e.target.value;
            console.log(name);
          }}
          className="text-input"
          type="text"
          required
        />
        <button onClick={pushInput}>Add</button>
      </form>
      <h2>Friend List</h2>
      <ul>
        {friendList.map((friend) => {
          return <li key={friendList.indexOf(friend)}>{friend}</li>;
        })}
      </ul>
    </div>
  );
};

export default FriendList;
