import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { clientsContext } from "../clientContext/ClientsContext";

const Kids = (props) => {
  const { allProducts, addToCartFun } = useContext(clientsContext);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Grid layout for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {allProducts &&
          allProducts.map((item) => {
            if (item.category === props.category) {
              return (
                <div key={item._id} className="w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Product Image */}
                    <Link to={`/product/${item._id}`}>
                      <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64">
                        <img
                          src={item.imageUri}
                          alt="product image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>

                    {/* Add to Cart Button */}
                    <button
                      className="bg-green-500 absolute bottom-4 left-4 text-white px-3 py-1 sm:px-4 sm:py-2 hover:bg-green-700 font-semibold rounded-lg transition-colors duration-300"
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