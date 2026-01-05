import React from "react";
import { motion } from "framer-motion";
function BookingSection() {
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

  return (
    <motion.div
    variants={container}
    initial="hidden"
    whileInView='show'
    viewport={{once:true}}
    className="px-6 -mt-6 lg:px-20 ">
      <div className="bg-[#2b2b2b] rounded-3xl shadow-2xl p-8 lg:p-12 max-w-7xl mx-auto">

      
          <motion.h3 
          variants={item}
          className="text-center text-white text-2xl lg:text-3xl font-semibold mb-10">
          Book Your Luxury Stay
        </motion.h3>

       
        <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">

         
          <motion.div
          variants={item}
          className="flex flex-col gap-2 text-white">
            <label className="text-sm text-gray-300">Arrival</label>
            <input
              type="date"
              className="rounded-lg bg-transparent border border-gray-500 px-4 py-2 text-gray-200 focus:border-amber-400 focus:outline-none [color-scheme:dark]"
            />
          </motion.div>

         
          <motion.div
          variants={item}
          className="flex flex-col gap-2 text-white">
            <label className="text-sm text-gray-300">Departure</label>
            <input
              type="date"
              className="rounded-lg bg-transparent border border-gray-500 px-4 py-2 text-gray-200 focus:border-amber-400 focus:outline-none [color-scheme:dark]"
            />
          </motion.div>

        
          <motion.div variants={item} className="flex flex-col gap-2 text-white">
            <label className="text-sm text-gray-300">Room Type</label>
            <select 
            className="rounded-lg bg-[#2b2b2b] border border-gray-500 px-4 py-2 text-gray-200 focus:border-amber-400 focus:outline-none">
              <option value=''>Select</option>
              <option value='Single Room'>Single Room</option>
              <option value='Double Room'>Double Room</option>
              <option value='Deluxe Room'>Deluxe Room</option>
            </select>
          </motion.div>

        
          <motion.div variants={item} className="flex flex-col gap-2 text-white">
            <label className="text-sm text-gray-300">Adults</label>
            <select 
            defaultValue=''
            className="rounded-lg bg-[#2b2b2b] border border-gray-500 px-4 py-2 text-gray-200 focus:border-amber-400 focus:outline-none">
               <option value="" disabled>
    Select adults
  </option>
              <option value='1'>1</option>
              <option value="2">2</option>
              <option value='3'>3</option>
              <option value='4'>4+</option>
            </select>
          </motion.div>

        
          <div className="flex">
            <button className="w-full rounded-full bg-amber-400 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-amber-500 hover:shadow-amber-500/40">
              Book Now
            </button>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}

export default BookingSection;
