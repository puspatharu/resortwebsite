import React from 'react'
import room1 from '../../../../public/room1.webp'
import room2 from '../../../../public/room2.webp'
import room3 from '../../../../public/room3.webp'
import room4 from '../../../../public/room4.webp'
import room5 from '../../../../public/room5.webp'
import room6 from '../../../../public/room6.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTv } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaWifi, FaCar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LuCoffee } from "react-icons/lu";

const room=[
  {
    image:room1,
     imagekey:'room1',
    name:"Double Deluxe Room",
    prize:150,
    slug:"Double-Deluxe-Room",
   description:'large windows that allow natural light to fill the room. The space is complemented by air conditioning, high-speed Wi-Fi, and',
   guest:3,
    logo1:<MdPeople />,
     logo2:<FaTv />,
     logoname:'TV'
  },
   {
    image:room2,
     imagekey:'room2',
     name:"Single Deluxe Room",
     slug:'Single-Deluxe-Room',
    prize:100,
description:"large windows that allow natural light to fill the room. The space is complemented by air conditioning, high-speed Wi-Fi, and a ",
guest:2,
 logo1:<MdPeople />,
    logo2:<FaWifi />,
    logoname:'Wifi'
  },
    {
    image:room3,
     imagekey:'room3',
     name:"Honeymoon Suit",
     slug:"Honeymoon-Suit",
    prize:300,
    description:'A romantic and luxurious suite designed for couples, featuring elegant décor, a spacious layout, and a serene ambiance',
    guest:2,
    logo1:<MdPeople />,
    logo2:<FaCar />,
    logoname:'Parking'
  },
  {
    image:room4,
     imagekey:'room4',
     name:"Economy Double",
     slug:"Economy-Double",
    prize:200,
     description:'A comfortable and budget-friendly room offering essential amenities, ideal for couples or travelers seeking a cozy ',
     guest:3,
      logo1:<MdPeople />,
      logo2:<CiHeart />,
logoname:'King Bed'
  },
    {
    image:room5,
     imagekey:'room5',
     name:"Standard City Room",
     slug:"Standard-City-Room",
    prize:300,
   description:'A stylish room with modern comforts and city views, perfect for guests who want a convenient ',
   guest:4,
    logo1:<MdPeople />,
    logo2:<FaWifi />,
    logoname:'Wifi'
  },
    {
    image:room6,
     imagekey:'room6',
     name:"Premium Lake View",
     slug:"Premium-Lake-View",
    prize:300,
    description:'An elegant room with breathtaking lake views, offering a peaceful atmosphere, premium furnishings,',
    guest:2,
     logo1:<MdPeople />,
logo2:<LuCoffee />,
logoname:'Coffee Machine'
   
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
        <div className='flex flex-col gap-12 pb-12 lg:px-20 px-6 '>
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
          className='grid lg:grid-cols-3 gap-9 grid-cols-1  '>
    {
      room.map((val,i)=>{
    return(
      <motion.div
       variants={item}
      key={i} className='flex flex-col overflow-hidden gap-7 shadow-md hover:translate-y-2 transition-transform  py-6'>
    <div className='overflow-hidden lg:h-[300px] lg:w-[300px]'>
       <Image src={val.image} alt='image' className='transition-transform duration-500 hover:scale-110 overflow-clip object-cover h-full w-full' />
      
    </div>
        <div className='flex flex-col gap-4 px-4'>
        <div className='text-xl font-semibold'>{val.name}</div>

<div className='text-gray-500 text-sm'>{val.description}</div>
<div className='flex gap-5'>
<div className='items-center gap-1 flex text-gray-500 text-sm'>
   <div>{val.logo1}</div>
    <p>Up to <span>{val.guest}</span> guests</p>
    </div>
<div className='items-center gap-1 flex text-gray-500 text-sm'>
   <div>{val.logo2}</div>
    <p>{val.logoname}</p>
    </div>

</div>
<div className='flex justify-between'>

        <div className='text-[#52c5fd] '> <span className='text-xl font-semibold'>${val.prize}</span>/night</div>

         <Link href={`/room/${val.slug}`}>
        <button className='text-white  bg-amber-400 hover:bg-amber-500 transition duration-300 bottom-5 left-4 ease-in-out px-3 py-2  rounded'>View Detail</button>
       </Link>
       
</div>
       
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