'use client'
import EventSection from '@/component/PageComponent/About/EventSection'
import BannerReuse from '@/component/ui/BannerReuse';
import banner from '../../../public/logo1.jpg'
import React from 'react'
import { motion } from 'framer-motion';
import PackageSection from '@/component/PageComponent/About/PackageSection';
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
    initial='hidden'
    whileInView='show'
    viewport={{once:true}}
    className='flex flex-col lg:gap-20 gap-6'
    >
      <motion.div variants={item}>

      <BannerReuse title='Event' image={banner} />
      </motion.div>
      <motion.div variants={item}>
    <EventSection />
      </motion.div>
       <motion.div variants={item}>
    <PackageSection />
      </motion.div>
    </motion.div>
  )
}

export default page