 'use client'
 import React from 'react'
import Image from 'next/image'
import page from '../../../../public/page.jpg'
import chicken from '../../../../public/chickenfry.jpg'
import chowmien from '../../../../public/chowmien.jpg'
import fishfry from '../../../../public/fish.jpg'
import momo from '../../../../public/momos.jpg'
import pizza from '../../../../public/pizza.jpg'
import { motion } from 'framer-motion'

function MenuDetail() {
    const menu=[
    {
prize:70,
name:"chicken fry",
image:chicken
    },
     {
prize:16,
name:"momo",
image:momo
    },
    {
    prize:100,
name:"Fish fry",
image:fishfry
    },
      {
    prize:40,
name:"chicken Chowmein",
image:chowmien
    },

    {
    prize:20,
name:"pizza",
image:pizza
    },
    {
    prize:100,
name:"Fish fry",
image:fishfry
    },
  ]

  
 const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
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
    <div className='flex flex-col gap-16 lg:px-18 px-6'>
      <motion.div
       variants={container}
        initial="hidden"
         whileInView="show"
        viewport={{ once: true }}
      className='flex items-center flex-col gap-1'>
        <div className="w-18 h-[2px] bg-gray-300"></div>
<div className="w-23 h-[2px] bg-gray-300"></div>

     <motion.div
     variants={item}
          className='text-2xl font-semibold '>Main Menu</motion.div>

        </motion.div>

        <motion.div
        variants={container}
        initial="hidden"
         whileInView="show"
        viewport={{ once: true }}
        className='grid lg:grid-cols-3 gap-8 grid-cols-2 '>
  {
    menu.map((val,i)=>{
  return(
    <motion.div key={i} 
    variants={item}
    className='flex flex-col gap-4 px-6  py-5 shadow-md'>
  <div className='overflow-hidden h-full w-full'>
      <Image src={val.image} alt="image" className='transition-transform duration-500 hover:scale-110 object-cover rounded-xl h-full w-full' />
     
  </div>
      <div className=''>
      <div className='text-xl font-semibold'>{val.name}</div>
      <div className='text-[#52c5fd] '> <span className='text-xl font-semibold'>${val.prize}</span></div>
      </div>
       <button className='text-white  bg-amber-400 hover:bg-amber-500 transition duration-300 bottom-5 left-4 ease-in-out px-3 py-1.5  rounded w-fit'>Take an Order</button>
      </motion.div>
  )
    })
  }
        </motion.div>
  
      </div>
  )
}

export default MenuDetail