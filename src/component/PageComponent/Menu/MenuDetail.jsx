 'use client'
 import React from 'react'
import Image from 'next/image'
import page from '../../../../public/page.jpg'
import { FaShoppingCart } from "react-icons/fa"
import chicken from '../../../../public/chickenfry.jpg'
import chowmien from '../../../../public/chowmien.jpg'
import fishfry from '../../../../public/fish.jpg'
import momo from '../../../../public/momos.jpg'
import pizza from '../../../../public/pizza.jpg'
import cookies from '../../../../public/cookies.jpg'
import cupcake from '../../../../public/cupcake.jpg'
import juice from '../../../../public/juice.jpg'
import cake from '../../../../public/cake.jpg'
import stw from '../../../../public/stw.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from "react"
function MenuDetail() {
  const [activeCategory, setActiveCategory] = useState("food")
const menu = [

  {
    category: "food",
    price: 70,
    name: "Chicken Fry",
    description: "Freshly prepared with authentic flavors.",
    image: chicken,
    imagekey: "chicken",
  },
  {
    category: "food",
    price: 16,
    name: "Momo",
    description: "Freshly prepared with authentic flavors.",
    image: momo,
    imagekey: "momo",
  },
   {
    category: "food",
    price: 20,
    name: "Fish fry",
    description: "Freshly prepared with authentic flavors.",
    image: fishfry,
    imagekey: "fishfry",
  },
   {
    category: "food",
    price: 34,
    name: "Pizza",
    description: "Freshly prepared with authentic flavors.",
    image: pizza,
    imagekey: "pizza",
  },
  {
    category: "food",
    price: 40,
    name: "Chicken Chowmein",
    description: "Freshly prepared with authentic flavors.",
    image: chowmien,
    imagekey: "chowmien",
  },

 
  {
    category: "dessert",
    price: 70,
    name: "Cookies",
    description: "Freshly baked dessert delight.",
    image: cookies,
    imagekey: "cookies",
  },
   {
    category: "dessert",
    price: 60,
    name: "Cup cake",
    description: "Freshly baked dessert delight.",
    image: cupcake,
    imagekey: "cupcake",
  },
  {
    category: "dessert",
    price: 40,
    name: "Cake",
    description: "Soft & creamy cake slices.",
    image: cake,
    imagekey: "cake",
  },


  {
    category: "drink",
    price: 100,
    name: "Juice",
    description: "Fresh fruit juice.",
    image: juice,
    imagekey: "juice",
  },
   {
    category: "drink",
    price: 20,
    name: "Sweet Juice",
    description: "Fresh fruit juice.",
    image: stw,
    imagekey: "stw",
  },
]


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.25 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const filteredMenu = menu.filter(
  (item) => item.category === activeCategory
)

  return (
    <div className="px-6 lg:px-20 py-16">

    
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-4"
      >
        <div className="w-16 h-[2px] bg-amber-400 mb-1" />
        <div className="w-24 h-[2px] bg-amber-400 mb-4" />

        <motion.h2
          variants={item}
          className="text-3xl font-bold"
        >
          Our Main Menu
        </motion.h2>
 <motion.p
          variants={item}
          className="text-gray-500 mt-2 text-center max-w-md"
        >
          Discover our chef special dishes prepared with fresh ingredients
        </motion.p>
        <motion.div
         variants={item}
        className="flex mt-8 justify-center gap-4 mb-12">
  {["food", "dessert", "drink"].map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`px-6 py-2 rounded-full font-medium transition
        ${
          activeCategory === cat
            ? "bg-amber-400 text-white shadow"
            : "border border-gray-300 text-gray-600 hover:bg-amber-100"
        }`}
    >
      {cat}
    </button>
  ))}
</motion.div>

       
      </motion.div>

    
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredMenu.map((val, i) => (
          <motion.div
            key={i}

            variants={item}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
           
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src={val.image}
                alt={val.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />

              
              <div className="absolute top-3 right-3 bg-amber-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ${val.price}
              </div>
            </div>

         
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{val.name}</h3>

              <p className="text-gray-500 text-sm">
               {val.description}
              </p>
              {/* <Link
  href={`/menu/order?name=${val.name}&price=${val.prize}&image=${i}`}
>
  <button className="mt-3 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white py-2.5 rounded-full font-medium">
    Take an Order
  </button>
</Link> */}
            
<Link
  href={{
    pathname: '/menu/order', 
    query: {
      price: val.price,
      name: val.name,
      image: val.imagekey,
    },
  }}>
              <button
                className="mt-3 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white py-2.5 rounded-full font-medium transition-all duration-300 shadow hover:shadow-amber-500/40"
              >
                <FaShoppingCart />
                Take an Order
              </button>
</Link>
             
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default MenuDetail



