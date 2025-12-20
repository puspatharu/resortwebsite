import React from 'react'
import { IoRestaurant,IoCarSport } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";
import { GiBeech } from "react-icons/gi";
import { FaGlassMartini,FaSwimmingPool } from "react-icons/fa";
import userimg from '../../../../public/user.jpg'
function FeatureSection() {
  const facility=[
    {
      logo:<IoRestaurant />,
      name:"restaurant",
      paragraph:"Enjoy a delightful dining experience with a wide variety of local and international cuisines, prepared by expert chefs using fresh ingredients in an elegant and comfortable setting. "
    },
      {
      logo:<FaSwimmingPool />,
      name:"swimming pool",
      paragraph:"Relax and refresh in our spacious swimming pool, designed for both leisure and fun, with comfortable loungers and a serene resort atmosphere. "
    },
      {
      logo:<FaGlassMartini />,
      name:"Bar",
      paragraph:"Unwind at our stylish bar offering a premium selection of cocktails, wines, and beverages perfect for relaxing evenings and social gatherings. "
    },
      {
      logo:<IoCarSport />,
      name:"sports club",
      paragraph:"Stay active at our fully equipped sports club featuring modern fitness facilities and recreational activities to keep you energized throughout your stay "
    },
       {
      logo:<TbMassage />,
      name:"Spa & Wellness",
      paragraph:"Rejuvenate your body and mind at our spa with relaxing therapies, massages, and wellness treatments designed to restore balance and comfort. "
    },
      {
      logo:<GiBeech />,
      name:"Private Beach Access",
      paragraph:"Enjoy exclusive access to a pristine private beach, perfect for sunbathing, seaside walks, and peaceful moments by the ocean. "
    },
  ]
  return (
    <div className='flex flex-col gap-12 lg:px-18 px-6'>
      <div className='flex items-center flex-col'>
       <div className='text-2xl font-semibold'>Royal Facilities</div> 
       <div className='text-base text-gray-400'>Who are in extremely love with eco friendly system</div>
      </div>
<div className=' gap-10  grid lg:grid-cols-3 grid-cols-1'>
  {
    facility.map((val,i)=>{
return(
      <div key={i} className=' bg-white flex flex-col gap-2   p-6 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300'>
          <div className="flex items-center gap-4 mb-4">
   
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-500 text-xl hover:bg-sky-500 hover:text-white transition-all duration-300">
          {val.logo}
        </div>

        
        <h3 className="text-xl font-semibold capitalize">
          {val.name}
        </h3>
      </div>

      <p className="text-gray-500 text-[15px] leading-relaxed">
        {val.paragraph}
      </p>
      </div>
)
    })
  }
</div>
    </div>
  )
}

export default FeatureSection