'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import image from '../../../../public/room1.webp'
import { IoCarSport } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";
import { GiBeech } from "react-icons/gi";
import { FaGlassMartini, } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSearchParams } from 'next/navigation';
import room1 from '../../../../public/room1.webp'
import room2 from '../../../../public/room2.webp'
import room3 from '../../../../public/room3.webp'
import room4 from '../../../../public/room4.webp'

function SingleBookingContext() {
  const searchParams=useSearchParams()
   const roomSlug = searchParams.get('room')
  const roomName = searchParams.get('name')
  const roomPrice = searchParams.get('price')
const roomImageKey = searchParams.get('image')
  const facility=[
     
           {
           logo:<FaGlassMartini />,
           name:"Bar",
           paragraph:"Unwind at our stylish bar offering a premium selection "
         },
           {
           logo:<IoCarSport />,
           name:"sports club",
           paragraph:"Stay active at our fully equipped sports club featuring  "
         },
            {
           logo:<TbMassage />,
           name:"Spa & Wellness",
           paragraph:"Rejuvenate your body and mind at our spa with relaxing  "
         },
           {
           logo:<GiBeech />,
           name:"Private Beach Access",
           paragraph:"Enjoy exclusive access to a pristine private beach"
         },
           
        
  ]
  
const imageMap = {
  room1,
  room2,
  room3,
  room4,
}

const selectedImage = imageMap[roomImageKey] || room1
  return (
    <div className='lg:px-20 px-6 pt-24 flex flex-col pb-12 gap-12 '>
       <Link href='/'>
<div className='flex gap-2 items-center text-amber-600'>
<FaArrowLeftLong />
        <div>Back to Home</div>
      </div>
    </Link>


      <div className='text-center'>
        <div className='text-xl font-semibold'>Reserve Your Stay</div>
        <div className='text-gray-400'>Experience unmatched hospitality with our streamlined booking process </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-12'>
<div className='flex flex-col gap-9'>
  <div className=''>
      <div className="w-full h-[350px] rounded-lg overflow-hidden">
    <Image
      src={selectedImage}
      alt="room"
      className="w-full h-full object-cover"
      priority
    />
  </div>

 

<div className="mt-4">
  <h2 className="text-xl font-semibold">{roomName}</h2>
  <p className="text-[#52c5fd] text-lg">
    ${roomPrice} <span className="text-sm text-[#52c5fd]">/ night</span>
  </p>
</div>
  </div>
      <div className='flex flex-col border rounded-lg border-gray-200  gap-4 px-9 py-4'>
{
  facility.map((val,i)=>{
return(
  <div key={i} className='flex gap-6'>
    <div className='bg-sky-100 text-sky-500 transition ease-in-out duration-300 hover:bg-sky-400 hover:text-white  text-sm px-2 h-fit py-2 rounded '>{val.logo}</div>
    <div className=''>
      <div className='text-base font-medium'>{val.name}</div>
      <div className='text-gray-400 text-sm leading-relaxed'>{val.paragraph}</div>
    </div>
  </div>
)
  })
}
      </div>
    
</div>

      <form className='border flex flex-col lg:w-6/12 gap-9 border-gray-200 rounded p-6'>
        <div>
          <h2 className='text-lg font-semibold mb-4'>Booking Details</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
<div>
            <label className="text-base text-gray-600">Arrival Date</label>
            <input
              type="date"
              className="w-full text-gray-500 border text-sm rounded px-3 py-2 mt-1"
            />
          </div>

         
 <div>
            <label className="text-base text-gray-600">Departure Date</label>
            <input
              type="date"
              className="w-full border text-gray-500 text-sm rounded px-3 py-2 mt-1"
            />
          </div>

           <div>
            <label className="text-base text-gray-600">Total Guests</label>
            <input
              type="number"
              className="w-full border text-sm rounded px-3 py-2 mt-1"
            />
          </div>
 <div>
            <label className="text-base text-gray-600">Total Rooms</label>
            <input
              type="number"
             
              className="w-full border text-sm rounded px-3 py-2 mt-1"
            />
          </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Room Preference</h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-base text-gray-600">
              Accommodation Type
            </label>
            <select className="w-full border text-gray-500 text-sm rounded px-3 py-2 mt-1">
              <option>Select type</option>
              <option>Single Room</option>
              <option>Double Room</option>
              <option>Deluxe Room</option>
              <option>Suite</option>
            </select>
          </div>

           <div>
            <label className="text-base text-gray-600">
              Additional Requirements
            </label>
            <textarea
              rows="3"
              placeholder="Any special requests..."
              className="w-full text-sm border rounded px-3 outline-none py-2 mt-1"
            />
          </div>
        </div>
        </div>
        <div className='flex flex-col '>
        <h2 className="text-lg font-semibold mb-4">Guest Information</h2>
     <div className='flex flex-col gap-6'>
          <div className='md:col-span-2'>
            <label className="text-base text-gray-600">
              Primary Guest Name
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full border text-sm rounded px-3 py-2 mt-1"
            />
          </div>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
          <div>
            <label className="text-base text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="pus@email.com"
              className="w-full text-sm border rounded px-3 py-2 mt-1"
            />
          </div>

          <div className="">
            <label className="text-base text-gray-600">Contact Number</label>
            <input
              type="tel"
              placeholder="+123 456 7890"
              className="w-full border text-sm rounded px-3 py-2 mt-1"
            />
          </div>
          </div>
     </div>
        
       
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-500 text-white font-medium py-3 rounded transition"
        >
          Submit Reservation Request
        </button>
      </div>
      </form>
      </div>
    </div>
  )
}

export default function SingleBooking(){
  <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
<SingleBookingContext />
  </Suspense>
}