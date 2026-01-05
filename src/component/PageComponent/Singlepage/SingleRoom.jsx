 'use client'
 import React from 'react'
import room1 from '../../../../public/room1.webp'
import room2 from '../../../../public/room2.webp'
import room3 from '../../../../public/room3.webp'
import room4 from '../../../../public/room4.webp'
import { useParams } from 'next/navigation'
import { BiSolidWasher } from "react-icons/bi";
import Image from "next/image"
import Link from "next/link"
import { IoRestaurant,IoCarSport } from "react-icons/io5";
import { TbMassage,TbAirConditioning } from "react-icons/tb";
import { GiBeech } from "react-icons/gi";
import { FaGlassMartini,FaSwimmingPool,FaTv,FaWifi } from "react-icons/fa";

function SingleRoom() {
  const { id } = useParams();
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
  const facility=[
    {
      logo:<IoRestaurant />,
      name:"restaurant",
     
    },
      {
      logo:<FaSwimmingPool />,
      name:"swimming pool",
    },
      {
      logo:<FaGlassMartini />,
      name:"Bar",
    
    },
      {
      logo:<IoCarSport />,
      name:"sports club",
     
    },
       {
      logo:<TbMassage />,
      name:"Spa & Wellness",
    
    },
      {
      logo:<GiBeech />,
      name:"Private Beach Access",
    },
    {
      logo:<FaTv />,
      name:"Cable TV",
    },
    {
      logo:<TbAirConditioning/>,
      name:"Conditioning",
    },
    {
      logo:<BiSolidWasher />,
      name:'Washer',
    },
    {
      logo:<FaWifi />,
      name:"Fast wifi",
    },
      {
      logo:<FaTv />,
      name:"Cable TV",
    },
    {
      logo:<TbAirConditioning/>,
      name:"Conditioning",
    },
  ]

   const roomdata = room.find((item)=> item.id ===Number(id));

  if (!roomdata) {
    return <div className="p-10 text-center">Blog not found</div>;
  }
  return (
    <div className='flex flex-col gap-9 lg:px-20 px-4'>

       <div className="mt-20 flex flex-col gap-6 py-9 w-10/12 mx-auto ">
      <Image src={roomdata.image} alt={roomdata.name} className="rounded-xl w-90 h-90" />
      <div className=''>
    <div className='text-base font-semibold'>{roomdata.name}</div>
    <div className='text-[#52c5fd] '> <span className='text-xl font-semibold'>${roomdata.prize}</span>/night</div>
    </div>
        <Link href='/'>
      <button className='border py-2 px-7 border-gray-400'>Go to back</button>
        </Link>
    </div>
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl font-semibold'>Description</h1>
      <p className='text-gray-500'>
        Modern open plan super spacious penthouses in historic Sochi.Windows from to ceilling to give you the best views of sochi and full view of majestic Table Mountain anywhere in the penthouses .The big patio with jacuzzi bath is idea to watch the sunset and the city lights. coffee shops,museums,theatre within walking distance.The big patio with jacuzzi bath is idea to watch the sunset and the city lights. coffee shops,museums,theatre within walking distance.
      </p>
    </div>
    <div className='flex flex-col gap-4'>
     <h1 className='text-xl font-semibold'>Amenity</h1>
     <div className='grid lg:grid-cols-3 gap-4 grid-cols-2'>
      {
        facility.map((val,i)=>{
          return(
            <div key={i} className='flex gap-6 text-gray-500'>
              <div>{val.logo}</div>
              <div>{val.name}</div>
              </div>
          )
        })
      }
     </div>
    </div>
      <div className='flex flex-col gap-4'>
      <h1 className='text-xl font-semibold'>Additional Information</h1>
      <p className='text-gray-500'>
       The big patio with jacuzzi bath is ideal to watch the sunset and the city lights. Coffee shops ,museum theater within distance.   The big patio with jacuzzi bath is ideal to watch the sunset and the city lights. Coffee shops ,museum theater within distance.
      </p>
    </div>
        <div className='flex flex-col gap-4 pb-8'>
      <h1 className='text-xl font-semibold'>Pricing Plans</h1>
      <h3>Regular plan</h3>
    <div  className="overflow-x-auto">
      <table className='w-full border border-gray-100 rounded-lg '>
<thead>
  <tr className='bg-gray-100 text-gray-500'>
    <th className='py-3 px-4 border '>Sun</th>
     <th className='py-3 px-4 border '>Mon</th>
      <th className='py-3 px-4 border '>Tue</th>
       <th className='py-3 px-4 border '>Wed</th>
        <th className='py-3 px-4 border '>Thus</th>
         <th className='py-3 px-4 border '>Fri</th>
          <th className='py-3 px-4 border '>Sat</th>
  </tr>
</thead>
<tbody>
  <tr className='text-center text-gray-500'>
    <td className='py-2 px-4 border font-medium'>8766</td>
    <td className='py-2 px-4 border font-medium'>8766</td>
    <td className='py-2 px-4 border font-medium'>8766</td>
    <td className='py-2 px-4 border font-medium'>8766</td>
    <td className='py-2 px-4 border font-medium'>8766</td>
    <td className='py-2 px-4 border font-medium'>8766</td>
     <td className='py-2 px-4 border font-medium'>8766</td>
  </tr>
</tbody>
      </table>
    </div>
    </div>
    </div>
  )
}

export default SingleRoom