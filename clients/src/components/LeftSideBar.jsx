import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className="bg-gray-200 w-[20%] mt-[7%] p-4 h-screen  text-gray-600 font-semibold text-lg fixed hidden lg:flex">
      <div className="flex flex-col gap-10 ml-5">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/men"}>
          <button>Men</button>
        </Link>
        <Link to={"/women"}>
          <button>Women</button>
        </Link>
        <Link to={"/kids"}>
          <button>Kids</button>
        </Link>
      </div>
    </div>
  );
};

export default LeftSideBar;
