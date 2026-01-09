 'use client'
 import React from 'react'
import room1 from '../../../../public/room1.webp'
import room2 from '../../../../public/room2.webp'
import room3 from '../../../../public/room3.webp'
import room4 from '../../../../public/room4.webp'
import room5 from '../../../../public/room5.webp'
import room6 from '../../../../public/room6.webp'
import { FaStar } from "react-icons/fa";
import { useParams } from 'next/navigation'
import { BiSolidWasher } from "react-icons/bi";
import Image from "next/image"
import Link from "next/link"
import { IoRestaurant,IoCarSport } from "react-icons/io5";
import { TbMassage,TbAirConditioning } from "react-icons/tb";
import { GiBeech } from "react-icons/gi";
import {  FaCar ,FaArrowLeftLong} from "react-icons/fa6";

import { CiHeart,CiStar  } from "react-icons/ci";
import { LuCoffee } from "react-icons/lu";
import { FaGlassMartini,FaSwimmingPool,FaTv,FaWifi } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { PiResize } from "react-icons/pi";

function SingleRoom() {
  const { slug } = useParams();
 const room=[
  {
    image:room1,
     imagekey:'room1',
    name:"Double Deluxe Room",
    prize:150,
    slug:"Double-Deluxe-Room",
    rating:4,
    reviews:100,
   description:'large windows that allow natural light to fill the room. The space is complemented breathtaking lake views, offering a peaceful atmosphere, premium furnishings',
   guest:3,
    logo1:<MdPeople />,
     logo2:<FaTv />,
     logoname:'TV',
     logosq:<PiResize />,
     squareft:750,
  },
   {
    image:room2,
     imagekey:'room2',
     name:"Single Deluxe Room",
     slug:'Single-Deluxe-Room',
      rating:5,
    prize:100,
    reviews:200,
description:"large windows that allow natural light to fill the room. The space is breathtaking lake views, offering a peaceful atmosphere, premium furnishings ",
guest:2,
 logo1:<MdPeople />,
    logo2:<FaWifi />,
    logoname:'Wifi',
     logosq:<PiResize />,
     squareft:700,
  },
    {
    image:room3,
     imagekey:'room3',
     name:"Honeymoon Suit",
     slug:"Honeymoon-Suit",
    prize:300,
     rating:4.5,
     reviews:120,
    description:'A romantic and luxurious suite designed for couples, featuring elegant breathtaking lake views, offering a peaceful atmosphere, premium furnishings',
    guest:2,
    logo1:<MdPeople />,
    logo2:<FaCar />,
    logoname:'Parking',
     logosq:<PiResize />,
     squareft:600,
  },
  {
    image:room4,
     imagekey:'room4',
     name:"Economy Double",
     slug:"Economy-Double",
    prize:200,
     rating:3.5,
     reviews:127,
     description:'A comfortable and budget-friendly room offering essential amenities, ideal breathtaking lake views, offering a peaceful atmosphere, premium furnishings',
     guest:3,
      logo1:<MdPeople />,
      logo2:<CiHeart />,
logoname:'King Bed',
 logosq:<PiResize />,
     squareft:800,
  },
    {
    image:room5,
     imagekey:'room5',
     name:"Standard City Room",
     slug:"Standard-City-Room",
    prize:300,
     rating:4,
     reviews:230,
   description:'A stylish room with modern comforts and city views,breathtaking lake views, offering a peaceful atmosphere, premium furnishings ',
   guest:4,
    logo1:<MdPeople />,
    logo2:<FaWifi />,
    logoname:'Wifi',
     logosq:<PiResize />,
     squareft:600,
  },
    {
    image:room6,
     imagekey:'room6',
     name:"Premium Lake View",
     slug:"Premium-Lake-View",
    prize:300,
    reviews:189,
    description:'An elegant room with breathtaking lake views, offering a peaceful atmosphere,',
     rating:4,
    guest:2,
     logo1:<MdPeople />,
logo2:<LuCoffee />,
logoname:'Coffee Machine',
 logosq:<PiResize />,
     squareft:755,
   
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

 const images = [
   "/room5.webp",
  "/room1.webp",
  "/room2.webp",
  "/room3.webp",
  "/room4.webp",
   "/room6.webp",
    "/room4.webp",
];



const roomdata = room.find((item)=> item.slug ===slug);

if (!roomdata) {
  return <div className="p-10 text-center">Blog not found</div>;
}
// const rating = Math.min(Math.max(Number(roomdata.rating) || 0, 0), 5);
return (
    <div className='flex mt-23 mb-12 flex-col  lg:px-20 px-4 gap-10 '>
  <Link href='/'>
<div className='flex  gap-2 items-center text-amber-600'>
<FaArrowLeftLong />
        <div>Back to Home</div>
      </div>
    </Link>
       <div className=" flex lg:flex-row flex-col gap-14   ">
       
        <div className="w-[600px] relative h-[450px] rounded-lg overflow-hidden">
    <Image
      src={roomdata.image}
      alt="Room image"
      className="w-full h-full object-cover"
      priority
    />
<div className='absolute text-white bg-[#52c5fd] top-4 left-3 font-medium tex-base px-4 py-1.5 rounded-xl'>Premeium suite</div>
  </div>
      <div className='flex  lg:w-6/12 border border-gray-200 shadow-lg p-6 flex-col gap-7'>
        <div className='flex items-center gap-5'>
          <div className='bg-[#52c5fd] text-base font-medium px-4 py-1.5 rounded text-white'>{roomdata.rating}</div>
        {/* <div className="flex gap-2 text-yellow-400 mb-3">
  {Array(rating)
    .fill(0)
    .map((_, i) => (
      <FaStar key={i} />
    ))}
</div> */}
                          <div className='text-gray-500'>(
                            <span className='text-gray-500'>
                              {roomdata.reviews}
                            </span> reviews)</div>
        </div>
    <div className='text-2xl font-semibold'>{roomdata.name}</div>
    <div className='text-gray-400 text-base  leading-wider'>{roomdata.description}</div>
    <div className='flex gap-5'>
<div className='items-center gap-1 flex text-gray-500 text-base'>
   <div>{roomdata.logo1}</div>
    <p>Up to <span>{roomdata.guest}</span> guests</p>
    </div>
  <div className='items-center gap-1 flex text-gray-500 text-base'>
   <div>{roomdata.logosq}</div>
    <p> <span>{roomdata.squareft}</span> sq ft</p>
    </div>

    <div className='text-gray-500 text-base'>King bed + Sofa</div>

</div>

    <div className='text-[#52c5fd] '> <span className='text-3xl font-semibold'>${roomdata.prize}</span>/night</div>

        <Link href={{
         pathname:'/singlebooking',
  query:{
    room:roomdata.slug,
    name:roomdata.name,
    price:roomdata.prize,
    image:roomdata.imagekey
  },
       }}>
        <button className='text-white  bg-amber-400 hover:bg-amber-500 transition duration-300 bottom-5 left-4 ease-in-out font-medium text-base px-5 py-2 rounded'>Book Now</button>
       </Link>
    </div>
       
    </div>

<div className='flex flex-col gap-4'>
      <h1 className='text-xl font-semibold'>Room Gallery</h1>
<div className='grid auto-rows-[150px] grid-cols-5 gap-4'>
  {
    images.map((val,i)=>{
      return(
<div key={i} className={`${i==0 ?'row-span-2 col-span-2':''}`}>
<Image src={val} alt='' width={100} height={100} className={`rounded object-cover h-full w-full`}/>
  </div>
      )
    })
  }
</div>
    </div>

    <div className='flex flex-col gap-4'>
      <h1 className='text-xl font-semibold'>Room Overview</h1>
<div className='flex lg:flex-row flex-col gap-14'>

<div className='text-gray-500 text-base  flex flex-col gap-5'>
      <p>
        Indulge in the ultimate luxury experience with our Deluxe Ocean View Suite. This spacious retreat features floor-to-ceiling windows showcasing panoramic ocean vistas, creating a serene atmosphere perfect for romantic getaways or family vacations. The elegantly appointed living space seamlessly blends modern comfort with coastal charm, featuring premium furnishings and thoughtful design elements.
      </p>
      <p>
        The suite includes a separate living area with comfortable seating, a work desk for business travelers, and a private balcony where you can enjoy your morning coffee while watching the sunrise over the ocean. The bedroom features a plush king-size bed with luxury linens, ensuring a restful night's sleep, while the sofa bed in the living area provides additional accommodation for up to two guests.
      </p>
      </div>
      <div className='border rounded-3xl border-gray-200 border-l-6 border-l-[#52c5fd] shadow-md flex flex-col gap-4 w-full px-3 py-6'>
<div className='bg-[#52c5fd] p-3 w-fit flex items-center  text-white rounded-full'><CiStar className='text-2xl' /></div>
<div className='text-2xl font-medium'>Premium Experience</div>
<div className='text-gray-500 text-sm'>The most beautiful suite we've ever stayed in. The ocean view is absolutely breathtaking and the attention to detail is remarkable.</div>

<div className='text-gray-300 text-sm'>Ankita,Varified Guest</div>
      </div>
     
</div>
      
    </div>
    <div className='flex flex-col gap-4'>
     <h1 className='text-xl font-semibold'>Why Choose Our Hotel</h1>
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
     
       
    </div>
  )
}

export default SingleRoom