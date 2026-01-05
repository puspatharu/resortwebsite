'use client'
import RoomSection from '@/component/PageComponent/Home/RoomSection'
import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import BannerReuse from '@/component/ui/BannerReuse'
import RoomDetail from '@/component/PageComponent/Room/RoomDetail'
import { motion } from 'framer-motion'
function page() {
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
  return (
    <motion.div 
     variants={container}
        initial="hidden"
         whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
    className='flex flex-col gap-18'>
      <motion.div  variants={item}>
       <BannerReuse title="Room" image={banner} />
      </motion.div>

       <motion.div  variants={item}>
    <RoomDetail />
       </motion.div>
    </motion.div>
  )
}

export default page