import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Saqlain", email: "saqlain@gmail.com", age: "20" },
    { id: 2, name: "Saqi", email: "saqi@gmail.com", age: "23" },
  ]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Users users={users} setUsers={setUsers} />} />
        <Route path="/user/:id" element={<User users={users} />} />
        <Route
          path="/addUser"
          element={<AddUser users={users} setUsers={setUsers} />}
        />
        <Route path="/update/:id" element={<UpdateUser users={users} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
