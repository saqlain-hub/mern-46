import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = ({ users, setUsers }) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    users.map((user) => {
      if (user.id == id) {
        console.log(id);
        setNameInput(user.name);
        setEmailInput(user.email);
        setAgeInput(user.age);
      }
    });
  }, []);

  function handleSubmit() {
    console.log("submit update user");
  }

  function handleReset() {
    console.log("reset update user");
  }

  return (
    <div className="container rounded-md mx-auto bg-gray-500 mt-24 py-12 px-12">
      <h2 className="mb-8 bg-indigo-400 text-white rounded-md py-2 text-center text-2xl">
        Update Friend's Details
      </h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4">
          <label htmlFor="name">Enter Name</label>
          <input
            onChange={(e) => setNameInput(e.target.value)}
            className="py-2 px-[0.8rem]"
            type="text"
            name="name"
            id="name"
            value={nameInput}
            placeholder="Some One"
            required
            autoComplete="off"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="email">Enter Email</label>
          <input
            onChange={(e) => setEmailInput(e.target.value)}
            className="py-2 px-[0.8rem]"
            type="email"
            name="email"
            id="email"
            value={emailInput}
            placeholder="Someone@gmail.com"
            required
            autoComplete="off"
          />
        </p>
        <p className="mb-8">
          <label htmlFor="contact">Enter Age</label>
          <input
            onChange={(e) => setAgeInput(e.target.value)}
            className="py-2 px-[0.8rem]"
            type="number"
            name="contact"
            id="contact"
            value={ageInput}
            placeholder="Enter age a non-negative number 10 - 20"
            required
            autoComplete="off"
            min={1}
            max={100}
          />
        </p>
        <input
          className="p-2 hover:bg-green-700 cursor-pointer bg-green-600 text-white"
          type="submit"
          value="Submit"
        />
        <input
          onClick={handleReset}
          className="p-2 cursor-pointer ml-2 bg-red-500 hover:bg-red-600 text-white"
          type="reset"
          value="Reset"
        />
      </form>
    </div>
  );
};

export default UpdateUser;
