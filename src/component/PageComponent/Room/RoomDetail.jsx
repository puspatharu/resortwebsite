import React from 'react'
import room1 from '../../../../public/room1.webp'
import room2 from '../../../../public/room2.webp'
import room3 from '../../../../public/room3.webp'
import room4 from '../../../../public/room4.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
const room=[
  {
    image:room1,
    name:"Double Deluxe Room",
    prize:150,
    adults:1,
    categories:'single',
    facilities:'closet with hangers,HD flat-screen TV, Telephone',
    size:20,
    bedtype:"double bed"
  },
   {
    image:room2,
     name:"Single Deluxe Room",
    prize:100,
     adults:1,
    categories:'single',
    facilities:'closet with hangers,HD flat-screen TV, Telephone',
    size:20,
    bedtype:"double bed"
  },
    {
    image:room3,
     name:"Honeymoon Suit",
    prize:300,
     adults:1,
    categories:'single',
    facilities:'closet with hangers,HD flat-screen TV, Telephone',
    size:20,
    bedtype:"double bed"
  },
  {
    image:room4,
     name:"Economy Double",
    prize:200,
     adults:1,
    categories:'single',
    facilities:'closet with hangers,HD flat-screen TV, Telephone',
    size:20,
    bedtype:"double bed"
  },
    {
    image:room3,
     name:"Honeymoon Suit",
    prize:300,
     adults:1,
    categories:'single',
    facilities:'closet with hangers,HD flat-screen TV, Telephone',
    size:20,
    bedtype:"double bed"
  },
    {
    image:room3,
     name:"Honeymoon Suit",
    prize:300,
     adults:1,
    categories:'single',
    facilities:'closet with hangers,HD flat-screen TV, Telephone',
    size:20,
    bedtype:"double bed"
  },
]

 const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.6,
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
function RoomDetail() {
  return (
        <div className='flex flex-col gap-16 lg:px-18 px-6 pb-20'>
          <motion.div
           variants={container}
        initial="hidden"
         whileInView="show"
        viewport={{ once: true }}
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
          whileInView='show'
           viewport={{ once: true }}
          className='grid lg:grid-cols-3 gap-9 grid-cols-1 '>
    {
      room.map((val,i)=>{
    return(
      <motion.div
       variants={item}
      key={i} className='flex flex-col gap-4 shadow-md px-6 py-6'>
    <div className='relative overflow-hidden h-full w-full'>
       <Image src={val.image} alt='image' className='transition-transform duration-500 hover:scale-110 overflow-clip h-full w-full' />
        <button className='text-white  bg-amber-400 hover:bg-amber-500 transition duration-300 bottom-5 left-4 ease-in-out px-3 py-1.5 absolute rounded'>Book Now</button>
    </div>
        <div className='flex flex-col gap-2'>
        <div className='text-xl font-semibold'>{val.name}</div>
        <div className='text-[#52c5fd] '> <span className='text-xl font-semibold'>${val.prize}</span>/night</div>
        <div className='text-[#3d3c3c]'>Adults:<span className='text-[#969696]'>{val.adults}</span></div>
        <div className='text-[#3d3c3c]'>Categories:<span className='text-[#969696]'>{val.categories}</span></div>
        <div className='text-[#3d3c3c]'>Facilities:<span className='text-[#969696]'>{val.facilities}</span></div>
        <div className='text-[#3d3c3c]'>Size:<span className='text-[#969696]'>{val.size}</span>m</div>
        <div className='text-[#3d3c3c]'>Bed Type:<span className='text-[#969696]'>{val.bedtype}</span></div>
        </div>
        </motion.div>
    )
      })
    }
          </motion.div>
    
        </div>
  )
}

export default RoomDetail