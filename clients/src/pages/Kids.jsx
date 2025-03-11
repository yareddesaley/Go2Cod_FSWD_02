import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { clientsContext } from "../clientContext/ClientsContext";
import { base_url } from "../../config";
import Card from "../components/Card";
// import { base_url } from "../../config";

const Kids = (props) => {
  const { allProducts, addToCartFun } = useContext(clientsContext);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Grid layout for products */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {allProducts &&
          allProducts.map((item) => {
            if (item.category === props.category) {
              return (
                <div key={item._id} className="w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer relative w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Product Image */}
                   <Card title={item.productName} 
                                     description={item.description} 
                                     price={item.price} 
                                     imageUrl={`${base_url}/${item.imageUri}`} 
                                     category={item.category}
                                     onClick={()=>addToCartFun(item)}
                                     lnk={`/product/${item._id}`}
                                     />
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