'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import hero from '../../../../public/hero-bg.jpg'
function HomeSection() {
  return (
    <div className='pt-10'>
      <Image src={hero} alt='image' className='h-lvh w-full top-0 left-0 right-0 absolute object-cover'/>
<div className='absolute top-0 left-0 right-0 h-lvh w-full opacity-0 bg-black'></div>

     <div className='relative h-lvh flex items-center gap-19  flex-col justify-center z-10'>
      <div className='flex flex-col w-6/12  items-center justify-center gap-4'>
      
      <motion.div 
      initial={{opacity:0,y:-50}} animate={{opacity:1, y:0}} transition={{duration:1.5,delay:0}}
       className='text-white text-2xl'>Away From Monotonous Life</motion.div>
      <motion.div
       initial={{opacity:0,y:-50}} animate={{opacity:1, y:0}} transition={{duration:1.5,delay:0.3}}
        className='text-5xl text-white font-semibold'>Relax Your Mind</motion.div>
      <motion.div 
      initial={{opacity:0,y:-50}} animate={{opacity:1, y:0}} transition={{duration:1.5,delay:0.6}}
      className='text-white text-[17px] font-semibold text-center'>If you are looking at blank cassettes on the web,you may be very confused at the diffrence in price.</motion.div>
      </div>
     <motion.div
      initial={{opacity:0,y:-50}} animate={{opacity:1, y:0}} transition={{duration:1.5,delay:0.9}}
    className=' relative text-white px-4 py-2 font-semibold rounded  bg-amber-300 hover:bg-amber-500 transition duration-300 ease-in-out'>GET STARTED</motion.div>
    
    </div>
     </div>
  )
}

export default HomeSection