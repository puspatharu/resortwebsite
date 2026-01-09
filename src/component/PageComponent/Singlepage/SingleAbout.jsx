
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6"
import Aboutimg from "../../../../public/about_bg.jpg.webp";
import blogimg from "../../../../public/blog3.jpg";
import dinner1 from '../../../../public/dinner.webp'
import dinner2 from '../../../../public/dinner2.webp'
import location from '../../../../public/location.webp'
export default function SingleAbout() {
  const facility=[
    {
title:'World-Class Spa',
description:'Rejuvenating treatments in our award-winning wellness sanctuary',
image:dinner1,
    },
      {
title:'Gourmet Dining',
description:'Michelin-starred cuisine crafted by renowned executive chefs',
image:dinner2,
    },
     {
title:'Prime Location',
description:'Nestled in the heart of the city with breathtaking panoramic views',
image:location,
    },
    
  ]
  return (
    <div className="mt-18 py-12 px-6 lg:px-20">
      <Link href="/about" className="flex gap-2 mt-8 items-center text-amber-600">
        <FaArrowLeftLong />
        <span>Back to About</span>
      </Link>

<div className='flex flex-col gap-18'>
      <div className='flex flex-col gap-12'>
        <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Story</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At  Resort, we combine luxury, comfort, and nature to create 
          an unforgettable experience. Discover how our journey started and what 
          drives us to provide the best for our guests.
        </p>
        </div>

 <div
      className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col gap-6">
          <span
          className="text-amber-400 font-semibold uppercase tracking-wide">
            About Us
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
           Where Timeless Elegance Meets Modern Luxury
          </h2>

          <p 
          className="text-gray-500 text-base leading-relaxed max-w-xl">
            Experience comfort, style, and exceptional service at our resort.
            With premium rooms, modern amenities, and a welcoming atmosphere,
            we create the ideal setting for relaxation and memorable stays.
          </p>

<Link href="/bookform">
          <button className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-semibold transition">
            Book Your Stay
          </button>
        </Link>

        </div>

      
        <div className="relative flex justify-center lg:justify-end">
          <div 
          className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={Aboutimg}
              alt="Resort view"
              className="rounded-2xl"
            />
          </div>
          <div 
          className="absolute -bottom-10 -left-10 hidden lg:flex overflow-hidden rounded-xl  shadow-xl border-4 border-white">
            <Image
              src={blogimg}
              alt="Luxury room"
              className="rounded-xl"
              width={200}
              height={200}
            />
          </div>
        </div>

    </div>
      </div>

      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Arambha Resort?</h2>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 transition  hover:translate-y-2 duration-300 bg-gray-50 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Private Beach</h3>
            <p className="text-gray-600 text-sm">Enjoy an exclusive, pristine beach only for our guests.</p>
          </div>
          <div className="p-6 transition  hover:translate-y-2 duration-300  bg-gray-50 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Spa & Wellness</h3>
            <p className="text-gray-600 text-sm">Relax with our professional spa treatments and wellness programs.</p>
          </div>
          <div className="p-6 transition  hover:translate-y-2 duration-300  bg-gray-50 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">Gourmet Dining</h3>
            <p className="text-gray-600 text-sm">Savor the finest cuisine prepared by expert chefs in our restaurants.</p>
          </div>
        </div>
      </div>
<div className='flex flex-col gap-12'> 
  <div className='flex items-center flex-col gap-3'>
    <div className='text-2xl font-medium'>
      Exceptional Hospitality Redefined
    </div>
    <div className='text-gray-400'>Discover the amenities and services that make your stay unforgettable</div>
  </div>
      <div className='grid lg:grid-cols-3 gap-12'>
        {
facility.map((val,i)=>{
  return(

<div key={i} className='flex flex-col  gap-3'>
  <div className='relative rounded-2xl overflow-hidden'>
<Image src={val.image} alt="" className='object-cover overflow-hidden rounded-2xl transition duration-300 hover:scale-110' />
    </div>
<div className='text-xl font-semibold'>{val.title}</div>
<div className='text-gray-400'>{val.description}</div>
</div>
  )
})
       
        }
      </div>
</div>

</div>
    </div>
  )
}



