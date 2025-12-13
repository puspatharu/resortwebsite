import React from 'react'
import { IoRestaurant,IoCarSport } from "react-icons/io5";
import { FaGlassMartini,FaSwimmingPool } from "react-icons/fa";
function FeatureSection() {
  const facility=[
    {
      logo:<IoRestaurant />,
      name:"restaurant",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero reiciendis quas quod facilis amet nemo quasi "
    },
      {
      logo:<FaSwimmingPool />,
      name:"swimming pool",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero reiciendis quas quod facilis amet nemo quasi "
    },
      {
      logo:<FaGlassMartini />,
      name:"Bar",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero reiciendis quas quod facilis amet nemo quasi "
    },
      {
      logo:<IoCarSport />,
      name:"sports club",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero reiciendis quas quod facilis amet nemo quasi "
    },
       {
      logo:<FaGlassMartini />,
      name:"Bar",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero reiciendis quas quod facilis amet nemo quasi "
    },
      {
      logo:<FaGlassMartini />,
      name:"Bar",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero reiciendis quas quod facilis amet nemo quasi "
    },
  ]
  return (
    <div className='flex flex-col gap-12 '>
      <div className='flex items-center flex-col'>
       <div className='text-2xl font-semibold'>Royal Facilities</div> 
       <div className='text-base text-gray-400'>Who are in extremely love with eco friendly system</div>
      </div>
<div className=' gap-12  grid grid-cols-3'>
  {
    facility.map((val,i)=>{
return(
      <div key={i} className=' bg-[#eeeeee] flex flex-col gap-2   py-4 px-5 shadow-md rounded-2xl hover:shadow-red-100'>
        <div className='flex gap-6 items-center'>
        <div>{val.logo}</div>
        <div className='text-xl font-semibold'>{val.name}</div>
        </div>
        <p>{val.paragraph}</p>
      </div>
)
    })
  }
</div>
    </div>
  )
}

export default FeatureSection