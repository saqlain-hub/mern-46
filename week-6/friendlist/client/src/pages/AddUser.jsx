import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = ({ users, setUsers }) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const navigate = useNavigate();

  function handleCancel() {
    navigate("/");
  }

  function handleReset() {
    setNameInput("");
    setEmailInput("");
    setAgeInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      id: Math.floor(Math.random() * 1000 + 1),
      name: nameInput,
      email: emailInput,
      age: ageInput,
    };
    setUsers([...users, user]);

    setNameInput("");
    setEmailInput("");
    setAgeInput("");
    navigate("/");
  }

  return (
    <div className="container w-[85%] rounded-md mx-auto bg-gray-500 my-20 overflow-hidden py-12 px-12">
      <h2 className="mb-8 bg-indigo-400 text-white rounded-md py-2 text-center text-2xl">
        Add Friend to the List
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
        <input
          onClick={handleCancel}
          className="p-2 cursor-pointer ml-2 bg-red-500 hover:bg-red-600 text-white"
          type="button"
          value="Cancel"
        />
      </form>
    </div>
  );
};

export default AddUser;
