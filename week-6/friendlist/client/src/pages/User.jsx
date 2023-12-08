import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import friendIcon from "../assets/friend.png";
import UserNotFound from "./UserNotFound";

const User = ({ users }) => {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    users.map((user) => {
      if (user.id == id) {
        setCurrentUser({ name: user.name, email: user.email, age: user.age });
      }
    });
  }, []);

  return (
    <>
      {currentUser.name ? (
        <div className="container lg:w-[50%] w-[60%] rounded-md mx-auto bg-white my-8 py-12 px-8 sm:px-12">
          <h2 className="mb-8 bg-gray-500 text-white rounded-md py-2 text-center text-2xl">
            Friends List
          </h2>
          <div className="overflow-hidden flex lg:flex-row flex-col items-center mx-auto gap-8 bg-green-200 rounded-md py-12 px-8">
            <div className="rounded-lg lg:w-2/4 w-[150px] py-8 bg-red-200 flex items-center justify-center">
              <img className="w-[120px]" src={friendIcon} alt="" />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-black text-2xl">{currentUser.name}</p>
              <p className="text-black">{currentUser.email}</p>
              <p className="text-black">{currentUser.age}</p>
            </div>
          </div>
        </div>
      ) : (
        <UserNotFound />
      )}
    </>
  );
};

export default User;
