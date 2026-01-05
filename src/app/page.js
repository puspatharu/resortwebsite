'use client'
import AboutSection from '@/component/PageComponent/Home/AboutSection'
import BookingSection from '@/component/PageComponent/Home/BookingSection'
import FeatureSection from '@/component/PageComponent/Home/FeatureSection'
import HomeSection from '@/component/PageComponent/Home/HomeSection'
import MenuSection from '@/component/PageComponent/Home/MenuSection'
import RoomSection from '@/component/PageComponent/Home/RoomSection'
import React from 'react'
import { motion } from 'framer-motion'
import ReviewSection from '@/component/PageComponent/Home/ReviewSection'
import BlogSection from '@/component/PageComponent/Home/BlogSection'
import FAQSection from '@/component/PageComponent/Home/FAQSection'
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
function page() {
  return (
    <motion.div
     variants={container}
        initial="hidden"
         whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
    className='flex flex-col lg:gap-20 gap-10 '>
      <motion.div
      variants={item}
      >
        <HomeSection />
      </motion.div>

      <motion.div variants={item}>
        <BookingSection />
      </motion.div>

       <motion.div variants={item}>
      <AboutSection />
      </motion.div>

       <motion.div variants={item}>
      <RoomSection />
      </motion.div>

       <motion.div variants={item}>
              <MenuSection />
      </motion.div>

     

       <motion.div 
       variants={item}
      >
              <FeatureSection />
      </motion.div>

 <motion.div variants={item}>
        <FAQSection />
      </motion.div>

      <motion.div variants={item}>
              <BlogSection />
      </motion.div>

      <motion.div variants={item}>
      <ReviewSection />
      </motion.div>

    </motion.div>
  )
  
}

export default page