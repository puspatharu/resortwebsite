'use client'
import { useParams } from 'next/navigation';
import React from 'react'
import wedding from '../../../../public/marriage.jpg'
import lunch from '../../../../public/party.jpg'
import party from '../../../../public/birthday.jpg'
import birthday from '../../../../public/birth.jpg'
import Image from 'next/image';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGlassCheers, FaUtensils, FaMusic } from "react-icons/fa"
import Link from 'next/link';
function SingleEvent() {
  const {slug}=useParams()
   const event = [
    {
      title: "Wedding",
      slug:'Wed-ding',
      image: wedding,
      imagekey:'wedding',
      description: "Beautifully planned wedding ceremonies with elegant , delicious food, and unforgettable moments for your special day.Beautifully planned wedding ceremonies with elegant , delicious food, and unforgettable moments for your special day."
    },
    {
      title: "Breakfast",
      image: lunch,
       imagekey:'lunch',
       slug:'Break-fast',
      description: "Professional event setup for product and business launches, designed to impress guests and create a strong first impression.Professional event setup for product and business launches, designed to impress guests and create a strong first impression."
    },
    {
      title: "Birthday",
      image: birthday,
       imagekey:'birthday',
       slug:'Birth-day',
      description: "Fun and memorable birthday celebrations with customized themes, tasty menus, and joyful arrangements for all ages.Fun and memorable birthday celebrations with customized themes, tasty menus, and joyful arrangements for all ages."
    },
    {
      title: "Party",
       slug:'Par-ty',
      image: party,
       imagekey:'party',
      description: "Lively party events with great ambiance, music, and food, perfect for private gatherings and special celebrations.Lively party events with great ambiance, music, and food, perfect for private gatherings and special celebrations"
    },
  ];

  const facility=[
    {
         title:'Elegant Ambience',
         description:"Beautiful decoration and themed setups tailored to your event.",
         logo:<FaGlassCheers />
       },
        {
             title:'Premium Catering',
             description:"Customized menus with world-class chefs and service.",
             logo:<FaUtensils />
           },
            {
                 title:'Entertainment',
                 description:"Music, lighting, and entertainment to elevate your celebration.",
                 logo:<FaMusic />
               },
  ]
const eventdata=event.find((item)=>item.slug===slug)
 if (!eventdata) {
    return <div className="p-10 text-center ">Event not found</div>;
  }
  return (
    <div className='pt-24 px-6 pb-16 lg:px-20'>
         <Link href='/event'>
<div className='flex gap-2 items-center mt-8 text-amber-600 mb-8'>
<FaArrowLeftLong />
        <div>Back to Event</div>
      </div>
    </Link>

    <div className='flex flex-col gap-12'>
 <div className="relative w-full h-[450px] rounded-2xl overflow-hidden ">
        <Image
          src={eventdata.image}
          alt={eventdata.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-5xl font-bold">
            {eventdata.title}
          </h1>
        </div>
      </div>

    
      <div className="max-w-3xl mx-auto text-center ">
        <p className="text-gray-600 text-lg leading-relaxed">
          {eventdata.description}
        </p>
      </div>

     
      <div className="grid md:grid-cols-3 gap-8 ">
        {
          facility.map((val,i)=>{
            return(
<div key={i} className="text-center flex flex-col gap-3 items-center p-6 border rounded-xl">
  <div className="text-2xl text-amber-400 mx-auto ">
{val.logo}
  </div>
         
          <h3 className="font-semibold ">{val.title}</h3>
          <p className="text-gray-500 text-sm">
           {val.description}
          </p>
        </div>
            )
          })
        }
      </div>

      <div className="">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Event Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image src={eventdata.image} alt="" className="rounded-lg object-cover" />
          <Image src={eventdata.image} alt="" className="rounded-lg object-cover" />
          <Image src={eventdata.image} alt="" className="rounded-lg object-cover" />
        </div>
      </div>
      <div className="bg-amber-50 rounded-2xl p-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Plan Your {eventdata.title} With Us
        </h3>
        <p className="text-gray-600 mb-6">
          Let us take care of every detail while you enjoy unforgettable moments.
        </p>
        <Link href="/bookform">
          <button className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-semibold transition">
            Book This Event
          </button>
        </Link>
      </div>
    </div>

    </div>
  )
}

export default SingleEvent