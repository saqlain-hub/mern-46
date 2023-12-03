import React from "react";

const UserNotFound = () => {
  return (
    <div className="container mx-auto w-[50%] rounded-md bg-white mt-24 py-12 px-12">
      <h1 className="text-center mb-4 uppercase">404 Not Found</h1>
      <p className="text-red-500 text-3xl text-center">No user found</p>
    </div>
  );
};

export default UserNotFound;
