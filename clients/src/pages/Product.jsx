import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { clientsContext } from "../clientContext/ClientsContext";

const Product = () => {
  const { allProducts, addToCartFun } = useContext(clientsContext);
  const { userId } = useParams();
  console.log("userId", userId);
  const productInfo =
    allProducts &&
    allProducts.find((item) => {
      const data = item._id === userId;
      return data;
    });
  console.log("productInfo", productInfo);
  return (
    <div className="overflow-x-clip">
      {productInfo &&
        [productInfo].map((item) => {
          return (
            <div className="flex ml-5 lg:ml-0 flex-col lg:flex-row lg:gap-56">
              <div>
                <img
                  src={item.imageUri}
                  alt="product image"
                  className="h-96 min-w-fit"
                />
              </div>
              <div>
                <div className="my-4">
                  <p className="font-bold text-2xl text-gray-800 mt-3">
                    About The Product
                  </p>
                  <div className="mt-5">
                    <p className="font-bold text-xl text-gray-600 w-full break-words">
                      {item.description}
                    </p>
                  </div>
                </div>
                <hr className="h-1 w-full bg-gray-300" />
                <div className="my-4 flex justify-center gap-24">
                  <span className="font-bold text-2xl text-gray-600">
                    Price
                  </span>
                  <span className="font-bold text-xl text-gray-800">
                    ${item.price}
                  </span>
                </div>
                <hr className="h-1 w-full bg-gray-300" />
                <div className="my-4 flex justify-center gap-24">
                  <span className="font-bold text-2xl text-gray-600 ">
                    Category
                  </span>
                  <span className="font-bold text-xl text-gray-800">
                    {item.category}
                  </span>
                </div>
                <hr className="h-1 w-full bg-gray-300" />
                <button
                  className=" bg-green-500 text-white px-5 py-1 text-lg hover:bg-green-700 mt-10  font-bold rounded-lg"
                  onClick={() => addToCartFun(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
