import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
function BannerReuse({title,image}) {
  return (
    <div className='relative'>
        <Image alt='' src={image} className='absolute left-0 top-0 lg:h-80  w-full object-cover object-left-top' />
        <div className='bg-[#020512]  w-full left-0 top-0'></div>
        <div className='text-white z-10 relative flex flex-col gap-3 justify-center pt-24 items-center h-80'>
         <div className='text-4xl font-bold'>{title}</div>
         <div className='flex gap-4 items-center text-xl'>
         <div>Home</div>
         <div className='text-[15px]'>
           <FaArrowRightLong />
         </div>
         <div>
          {title}
         </div>
         </div>
        </div>
       </div>
  )
}

export default BannerReuse