import React, { useContext } from "react";
import { clientsContext } from "../clientContext/clientsContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Kids = (props) => {
  const { allProducts, addToCartFun } = useContext(clientsContext);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
        {allProducts &&
          allProducts.map((item) => {
            if (item.category === props.category) {
              return (
                <div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className=" cursor-pointer relative"
                  >
                    <Link to={`/product/${item._id}`}>
                      <img
                        src={item.imageUri}
                        alt="product image"
                        className=""
                      />
                    </Link>
                    <button
                      className=" bg-green-500 text-white px-3 py-1 ml-5 hover:bg-green-700 top-[85%] lg:top-72 absolute  font-semibold rounded-lg"
                      onClick={() => addToCartFun(item)}
                    >
                      Add To Cart
                    </button>
                  </motion.div>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default Kids;
