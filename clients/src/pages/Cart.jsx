import React, { useContext } from "react";
import { clientsContext } from "../clientContext/ClientsContext";

const Cart = () => {
  const { cartDatas, removeFromCartFun } = useContext(clientsContext);

  return (
    <div className="bg-gray-200 text-lg w-full mb-14 font-semibold grid grid-cols-1 p-5 lg:p-10">
      {/* Header for larger screens (hidden on smaller screens) */}
      <div className="hidden xl:grid grid-cols-5 mb-5 text-xl">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total Price</div>
        <div>Remove</div>
      </div>

      {/* Header for smaller screens (hidden on larger screens) */}
      <div className="xl:hidden grid grid-cols-5 mb-5 text-xl">
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

      {/* Divider */}
      <div className="border-2 border-gray-500 w-full mb-3"></div>

      {/* Cart Items */}
      {cartDatas &&
        cartDatas.map((item) => (
          <div key={item._id}>
            <div className="grid grid-cols-5 gap-4 mb-3 items-center">
              {/* Product Image */}
              <img
                src={item.imageUri}
                alt=""
                className="h-8 lg:h-12 w-auto justify-self-start"
              />

              {/* Price */}
              <span className="text-center">${item.price}</span>

              {/* Quantity */}
              <span className="text-center">{item.quantity}</span>

              {/* Total Price */}
              <span className="text-center">
                ${item.quantity * item.price}
              </span>

              {/* Remove Button */}
              <span
                className="bg-red-500 px-4 py-1 w-16 flex justify-center rounded-lg text-white cursor-pointer hover:bg-red-700 justify-self-end"
                onClick={() => removeFromCartFun(item)}
              >
                X
              </span>
            </div>

            {/* Divider between items */}
            <hr className="border-t-2 border-gray-300 w-full mb-3" />
          </div>
        ))}

      {/* Proceed to Payment Button */}
      <button
        className="bg-green-500 text-white px-5 py-2 text-lg hover:bg-green-700 mt-10 font-bold rounded-lg w-full sm:w-auto justify-self-center"
        onClick={() => addToCartFun(item)}
      >
        Proceed To Payment
      </button>
    </div>
  );
};

export default Cart;