import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
// import { clientsContext } from "../clientContext/clientsContext";
import MenuIcon from "@mui/icons-material/Menu";
import { AnimatePresence, motion } from "framer-motion";
import { clientsContext } from "../clientContext/ClientsContext";
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const { cartDatas } = useContext(clientsContext);
  let quantity = 0;
  cartDatas.map((item) => (quantity += item.quantity));
  return (
    <div>
      <div className=" flex justify-around p-6   bg-gray-200 text-gray-600 font-semibold text-lg fixed top-0 left-0 right-0">
        <div className="font-semibold  shadow-xl shadow-white">
          Fashion Store
        </div>
        <div className="flex gap-20">
          <Link to={"/cart"}>
            <div className="relative">
              <ShoppingCartIcon />
              <div className="absolute -top-3 left-5 ">
                <span className=" bg-green-500 w-8 h-8 p-2 font-bold text-white rounded-full">
                  {quantity}
                </span>
              </div>
            </div>
          </Link>
          <div className="absolute left-5 lg:hidden">
            <MenuIcon
              className="text-gray-700 lg:hidden"
              onClick={() => setIsShow(!isShow)}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0, transition: { duration: 0.5, type: "spring" } }}
            exit={{ x: -1000, transition: { duration: 0.5, type: "spring" } }}
            className="relative h-screen w-screen p-10  -top-5  bg-gray-400"
            onClick={window.scrollTo(0, 0)}
          >
            <div className="flex flex-col gap-10 ml-5">
              <button
                className="bg-red-500 text-white rounded-lg font-bold text-xl py-2"
                onClick={() => setIsShow(!isShow)}
              >
                X
              </button>
              <Link to={"/"}>
                <button onClick={() => setIsShow(!isShow)}>Home</button>
              </Link>
              <Link to={"/men"}>
                <button onClick={() => setIsShow(!isShow)}>Men</button>
              </Link>
              <Link to={"/women"}>
                <button onClick={() => setIsShow(!isShow)}>Women</button>
              </Link>
              <Link to={"/kids"}>
                <button onClick={() => setIsShow(!isShow)}>Kids</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
