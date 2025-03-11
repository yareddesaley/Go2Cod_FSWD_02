import React, { useContext } from "react";
import { clientsContext } from "../clientContext/ClientsContext";
import { base_url } from "../../config";
import {DataTable} from "primereact/datatable"
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartDatas, removeFromCartFun } = useContext(clientsContext);
const imageBodyTemplate = (rowData) => {
  return (
    <img
      src={`${base_url}/${rowData.imageUri}`}
      alt="Product"
      className="h-8 lg:h-12 w-auto"
    />
  );
}
const removeFromCartTemplate = (rowData) => {
  return (
    <span
                className="bg-red-500 px-4 py-1 w-16 flex justify-center rounded-lg text-white cursor-pointer hover:bg-red-700 justify-self-end"
                onClick={()=>removeFromCartFun(rowData)}
              >
                X
              </span>
  );
}
const productDetails = (rowData) => {
  return (
    <Link to={`/product/${rowData._id}`}>
    <span className="bg-green-500 px-4 py-1 text-white rounded-xl">
                Negotiate
                </span>
    </Link>
  );
}

  return (
    <div className=" text-lg w-full mb-8 font-semibold grid grid-cols-1 p-5 lg:p-10">
      {/* Header for larger screens (hidden on smaller screens) */}
      <div className="card">
            <DataTable  value={cartDatas} stripedRows tableStyle={{ minWidth: '50rem' }}>
            <Column body={imageBodyTemplate} header="Product" />
                <Column field="productName" header="Type of Product"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity" ></Column>
                <Column field="price" header=" Price"></Column>
                <Column  header=" Negotiate " body={productDetails}></Column>
                <Column  header=" remove" body={removeFromCartTemplate}></Column>


            </DataTable>
        </div>
      {/* <div className="xl:hidden grid grid-cols-5 mb-5 text-xl">
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
      </div> */}
      {/* <div className="border-2 border-gray-500 w-full mb-3"></div> */}
      {/* Cart Items */}
      {/* {cartDatas &&
        cartDatas.map((item) => (
          <div key={item._id}>
            <div className="grid grid-cols-5 gap-2 mb-3 items-center w-[90%]">
              <img
                src={`${base_url}/${item.imageUri}`}
                alt=""
                className="h-8 lg:h-12 w-auto justify-self-start"
              />

              <span className="text-center">${item.price}</span>

              <span className="text-center">{item.quantity}</span>

              <span className="text-center">
                ${item.quantity * item.price}
              </span>

              <span
                className="bg-red-500 px-4 py-1 w-16 flex justify-center rounded-lg text-white cursor-pointer hover:bg-red-700 justify-self-end"
                onClick={() => removeFromCartFun(item)}
              >
                X
              </span>
            </div>

            <hr className="border-t-2 border-gray-300 w-full mb-3" />
          </div>
        ))} */}

      {/* Proceed to Payment Button */}
      {/* <button
        className="bg-green-500 text-white px-5 py-2 text-lg hover:bg-green-700 mt-10 font-bold rounded-lg w-full sm:w-auto justify-self-center"
        onClick={() => addToCartFun(item)}
      >
        Proceed To Payment
      </button> */}
    </div>
  );
};

export default Cart;