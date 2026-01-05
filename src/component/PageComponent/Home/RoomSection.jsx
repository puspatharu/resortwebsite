'use client'
import React from 'react'
import room1 from '../../../../public/room1.webp'
import room2 from '../../../../public/room2.webp'
import room3 from '../../../../public/room3.webp'
import room4 from '../../../../public/room4.webp'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { motion } from 'framer-motion'
import Link from 'next/link'
function RoomSection() {
const room=[
  {
    image:room1,
    name:"Double Deluxe Room",
    prize:150,
    id:1
  },
   {
    image:room2,
     name:"Single Deluxe Room",
    prize:100,
    id:2
  },
    {
    image:room3,
     name:"Honeymoon Suit",
    prize:300,
    id:3
  },
  {
    image:room4,
     name:"Economy Double",
    prize:200,
    id:4
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
    whileInView='show'
    viewport={{once:true}}
      className='flex items-center flex-col'>
      <motion.div
      variants={item}
      className='text-2xl font-semibold '>Hotel Accommodation</motion.div>
      <motion.div
     variants={item}
      className='text-base text-gray-400'>We all live in an age that belongs to the young at heart.Life that is becoming extremely fast,</motion.div>
      </motion.div>

      <motion.div
      variants={container}
      initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
      className='grid lg:grid-cols-4 gap-8 grid-cols-2 '>
{
  room.map((val,i)=>{
return(
  <motion.div variants={item} key={i} className='flex flex-col gap-4'>
<div className='relative group overflow-hidden'>
    <Image src={val.image} alt="image" className='transition-transform duration-500 hover:scale-110 overflow-clip' />
    <Link href={`/singleroom/${val.id}`}>
    <button className='text-white absolute  bg-amber-400 hover:bg-amber-500 transition opacity-0 group-hover:opacity-100 duration-300 bottom-5 left-4 ease-in-out px-3 py-1.5  rounded w-fit'>Book Now</button>
    </Link>
  <div className='bg-black/30 absolute top-4 flex gap-2 right-4 px-2 py-1.5 rounded'>
    <div className='text-white text-sm'>223</div>
    <div className='text-white font-semi-bold'><CiHeart /></div>
  </div>
</div>
    <div className=''>
    <div className='text-base font-semibold'>{val.name}</div>
    <div className='text-[#52c5fd] '> <span className='text-xl font-semibold'>${val.prize}</span>/night</div>
    </div>
   
     
    </motion.div>
)
  })
}
      </motion.div>

    </div>
  )
}

export default RoomSection