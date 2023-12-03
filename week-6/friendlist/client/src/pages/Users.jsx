import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { name: "Saqlain", email: "saqlain@gmail.com", age: "20" },
    { name: "Saqlain", email: "saqlain@gmail.com", age: "20" },
  ]);
  return (
    <div className="container rounded-md mx-auto bg-white mt-24 py-12 px-12">
      <h2 className="mb-8 bg-gray-500 text-white rounded-md py-2 text-center text-2xl">
        Friends List
      </h2>
      <button className="bg-green-600 hover:bg-green-700 text-white">
        Add User
      </button>
      <ul className=" mt-4">
        {users.map((user) => {
          return (
            <li className="border-2 cursor-pointer hover:bg-gray-100 mb-2 p-4 border-gray-300 flex items-center justify-between">
              <div>
                {user.name} - {user.email} - {user.age}
              </div>
              <div>
                <button className="mr-2 bg-gray-600 hover:bg-gray-700 text-white">
                  edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white">
                  delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
