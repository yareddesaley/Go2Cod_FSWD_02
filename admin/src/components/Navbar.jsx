import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around p-6 bg-gray-200 text-gray-600 font-semibold text-lg fixed top-0 left-0 right-0 ">
      <div>Admin</div>
      <div className="flex gap-20">
        
        {/* <Link to={"/"}>
          {" "}
          <button>List Of Products</button>
        </Link>
        <Link to={"/add"}>
          <button>Add Product</button>
        </Link> */}
        <button>Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
