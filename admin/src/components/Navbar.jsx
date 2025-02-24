import React from "react";

const Navbar = ({ setToken }) => {
  return (
    <>
      <div className="flex items-center py-2 px-[4%] justify-between">
        <h1 className="text-4xl font-bold flex flex-col items-start">
          Streamix{" "}
          <span style={{ fontSize: "15px", fontWeight: "normal" }}>
            Admin Panel
          </span>
        </h1>
        <button
          onClick={() => setToken("")}
          className="bg-gray-600 text-white font-semibold px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
