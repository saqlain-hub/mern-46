import React from "react";
import { Link } from "react-router-dom";

const ShowUsers = ({ friends, friendsFromDb, setFriendsFromDb }) => {
  const users = [
    {
      id: 1,
      name: "Saqlain Javed",
      email: "saqlain@gmail.com",
      contact: "031232434",
    },
    {
      id: 2,
      name: "Saqlain",
      email: "saqi@gmail.com",
      contact: "232434",
    },
  ];

  const getFriends = () => {
    setFriendsFromDb([...users, ...friends]);

    // fetch("http://localhost:5000/friend").then((res) => console.log(res));
  };

  const handleDelete = () => {
    console.log("delete");
  };
  const handleEdit = () => {
    console.log("edit");
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
              <li className="flex items-center gap-2" key={friend.id}>
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
