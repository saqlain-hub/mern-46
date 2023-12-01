import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const ShowUsers = ({
  friendsFromDb,
  setFriendsFromDb,
  setNameInput,
  setEmailInput,
  setContactInput,
  setFriendId,
}) => {
  const handleLiClick = (name, email, contact, id) => {
    setNameInput(name);
    setEmailInput(email);
    setContactInput(contact);
    setFriendId(id);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/friend")
      .then((res) => setFriendsFromDb(res.data));
  }, []);

  const getFriends = () => {
    axios
      .get("http://localhost:5000/friend")
      .then((res) => setFriendsFromDb(res.data));
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <>
      <button onClick={getFriends} className="bg-gray-300 hover:bg-gray-400">
        Get Friends List
      </button>

      <ul className="flex flex-col rounded-md mt-4 w-full">
        <h3 className="py-2 border-b-2 text-white text-center bg-gray-800 rounded-md">
          Friends List
        </h3>
        {friendsFromDb.map((friend) => {
          return (
            (friend.name || friend.email) && (
              <li
                onClick={() =>
                  handleLiClick(
                    friend.name,
                    friend.email,
                    friend.contact,
                    friend._id
                  )
                }
                className="flex items-center gap-2"
                key={friend._id}
              >
                <div className="flex-1 text-white border-2 border-gray-300 py-4">
                  <p>Name: {friend.name}</p>
                  <p>email: {friend.email}</p>
                  <p>contact: +92-{friend.contact}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleDelete}
                    className="deleteBtn border-2 text-white"
                  >
                    x
                  </button>
                  <Link to="/edit" className="editBtn border-2 text-white">
                    edit
                  </Link>
                </div>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export default ShowUsers;
