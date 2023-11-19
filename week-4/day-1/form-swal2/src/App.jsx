import React from "react";
import Swal from "sweetalert2";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Contact Form",
      text: "Submitted Successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-slate-600 py-[5rem] px-[4.5rem]">
      <form
        className="flex flex-col items-center gap-4 w-[640px] bg-slate-500 rounded-md px-12 py-6 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-[2rem] text-white border-b-2 border-yellow-400 pb-2 mb-8 w-[60%] text-center">
          Contact Form
        </h1>
        <p className="w-full px-[4rem]">
          <input
            className="focus:outline-none p-2 rounded-md w-full"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required
            autoComplete="off"
          />
        </p>
        <p className="w-full px-[4rem]">
          <input
            className="focus:outline-none p-2 rounded-md w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            autoComplete="off"
          />
        </p>
        <p className="w-full px-[4rem]">
          <input
            className="focus:outline-none p-2 rounded-md w-full"
            type="text"
            name="msg"
            id="msg"
            placeholder="Message"
            required
            autoComplete="off"
          />
        </p>
        <p className="w-full px-[4rem]">
          <textarea
            className="w-full h-[100px] p-2 text-[1.1rem] focus:outline-none"
            name="comments"
            id="comments"
          ></textarea>
        </p>
        <button
          className="self-start ml-[4rem] hover:bg-yellow-400 border-2 border-yellow-500 text-white py-[0.25rem] rounded-md px-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
