import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    showSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const logout = () => {
    navigate("/login ");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <Link to={"/"}>
        <h1 className="text-4xl font-bold">Streamix</h1>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        <CiSearch
          onClick={() => setShowSearch(!showSearch)}
          cursor={"pointer"}
          size={25}
          strokeWidth={"0.5px"}
        />
        <div className="group relative">
          <CiUser
            onClick={() => (token ? null : navigate("/login"))}
            cursor={"pointer"}
            size={23}
            strokeWidth={"0.5px"}
          />
          {token && (
            <div className="absolute group-hover:block hidden dropdown-menu right-0 pt-4">
              <div className="flex flex-col w-36 rounded gap-2 py-3 px-5 bg-slate-100 text-gray-500">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  LogOut
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to={"/cart"} className="relative">
          <IoBagOutline cursor={"pointer"} size={23} strokeWidth={"0.5px"} />
          <p className="absolute w-4 bottom-[-5px] right-[-5px] text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <BiMenuAltRight
          onClick={() => setVisible(true)}
          cursor={"pointer"}
          size={25}
          className="sm:hidden"
        />
      </div>
      <Sidebar visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Navbar;
