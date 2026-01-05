import React from 'react'
import wedding from '../../../../public/marriage.jpg'
import lunch from '../../../../public/party.jpg'
import party from '../../../../public/birthday.jpg'
import birthday from '../../../../public/birth.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
function EventSection() {
 const event = [
  {
    title: "Wedding",
    image: wedding,
    description: "Beautifully planned wedding ceremonies with elegant , delicious food, and unforgettable moments for your special day.Beautifully planned wedding ceremonies with elegant , delicious food, and unforgettable moments for your special day."
  },
  {
    title: "Breakfast",
    image: lunch,
    description: "Professional event setup for product and business launches, designed to impress guests and create a strong first impression.Professional event setup for product and business launches, designed to impress guests and create a strong first impression."
  },
  {
    title: "Birthday",
    image: birthday,
    description: "Fun and memorable birthday celebrations with customized themes, tasty menus, and joyful arrangements for all ages.Fun and memorable birthday celebrations with customized themes, tasty menus, and joyful arrangements for all ages."
  },
  {
    title: "Party",
    image: party,
    description: "Lively party events with great ambiance, music, and food, perfect for private gatherings and special celebrations.Lively party events with great ambiance, music, and food, perfect for private gatherings and special celebrations"
  },
];
  return (
    <div className='px-6 lg:px-20'>
        <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Events</h1>
        <p className="text-gray-500 mt-2">
          We organize events that create lasting memories
        </p>
      </div>
      <div className='flex flex-col gap-12'>
{
  event.map((val,i)=>{
return(
  <motion.div key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
    className='grid lg:grid-cols-2 grid-cols-1  gap-18'>
    <motion.div
    initial={{opacity:0, x: i % 2 === 0 ? -50 : 50}}
       whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
    className={i%2===0?'order-1':'order-2 '}>
<Image src={val.image} alt='' className='w-full h-[300px] object-cover rounded-lg' />
    </motion.div>
    <motion.div
     initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
    className={i % 2 === 0 ? "order-2" : "order-1 "}>
        <h2 className="text-2xl font-semibold mb-2">{val.title}</h2>
        <p className="text-gray-600">{val.description}</p>
      </motion.div>
  </motion.div>
)
  })
}
      </div>
    </div>
  )
}

export default EventSection