import React, { createContext, useEffect, useState } from "react";
export const admin_context = createContext();
const AuthContext = ({ children }) => {
  const [image_uri, setImage_uri] = useState(null);
  const [products, setProducts] = useState({
    category: "",
    price: "",
    imageUri: "",
    description: "",
  });
  const [allproducts, setAllproducts] = useState(null);
  const [addProductError, setAddProductError] = useState(null);
  const [addProduct, setAddProduct] = useState(null);
 const base_url="https://store-backend-1oan.onrender.com"
  //a function to add a product
  const addProductFun = async (req, res) => {
    const formData = new FormData();
    formData.append("product", image_uri);
    const imageRespo = await fetch(`${base_url}/upload`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formData,
    });
    const imagedata = await imageRespo.json();
    const newProduct = {
      ...products,
      imageUri: imagedata.image_url,
    };

    const response = await fetch(`${base_url}/addproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
      let message;
      if (response.message) {
        message = response.message;
        return setAddProductError(message);
      }
      message = response;
      return setAddProductError(message);
    }
    const data = await response.json();
    setAddProduct(data);
    alert("Added The Product Succesfully");
  };
  //all products
  const allProductsFun = async () => {
    const response = await fetch(`${base_url}/allproducts`);
    const data = await response.json();
    setAllproducts(data);
  };
  useEffect(() => {
    allProductsFun();
  }, []);
  //delete a product
  const deleteProductFun = async (id) => {
    const response = await fetch(`${base_url}/deleteProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    alert("Deleted successfuly");
    await allProductsFun();
  };
  console.log("add-products", addProduct);
  console.log("product-error", addProductError);
  console.log("allproducts", allproducts);
  return (
    <admin_context.Provider
      value={{
        image_uri,
        setImage_uri,
        products,
        setProducts,
        addProductFun,
        allproducts,
        deleteProductFun,
      }}
    >
      {children}
    </admin_context.Provider>
  );
};

export default AuthContext;
