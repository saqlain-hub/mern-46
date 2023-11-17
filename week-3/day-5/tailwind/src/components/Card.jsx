import React from "react";

const Card = ({ browserIcon }) => {
  return (
    <div className=" flex flex-col rounded-md shadow-md">
      <div className="p-6 flex flex-col items-center">
        <img src={browserIcon} alt="browser icon" />
        <h3 className="mt-5 mb-2 text-bk-blue text-lg">Add to Opera</h3>
        <p className="mb-2 text-bk-grey font-light">Minimum Version 62</p>
      </div>
      <hr className="border-2 border-bk-white" />
      <div className="flex p-6">
        <button
          type="button"
          className="flex-1 btn btn-purple hover:bg-red-500 hover:text-white"
        >
          Add & Install Extension
        </button>
      </div>
    </div>
  );
};

export default Card;
