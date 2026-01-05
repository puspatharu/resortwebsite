'use client'
import BannerReuse from '@/component/ui/BannerReuse'
import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import MenuDetail from '@/component/PageComponent/Menu/MenuDetail'
import DessertDetail from '@/component/PageComponent/Menu/DessertDetail'
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
    className='flex flex-col lg:gap-20 gap-6'>
      <motion.div variants={item}>
      <BannerReuse title="Menu" image={banner} />
      </motion.div>
      
     <motion.div variants={item}>

      <MenuDetail />
     </motion.div>

     <motion.div variants={item}>
      <DessertDetail />
     </motion.div>
     
    </motion.div>
  )
}

export default page