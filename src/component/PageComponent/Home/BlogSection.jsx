'use client'
import React, { useState } from 'react'
import blog1 from '../../../../public/blog.jpg'
import blog2 from '../../../../public/blog-2.jpg.webp'
import blog3 from '../../../../public/blog3.jpg'
import blog4 from '../../../../public/blog4.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link'
import { motion } from 'framer-motion'

function BlogSection() {
  const [search,setSearch]=useState('');
const blog=[
  {
    image:blog1,
    slug:'learn-How-To-Motivate-Yourself',
    title:'Learn How To Motivate Yourself',
    date:'Dec 02,2023',
    description:"How many free autoresponders have you tried?and how many emails did you get through using them ?"
  },
 
 
   {
    image:blog4,
    slug:'Six-Pack-Abs-The-big-Picture',
    title:'Six Pack Abs The big Picture',
    date:'12 Dec 2023',
    description:"Some good steps to take to ensure you are getting what you need out of a autoresponder include"
  },
    {
    image:blog2,
    slug:'Taking-sunbath-with-enjoying-Yourself',
    title:'Taking sunbath  with enjoying Yourself',
    date:'Dec 02,2023',
    description:"How many free autoresponders have you tried?and how many emails did you get through using them ?"
  },
  
]
const filterblog=blog.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()));

const container={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      delayChildren:0.3,
      staggerChildren:0.4

    }
  }
}
const item={
  hidden:{opacity:0,y:30},
  show:{
opacity:1,
transition:{
  duration:0.7,
  ease:'easeOut'
}
  }
}
  return (
    <div className='flex flex-col gap-12 lg:px-18 px-6'>
      <motion.div 
    variants={container}
    initial='hidden'
    whileInView='show'
    viewport={{once:true}}
    className='flex flex-col items-center gap-2'>
        <motion.div variants={item} className='text-[16px] tracking-widest font-semibold text-sky-400'>OUR BLOG</motion.div>
        <motion.div 
        variants={item}
        className='text-2xl font-semibold'>Latest News And Event</motion.div>
      </motion.div>
      <motion.input variants={item} className='border border-gray-400 shadow-md px-4 py-4 rounded-full outline-none placeholder:text-gray-400' placeholder='search blog...'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <motion.div 
      variants={container} 
      initial='hidden'
whileInView='show'
viewport={{once:true}}
      className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        {filterblog.length >0 ?(
 filterblog.map((val,i)=>{
return(
  <motion.div variants={item} key={i} className=' group  bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden px-4 py-4'>
    <div className='flex flex-col gap-3'>
      <div className='relative group overflow-hidden rounded'>
      
      <Image src={val.image} alt='' height={350} width={350} className='w-full h-full object-cover' />
      
      <div className='absolute  top-0 bottom-0 items-center flex flex-col gap-4 justify-center px-2 bg-amber-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400'>
        <div className='text-gray-700 hover:text-white transition-transform  hover:-translate-y-0.5 duration-300'><FaFacebookF /></div>
        <div className='text-gray-700 hover:text-white transition-transform  hover:-translate-y-0.5 duration-300'><FaTwitter /></div>
        <div className='text-gray-700 hover:text-white transition-transform  hover:-translate-y-0.5 duration-300'><FaInstagram /></div>
      </div>
      </div>
<div>
  <div className='text-[15px] text-gray-400'>{val.date}</div>
  <div className='text-base font-semibold group-hover:text-sky-500 transition-colors'>{val.title}</div>
</div>
  <div className='text-gray-500 text-sm leading-relaxed'>{val.description}</div>
  <Link href={`/blog/${val.slug}`}>
  <button className='h-8 w-8 flex justify-center items-center rounded-full border border-[#656464] group-hover:bg-sky-500 group-hover:border-sky-500 transition-all'>
<FaArrowRightLong className='text-gray-500 group-hover:text-white transition-all'/>
  </button>
  </Link>
    </div>
  </motion.div>
)
  })
        ):(
          <div>no blog found</div>
        )}

 

      </motion.div>

     

    </div>
  )
}

export default BlogSection