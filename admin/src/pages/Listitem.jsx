import React, { useContext } from "react";
import { admin_context } from "../adminContext/AuthContext";

const Listitem = () => {
  const { allproducts, deleteProductFun } = useContext(admin_context);

  return (
    <div className="my-[5%] overflow-x-clip bg-gray-100  flex  justify-center ">
      <div className="w-[50%] mt-[4%] ">
        <div className="flex justify-between items-center  bg-gray-200 text-lg font-bold p-3 rounded-lg">
          <div>Product</div>
          <dir>Price</dir>
          <div>Category</div>
          <div>Remove</div>
        </div>
        {allproducts &&
          allproducts.map((item) => {
            return (
              <div key={item._id} className="">
                <div className="flex justify-between items-center py-3 ">
                  <img
                    src={item.imageUri}
                    alt="product image"
                    className="h-[10%] w-[10%] mb-[1%]"
                  />
                  <span className="w-[2%]  font-bold">${item.price}</span>
                  <span className="w-[5%] font-bold">{item.category}</span>
                  <button
                    className="bg-red-500 text-white font-bold text-lg px-5 py-1 rounded-lg"
                    onClick={() => deleteProductFun(item._id)}
                  >
                    X
                  </button>
                </div>
                <hr className="bg-gray-300 h-1 w-full" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Listitem;
