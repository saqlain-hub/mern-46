import React from "react";
import { useParams } from "react-router-dom";

const User = ({ users }) => {
  const { id } = useParams();
  users.map((user) => {
    console.log(typeof user.name);
  });
  return <div>something</div>;
};

export default User;
