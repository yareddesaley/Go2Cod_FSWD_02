import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { clientsContext } from "../clientContext/ClientsContext";
const LeftSideBar = () => {
    const { allProducts } = useContext(clientsContext);
    console.log("all-product--",allProducts)
    const mensArray=[]
    const womensArray=[]
    const kidsArray=[]
    allProducts?.map((item,index)=>{
      if(item.category === "men"){
mensArray.push(item)
      }else if(item.category === "women"){
        womensArray.push(item)
      }else if(item.category === "kids"){
        kidsArray.push(item)
      }else{
        return
      }
    })
  
  return (
    <div className="bg-gray-200 w-[17%] mt-[7%] p-4 h-screen  text-gray-600 font-semibold text-lg fixed hidden lg:flex">
      <div className="flex flex-col gap-10 ">
        <Link to={"/"} className="flex gap-4 hover:bg-green-500 hover:text-white px-6 py-1 ">
        <HomeIcon />
          <button>Home</button>
({allProducts?.length})
        </Link>
        <Link to={"/men"} className="flex gap-4 hover:bg-green-500 hover:text-white px-6 py-1 ">
        <CheckroomIcon />
          <button>Men</button>
          ({mensArray?.length})
        </Link>
        <Link to={"/women"} className="flex gap-4 hover:bg-green-500 hover:text-white px-6 py-1 ">
        <CheckroomIcon />
          <button>Women</button>
          ({womensArray?.length})
        </Link>
        <Link to={"/kids"} className="flex gap-4 hover:bg-green-500 hover:text-white px-6 py-1 ">
        <CheckroomIcon />
          <button>Kids</button>
          ({kidsArray?.length})
        </Link>
      </div>
    </div>
  );
};

export default LeftSideBar;
