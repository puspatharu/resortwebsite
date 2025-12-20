import React from 'react'
import cookies from '../../../../public/cookies.jpg'
import cupcake from '../../../../public/cupcake.jpg'
import juice from '../../../../public/juice.jpg'
import cake from '../../../../public/cake.jpg'
import stw from '../../../../public/stw.jpg'
import Image from 'next/image'
function DessertDetail() {
   const menu=[
      {
  prize:70,
  name:"Cookies",
  image:cookies
      },
       {
  prize:16,
  name:"Cupcake",
  image:cupcake
      },
      {
      prize:100,
  name:"Juice",
  image:juice
      },
        {
      prize:40,
  name:"Cake",
  image:cake
      },
  
      {
      prize:20,
  name:"Strawberry",
  image:stw
      },
      
    ]
  return (
     <div className='flex flex-col gap-9 lg:px-18 px-6'>
         <div className='flex items-center flex-col gap-1'>
           <div className="w-18 h-[2px] bg-gray-300"></div>
   <div className="w-23 h-[2px] bg-gray-300"></div>
   
        <div
             className='text-2xl font-semibold '>Dessert</div>
   
           </div>
   
           <div
           
           className='grid lg:grid-cols-3 gap-8 grid-cols-2 '>
     {
       menu.map((val,i)=>{
     return(
       <div key={i} className='flex flex-col gap-4 px-6 py-5 shadow-md'>
     <div className='overflow-hidden h-full  w-full'>
        <Image src={val.image} alt='image' className='transition-transform duration-500 hover:scale-110 object-cover rounded-xl h-full w-full' />
     </div>
         <div className=''>
         <div className='text-xl font-semibold'>{val.name}</div>
         <div className='text-[#52c5fd] '> <span className='text-xl font-semibold'>${val.prize}</span></div>
         </div>
          <button className='text-white  bg-amber-400 hover:bg-amber-500 transition duration-300 bottom-5 left-4 ease-in-out px-3 py-1.5  rounded w-fit'>Take an Order</button>
         </div>
     )
       })
     }
           </div>
     
         </div>
  )
}

export default DessertDetail