import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function Card({title,description,category,price,imageUrl,onClick,negotiateClick,lnk}) {
  return (
    <div className='p-3 grid grid-cols-2 gap-10'>
    <img src={imageUrl} alt={title} className='object-cover h-64 w-full '/>
  
  <section className='mt-4 '>
   <div className='grid grid-cols-2 gap-48'>
   <h2>Category : <span className='font-bold mt-4'>{category}</span></h2>
   <ShoppingCartIcon className='text-green-500 text-2xl' onClick={onClick}/>
   </div>
   <Link to={lnk}>
    <h2>Product Name : <span className='font-bold mt-4'>{title}</span></h2>
    <h1>Price : <span className='font-bold mt-4'>$ {price}</span></h1>
   <p>
   {
        description.length >70 ?description.substring(0,70)+ "...":description
    }
   </p>
   </Link>
   
   <button className='border border-2 border-gray-300 rounded-lg px-4 py-1 my-3 hover:bg-gray-400 hover:text-white' onClick={negotiateClick}>Negotiate</button>
    </section>
  
  
    </div>
  )
}
