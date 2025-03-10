import React, { useContext } from "react";
import { admin_context } from "../adminContext/AuthContext";

const Additem = () => {
  const {
    image_uri,
    setImage_uri,
    uploadImageFun,
    products,
    setProducts,
    addProductFun,
  } = useContext(admin_context);
  return (
    <div>
      <div className="flex flex-col gap-4  p-8 rounded-lg bg-gray-200">
        <h1 className="flex mx-auto font-semibold text-lg text-gray-700">
          Add Product To Store
        </h1>
        <div className="flex flex-col gap-2 outline-none border-none">
          <label htmlFor="category">Category</label>
          <select
            name="ctegory"
            id="category"
            className=" outline-none p-2"
            onChange={(e) =>
              setProducts({ ...products, category: e.target.value })
            }
          >
            <option value="select category"></option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 outline-none">
          <label htmlFor="description">Description</label>
          <textarea
            name="decription"
            id="description"
            className=" outline-none p-2"
            onChange={(e) =>
              setProducts({ ...products, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            className="p-2 outline-none"
            onChange={(e) =>
              setProducts({ ...products, price:Number(e.target.value) })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Select Image</label>
          <input
            type="file"
            id="image"
            name="product"
            className=" outline-none"
            onChange={(e) => {
              setImage_uri(e.target.files[0]);
            }}
          />
        </div>
        <button
          className="bg-gray-400 text-white px-4 py-3 text-lg font-bold hover:bg-gray-600 rounded-xl"
          onClick={() => addProductFun()}
        >
          Add To Store
        </button>
      </div>
    </div>
  );
};

export default Additem;
