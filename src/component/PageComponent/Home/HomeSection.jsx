'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion'
import hero from '../../../../public/hero-bg.jpg'
function HomeSection() {
  return (
    <div className='pt-10'>
      <Image src={hero} alt='image' className='h-lvh w-full top-0 left-0 right-0 absolute object-cover'/>
<div className='absolute top-0 left-0 right-0 h-lvh w-full opacity-0 bg-black'></div>

     <div className='relative h-lvh flex items-center gap-19  flex-col justify-center z-10'>
      <div className='flex flex-col lg:w-6/12 w-9/12  items-center justify-center gap-4'>
      
      <div 
       className='text-white lg:text-2xl text-xl'>Away From Monotonous Life</div>
      <div
       
        className='lg:text-5xl text-4xl text-white font-semibold'>Relax Your Mind</div>
      <div 
      className='text-white text-[17px] font-semibold text-center '>If you are looking at blank cassettes on the web,you may be very confused at the diffrence in price.</div>
      </div>
      <div className='flex gap-7'>
     <div
    className=' relative text-white px-6 py-3 font-semibold rounded-full  bg-amber-400 hover:bg-amber-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-amber-500/40 cursor-pointer'>GET STARTED</div>
     <div
    className='group flex items-center gap-3 px-5.5 py-2.5 text-white font-semibold border border-white/60 rounded-full cursor-pointer  hover:bg-white hover:text-black transition-all duration-300'>
              <span>Explore More</span>
              <FaArrowRightLong
    className="transition-transform duration-300
               group-hover:translate-x-2"
  />
             </div>
      </div>
    
    </div>
     </div>
  )
}

export default HomeSection