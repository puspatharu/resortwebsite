
import React from 'react'
import room1 from '../../../../public/room1.webp'
import room2 from '../../../../public/room2.webp'
import room3 from '../../../../public/room3.webp'
import room4 from '../../../../public/room4.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
function RoomSection() {
const room=[
  {
    image:room1,
    name:"Double Deluxe Room",
    prize:150
  },
   {
    image:room2,
     name:"Single Deluxe Room",
    prize:100
  },
    {
    image:room3,
     name:"Honeymoon Suit",
    prize:300
  },
  {
    image:room4,
     name:"Economy Double",
    prize:200
  },
]

  return (
    <div className='flex flex-col gap-16 lg:px-18 px-6'>
      <div className='flex items-center flex-col'>
      <div
      className='text-2xl font-semibold '>Hotel Accommodation</div>
      <div
     
      className='text-base text-gray-400'>We all live in an age that belongs to the young at heart.Life that is becoming extremely fast,</div>
      </div>

      <div
      
      className='grid lg:grid-cols-4 gap-8 grid-cols-2 '>
{
  room.map((val,i)=>{
return(
  <div key={i} className='flex flex-col gap-4'>
<div className='relative overflow-hidden'>
    <Image src={val.image} alt="image" className='transition-transform duration-500 hover:scale-110 overflow-clip' />
    <button className='text-white  bg-amber-400 hover:bg-amber-500 transition duration-300 bottom-5 left-4 ease-in-out px-3 py-1.5 absolute rounded'>Book Now</button>
</div>
    <div className=''>
    <div className='text-xl font-semibold'>{val.name}</div>
    <div className='text-[#52c5fd] '> <span className='text-xl font-semibold'>${val.prize}</span>/night</div>
    </div>
    </div>
)
  })
}
      </div>

    </div>
  )
}

export default RoomSection