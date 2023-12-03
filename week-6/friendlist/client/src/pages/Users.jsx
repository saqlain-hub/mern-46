import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Users = ({ users }) => {
  const navigate = useNavigate();
  function handleLiClick(id) {
    navigate(`/user/${id}`);
  }
  return (
    <div className="container rounded-md mx-auto bg-white mt-24 py-12 px-12">
      <h2 className="mb-8 bg-gray-500 text-white rounded-md py-2 text-center text-2xl">
        Friends List
      </h2>
      <Link
        to="/addUser"
        className="p-2 rounded-md bg-green-600 hover:bg-green-700 text-white"
      >
        Add User
      </Link>
      <ul className=" mt-4">
        {users.map((user) => {
          return (
            <div
              className="border-2 cursor-pointer hover:bg-gray-100 mb-2  border-gray-300"
              key={user.id}
            >
              <li className="flex items-center justify-between p-4">
                <div
                  onClick={() => handleLiClick(user.id)}
                  className="flex-1  "
                >
                  {user.name} - {user.email} - {user.age}
                </div>
                <div>
                  <Link
                    to={`/update/${user.id}`}
                    className="p-2 rounded-md mr-2 bg-gray-600 hover:bg-gray-700 text-white"
                  >
                    edit
                  </Link>
                  <Link
                    to={`/delete/${user.id}`}
                    className="p-2 rounded-md bg-red-500 hover:bg-red-600 text-white"
                  >
                    delete
                  </Link>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
