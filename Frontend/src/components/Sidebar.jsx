import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = ({ visible, setVisible }) => {
  return (
    <>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center p-3"
          >
            <MdOutlineKeyboardArrowLeft
              onClick={() => setVisible(false)}
              cursor={"pointer"}
              size={25}
            />
            <p className="cursor-pointer mb-0.5">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={"/collection"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
