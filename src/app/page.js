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

const container={
  hidden:{},
  show:{
    transition:{
      staggerChildren:1.5
    }
  }
};
const item={
  hidden:{opacity:0,y:30},
  show:{
    opacity:1,
    y:0,
    transition:{duration:0.8}
  }
}
function page() {
  return (
    <motion.div
    variants={container}
      initial='hidden'
    animate='show'
    className='flex flex-col gap-20 px-18'>
      <motion.div 
      variants={item}
      >
        <HomeSection />
      </motion.div>

       <motion.div 
       variants={item}
      >
      <BookingSection />
      </motion.div>

       <motion.div 
      variants={item}
      >
      <AboutSection />
      </motion.div>

       <motion.div 
       variants={item}
      >
      <RoomSection />
      </motion.div>

       <motion.div 
      variants={item}
      >
              <MenuSection />
      </motion.div>

       <motion.div 
       variants={item}
      >
              <FeatureSection />
      </motion.div>

      <motion.div 
       variants={item}
      >
      <ReviewSection />
      </motion.div>
      
    </motion.div>
  )
}

export default page