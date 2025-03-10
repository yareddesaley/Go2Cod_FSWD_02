import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { clientsContext } from "../clientContext/ClientsContext";
import { base_url } from "../../config";

const Home = () => {
  const { allProducts, addToCartFun } = useContext(clientsContext);
  return (
    <div className="p-4 sm:p-6 lg:p-8 ">
      {/* Grid layout for products */}
      <div className="grid grid-cols-1 w-full md:grid-cols-3 lg:grid-cols-4  gap-4 sm:gap-6 lg:gap-8">
        {allProducts &&
          allProducts.map((item) => (
            <div key={item._id} className="w-full">
              <AnimatePresence>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  exit={{
                    y: 1000,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  className="cursor-pointer w-full relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <Link to={`/product/${item._id}`}>
                    <div className="h-48 sm:h-56 md:h-60 lg:h-64 w-full flex justify-center ">
                      <img
                        src={`${base_url}/${item.imageUri}`}
                        alt="product image"
                        className="h-full w-full object-cover"
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
              </AnimatePresence>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;