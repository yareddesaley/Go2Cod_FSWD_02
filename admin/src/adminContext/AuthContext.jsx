import React, { createContext, useEffect, useState } from "react";
import { base_url } from "../../config";
export const admin_context = createContext();
const AuthContext = ({ children }) => {
  const [image_uri, setImage_uri] = useState(null);
  const [products, setProducts] = useState({
    category: "",
    price: null,
    imageUri: "",
    description: "",
    productName:""
  });
  const [allproducts, setAllproducts] = useState([]);
  const [addProductError, setAddProductError] = useState(null);
  const [addProduct, setAddProduct] = useState(null);
  const [loading,setLoading]=useState(false)

  
  //a function to add a product
  const addProductFun = async (req, res) => {
    setLoading(true)
    setAddProductError('')
    const formData = new FormData();
    formData.append("imageUri", image_uri);
   formData.append("category",products.category);
   formData.append("price",products.price);
   formData.append("description",products.description)
   formData.append("productName",products.productName)
   
if(!image_uri || !products.category || !products.price || !products.description || !products.productName){
  setLoading(false)
  return setAddProductError("All fields are required")
}
    const response = await fetch(`${base_url}/addproduct`, {
      method: "POST",
      body: formData,
    });
    // if (!response.ok) {
    //   let message;
    //   if (response.message) {
    //     message = response.message;
    //     setLoading(false)
    //     return setAddProductError(message);
    //   }
    //   message = response;
    //   setLoading(false)
    //   return setAddProductError(message);
    // }
    const data = await response.json();
    setAddProduct(data);
    setLoading(false)
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
        loading,
        addProductError
      }}
    >
      {children}
    </admin_context.Provider>
  );
};

export default AuthContext;
