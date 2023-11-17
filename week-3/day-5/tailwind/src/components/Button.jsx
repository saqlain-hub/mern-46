import React from "react";

const Button = ({ type, color, children }) => {
  const btnColor = `btn btn-${color} hover:bg-red-500 hover:text-white`;
  return (
    <button type={type} className={btnColor}>
      {children}
    </button>
  );
};

export default Button;
