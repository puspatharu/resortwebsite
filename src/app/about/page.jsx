'use client'
import AboutSection from '@/component/PageComponent/Home/AboutSection'
import React from 'react'
import banner from '../../../public/hero-bg.jpg'
import BannerReuse from '@/component/ui/BannerReuse'
import FeatureSection from '@/component/PageComponent/Home/FeatureSection'
import ReviewSection from '@/component/PageComponent/Home/ReviewSection'
import EventSection from '@/component/PageComponent/About/EventSection'
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
    className='flex flex-col gap-20'>

<motion.div variants={item}>
<BannerReuse title='about' image={banner} />
</motion.div>



 <motion.div variants={item}>
<AboutSection />
 </motion.div>

 <motion.div variants={item}>
<FeatureSection />
 </motion.div>

 <motion.div variants={item}>
<ReviewSection />
 </motion.div>
    </motion.div>
  )
}

export default page