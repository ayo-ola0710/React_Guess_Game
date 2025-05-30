import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      className="px-18 py-3 border-1 cursor-pointer border-white rounded-xl hover:bg-white hover:text-black hover:transition-all hover:600 hover:ease-in-out hover:scale-110"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
