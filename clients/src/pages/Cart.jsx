import React, { useContext } from "react";
import { clientsContext } from "../clientContext/clientsContext";

const Cart = () => {
  const { cartDatas, removeFromCartFun } = useContext(clientsContext);

  return (
    <div className="bg-gray-200 text-lg w-full mb-14 font-semibold grid grid-cols-1 p-5 lg:p-10 ">
      <div className="xl:grid grid-cols-5 mb-5 text-xl hidden ">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total Price</div>
        <div>Remove</div>
      </div>
      <div className="xl:hidden grid-cols-5  mb-5 text-xl grid ">
        <div></div>
        <div>Price</div>
        <div>
          Quan <br />
          tity
        </div>
        <div>
          Total <br /> Price
        </div>
        <div>Remove</div>
      </div>
      <div className="border-2 border-gray-500 w-full mb-3"></div>
      {cartDatas &&
        cartDatas.map((item) => {
          return (
            <div key={item._id}>
              <div className="grid grid-cols-5 mb-3">
                <img src={item.imageUri} alt="" className="h-8 lg:h-12" />
                <span>${item.price}</span>
                <span>{item.quantity}</span>

                <span>${item.quantity * item.price}</span>
                <span
                  className="bg-red-500 px-4 py-1 w-16 flex justify-center rounded-lg text-white cursor-pointer hover:bg-red-700"
                  onClick={() => removeFromCartFun(item)}
                >
                  X
                </span>
              </div>
              <hr className="border-t-2 border-gray-300 w-full mb-3" />
            </div>
          );
        })}
      <button
        className=" bg-green-500 text-white px-5 py-1 text-lg hover:bg-green-700 mt-10  font-bold rounded-lg"
        onClick={() => addToCartFun(item)}
      >
        Proceed To Payment
      </button>
    </div>
  );
};

export default Cart;
