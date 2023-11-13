import Input from "./components/Input";
import React from "react";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <input type="text" name="name" id="name" placeholder="name" required />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required
        />
        <p>Hello world</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
