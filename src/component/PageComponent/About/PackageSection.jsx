'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CiHeart, CiStar } from "react-icons/ci"
import { MdPeople } from "react-icons/md"

function PackageSection() {
  const packages = [
    {
      title: 'Corporate Meetings',
      description:
        "Professional meeting spaces with all essential amenities for productive business events and conferences.",
      facilities: ['Meeting rooms', 'AV equipment', 'Catering options'],
      price: 95,
      icon: <CiHeart />,
    },
    {
      title: 'Wedding Celebrations',
      description:
        "Unforgettable wedding experiences with elegant venues, exquisite dining, and personalized service.",
      facilities: ['Bridal suite', 'Ceremony setup', 'Reception dinner'],
      price: 185,
      icon: <CiStar />,
    },
    {
      title: 'Special Occasions',
      description:
        "Celebrate milestones with customized party packages designed to create lasting memories.",
      facilities: ['Custom decor', 'Entertainment', 'Photography'],
      price: 95,
      icon: <MdPeople />,
    },
    {
      title: 'Social Gatherings',
      description:
        "Intimate social events with flexible arrangements for family reunions and anniversaries.",
      facilities: ['Flexible seating', 'Bar service', 'Live music'],
      price: 95,
      icon: <CiHeart />,
    },
  ]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="px-6 lg:px-20 py-20 bg-gray-50">
    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-3">Tailored Event Packages</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Carefully crafted packages to suit every celebration and corporate need
        </p>
      </motion.div>

    
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {packages.map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            className="group bg-white rounded-3xl px-6 py-4 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
           
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-2xl mb-6">
              {item.icon}
            </div>

         
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

           
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>

          
            <div className="flex flex-wrap gap-3 mb-2">
              {item.facilities.map((fac, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1.5 text-sm rounded-full bg-amber-100 text-amber-700"
                >
                  {fac}
                </span>
              ))}
            </div>

            <div className="mb-6">
              <span className="text-gray-500">Starting from</span>
              <div className="text-xl font-bold text-amber-500">
                ${item.price}
                <span className="text-base font-medium text-gray-500"> / person</span>
              </div>
            </div>

          
            <button className=" py-2 rounded-full bg-amber-400 text-white font-semibold px-3 transition hover:bg-amber-500 hover:shadow-amber-500/40 w-fit">
              Learn More
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default PackageSection
