import React, { createContext, useEffect, useState } from "react";
import { base_url } from "../../config";
export const clientsContext = createContext();
const ClientsContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartDatas, setCartDatas] = useState([]);
 
 
    const allProductsFun = async () => {
      const response = await fetch(`${base_url}/allproducts`);
      const data = await response.json();
      setAllProducts(data);
    };
    useEffect(() => {
      allProductsFun();
    }, []);

  //add to cart function
  const addToCartFun = (item) => {
    setCartDatas((prevCart) => {
      const existingItem = prevCart.find(
        (previtem) => previtem._id === item._id
      );
      if (existingItem) {
        return prevCart.map((previtem) =>
          previtem._id === item._id
            ? { ...previtem, quantity: previtem.quantity + 1 }
            : previtem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  //remove from cart function
  const removeFromCartFun = (item) => {
    setCartDatas((prevCart) => {
      let existingItem = prevCart.find((previtem) => previtem._id === item._id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map((previtem) =>
            previtem._id === item._id
              ? { ...previtem, quantity: previtem.quantity - 1 }
              : previtem
          );
        } else {
          return prevCart.filter((previtem) => previtem._id !== item._id);
        }
      }

      return prevCart;
    });
  };
  return (
    <clientsContext.Provider
      value={{ allProducts, addToCartFun, cartDatas, removeFromCartFun }}
    >
      {children}
    </clientsContext.Provider>
  );
};

export default ClientsContext;
