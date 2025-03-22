import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="w-64 text-xl text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">
        {children}
      </button>
    </div>
  );
};

export default Button;
