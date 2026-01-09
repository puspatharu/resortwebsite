'use client'
import React from "react";
import Image from "next/image";
import Aboutimg from "../../../../public/about_bg.jpg.webp";
import blogimg from "../../../../public/blog3.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

function AboutSection() {
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
    <div
    className="  px-6 lg:px-20 bg-white">
      <motion.div
        variants={container}
      initial="hidden"
    whileInView='show'
    viewport={{once:true}}
      className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div className="flex flex-col gap-6">
          <motion.span 
          variants={item}
          className="text-amber-400 font-semibold uppercase tracking-wide">
            About Us
          </motion.span>

          <motion.h2 
          variants={item}
          className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our History, Mission <br className="hidden lg:block" /> & Vision
          </motion.h2>

          <motion.p 
          variants={item}
          className="text-gray-600 text-base leading-relaxed max-w-xl">
            Experience comfort, style, and exceptional service at our resort.
            With premium rooms, modern amenities, and a welcoming atmosphere,
            we create the ideal setting for relaxation and memorable stays.
          </motion.p>
<Link href='/about/singleabout'>
          <button className="mt-4 w-fit rounded-full bg-amber-400 px-8 py-3 text-white font-semibold shadow-md transition-all duration-300 hover:bg-amber-500 hover:shadow-amber-500/40">
            Request Custom Price
          </button>
</Link>
        </motion.div>

      
        <motion.div className="relative flex justify-center lg:justify-end">
          <motion.div 
          variants={item}
          className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={Aboutimg}
              alt="Resort view"
              className="rounded-2xl"
            />
          </motion.div>
          <motion.div 
          variants={item}
          className="absolute -bottom-10 -left-10 hidden lg:flex overflow-hidden rounded-xl  shadow-xl border-4 border-white">
            <Image
              src={blogimg}
              alt="Luxury room"
              className="rounded-xl"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>

    </motion.div>
      </div>
  );
}

export default AboutSection;



