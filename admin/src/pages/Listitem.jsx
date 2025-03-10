import React, { useContext } from "react";
import { admin_context } from "../adminContext/AuthContext";
import { base_url } from "../../config";

const Listitem = () => {
  const { allproducts, deleteProductFun } = useContext(admin_context);

  return (
    <div className=" overflow-x-clip  min-h-screen    ">
      <div className="">
        <div className="flex justify-between items-center  bg-gray-200 text-lg font-bold py-3 px-6 rounded-lg">
          <div>Product</div>
          <dir>Price</dir>
          <div>Category</div>
          <div>Remove</div>
        </div>
        {allproducts &&
          allproducts.map((item) => {
            return (
              <div key={item._id} className="">
                <div className="flex justify-between items-center py-3 h-[5%] w-full ">
                  <img
                    src={`${base_url}/${item.imageUri}`}
                    alt="product image"
                    className="h-full  mb-[1%]"
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
