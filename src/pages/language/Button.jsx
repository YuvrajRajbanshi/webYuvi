import React from "react";

const Button = ({ Name, logo }) => {
  return (
    <div>
      <button
        className="flex items-center justify-center gap-4 p-1 border-2 border-white bg-transparent
        rounded-lg transition duration-300 ease-in-out focus:outline-none
        hover:bg-pink-300 hover:text-gray-800 hover:border-gray-800 hover:shadow-lg "
      >
        <span>{logo}</span>
        <span className="text-gray-200 text-xl">{Name}</span>
      </button>
    </div>
  );
};

export default Button;
