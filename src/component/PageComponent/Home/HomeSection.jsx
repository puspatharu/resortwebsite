
'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion'
import hero from '../../../../public/hero-bg.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function HomeSection() {
  const router=useRouter()

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.25,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

 

  return (
    <div className='pt-10 relative'>
      <motion.div
       initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      className='absolute lg:h-lvh w-full h-screen top-0 left-0 right-0 '>
      <Image src='/hero-bg.jpg' fill
          priority alt='image' className='object-cover'/>
      </motion.div>
<div className='absolute top-0 left-0 right-0 lg:h-lvh h-screen  w-full  bg-black/40'></div>

     <motion.div   
      variants={container}
        initial="hidden"
        animate="show" 
        className='relative lg:h-lvh h-screen flex items-center gap-19  flex-col justify-center z-10'>

      <div className='flex flex-col lg:w-6/12 w-9/12  items-center justify-center gap-4'>
      
      <motion.div 
      variants={item}
       className='text-white lg:text-2xl text-xl'>Away From Monotonous Life</motion.div>
      <motion.div
       variants={item}
        className='lg:text-5xl text-4xl text-white font-semibold'>Relax Your Mind</motion.div>
      <motion.div 
      variants={item}
      className='text-white text-[17px] font-semibold text-center '>If you are looking at blank cassettes on the web,you may be very confused at the diffrence in price.</motion.div>
      </div>
      <motion.div
       variants={container}
      className='flex gap-7'>
        <Link href='/contact'>
     <div
    className=' relative text-white px-6 py-3 font-semibold rounded-full  bg-amber-400 hover:bg-amber-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-amber-500/40 cursor-pointer'>Contact us</div>
        </Link>
     <Link href='/singlehome'
    className='group flex items-center gap-3 px-5.5 py-2.5 text-white font-semibold border border-white/60 rounded-full cursor-pointer  hover:bg-white hover:text-black transition-all duration-300'>
              <span>Explore More</span>
              <FaArrowRightLong
    className="transition-transform duration-300
               group-hover:translate-x-2"
  />
             </Link>
      </motion.div>
    
    </motion.div>
     </div>
  )
}

export default HomeSection