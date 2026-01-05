
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import page from '../../../../public/page.jpg'
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

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("food")

  const menu = [
    { prize: 70, name: "chicken fry", description: "Crispy fried chicken with herbs and spices.", image: chicken, category: "food" },

    { prize: 16, name: "momo", description: "Steamed Nepali dumplings served with chutney.", image: momo, category: "food" },

    { prize: 100, name: "fish fry", description: "Crispy fried fish with special masala.", image: fishfry, category: "food" },

    { prize: 40, name: "chicken chowmein", description: "Stir-fried noodles with chicken & veggies.", image: chowmien, category: "food" },

    { prize: 20, name: "pizza", description: "Cheesy pizza with fresh toppings.", image: pizza, category: "food" },

    { prize: 30, name: "cookies", description: "Sweet crunchy cookies.", image: cookies, category: "dessert" },

    { prize: 30, name: "cup cake", description: "Soft cupcake with cream.", image: cupcake, category: "dessert" },

    { prize: 30, name: "cake", description: "Delicious vanilla cake.", image: cake, category: "dessert" },

    { prize: 10, name: "cold drink", description: "Refreshing chilled beverage.", image: juice, category: "drink" },

    { prize: 10, name: "strawberry drink", description: "Fresh strawberry juice.", image: stw, category: "drink" },
  ]

  const filteredMenu = menu.filter(item => item.category === activeCategory)

  return (
    <div className="relative w-full">
    
      <Image
        src={page}
        alt="menu background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-18 py-16">
     
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Menu List That We Serve
          </h2>
          <p className="text-gray-300 mt-2 text-sm lg:text-base">
            Explore our freshly prepared meals crafted with premium ingredients
          </p>
        </div>

       
        <div className="flex justify-center gap-6 text-white font-semibold mb-12">
          {["food", "dessert", "drink"].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`capitalize transition  cursor-pointer ${
                activeCategory === cat
                  ? "text-amber-500 underline"
                  : "hover:text-amber-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredMenu.map((val, i) => (
            <div key={i} className="flex gap-4 items-start">
              <Image
                src={val.image}
                alt={val.name}
                className="rounded-full object-cover w-18 h-18"
                width={64}
                height={64}
              />

              <div>
                <div className="flex  gap-6">
                  <h3 className="text-white text-[18px] font-semibold capitalize">
                    {val.name}
                  </h3>
                  <span className="text-amber-500 font-semibold">
                    ${val.prize}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mt-1">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuSection




  


