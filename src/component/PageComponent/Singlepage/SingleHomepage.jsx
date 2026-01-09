'use client'
import React from 'react'
import Link from "next/link"
import { FaArrowLeftLong } from "react-icons/fa6"
import { GiBeech } from "react-icons/gi"
import { TbMassage } from "react-icons/tb"
import { MdBedroomParent,MdLunchDining } from "react-icons/md";
export default function SingleHomepage() {
  const amenities=[
    {
      title:'Private Beach',
      subtile:"Enjoy exclusive access to crystal-clear waters and peaceful shores.",
      logo:<GiBeech />
    },
     {
      title:'Spa & Wellness',
      subtile:"Rejuvenate your body and mind with premium spa therapies.",
      logo:<TbMassage />
    },
     {
      title:'Luxury Rooms',
      subtile:"Elegantly designed rooms with breathtaking views and comfort.",
      logo:<MdBedroomParent />
    },
     {
      title:'Fine Dining',
      subtile:"savor gourmet dishes are prepared by world-class chefs.",
      logo:<MdLunchDining />
    },
  ]
  return (
<div className="pt-24 pb-16 px-6 lg:px-20 bg-gray-50">

     
      <Link href="/" className="flex gap-2 mt-8 items-center text-amber-600 mb-10">
        <FaArrowLeftLong />
        <span>Back to Home</span>
      </Link>

    
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-400 font-semibold tracking-wide uppercase">
          Discover Our Resort
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-5">
          Welcome to Arambha Resort
        </h1>
        <p className="text-gray-600 text-lg">
          A peaceful retreat where luxury meets nature. Designed for travelers
          seeking comfort, serenity, and unforgettable experiences.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
{
  amenities.map((val,i)=>{
    return(
      <div key={i} className="bg-white p-6 rounded-2xl  shadow hover:translate-y-2 transition-transform flex flex-col gap-2 items-center duration-200 ">
          <div className="text-2xl text-amber-400 mx-auto ">{val.logo}</div>
          <h3 className="font-semibold text-lg ">{val.title}</h3>
          <p className="text-gray-500 text-sm">
           {val.subtile}
          </p>
        </div>
    )
  })
}
        




       

      </div>

     
      <div className="bg-amber-400/50 rounded-3xl px-8 py-14 text-center text-white mb-20">
        <h2 className="text-3xl font-bold mb-4">
          Experience Luxury Like Never Before
        </h2>
        <p className="max-w-2xl mx-auto text-white/90">
          Whether you're planning a honeymoon, family vacation, or wellness
          retreat, Arambha Resort offers an unforgettable escape.
        </p>
      </div>

 
      <div className="text-center">
        <Link href="/bookform">
          <button className="bg-amber-400 hover:bg-amber-500 text-white px-10 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-amber-500/40">
            Book Your Stay
          </button>
        </Link>
      </div>

    </div>
  )
}
