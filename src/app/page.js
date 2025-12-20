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

// const container={
//   hidden:{},
//   show:{
//     transition:{
//       staggerChildren:1.5
//     }
//   }
// };
// const item={
//   hidden:{opacity:0,y:30},
//   show:{
//     opacity:1,
//     y:0,
//     transition:{duration:0.8}
//   }
// }
function page() {
  return (
    <div className='flex flex-col lg:gap-20 gap-10 '>
      <div>
        <HomeSection />
      </div>
      <div>
        <BookingSection />
      </div>

       <div>
      <AboutSection />
      </div>

       <div>
      <RoomSection />
      </div>

       <div>
              <MenuSection />
      </div>

       <div 
       
      >
              <FeatureSection />
      </div>

      <div>
              <BlogSection />
      </div>

      <div>
      <ReviewSection />
      </div>

    </div>
  )
}

export default page