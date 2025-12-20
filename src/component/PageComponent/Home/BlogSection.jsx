import React from 'react'
import blog1 from '../../../../public/blog.jpg'
import blog2 from '../../../../public/blog-2.jpg.webp'
import blog3 from '../../../../public/blog3.jpg'
import blog4 from '../../../../public/blog4.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
function BlogSection() {
const blog=[
  {
    image:blog1,
    title:'Learn How To Motivate Yourself',
    date:'Dec 02,2023',
    description:"How many free autoresponders have you tried?and how many emails did you get through using them ?"
  },
 
 
   {
    image:blog4,
    title:'Six Pack Abs The big Picture',
    date:'12 Dec 2023',
    description:"Some good steps to take to ensure you are getting what you need out of a autoresponder include"
  },
    {
    image:blog2,
    title:'Learn How To Motivate Yourself',
    date:'Dec 02,2023',
    description:"How many free autoresponders have you tried?and how many emails did you get through using them ?"
  },
  
]

  return (
    <div className='flex flex-col gap-12 lg:px-18 px-6'>
      <div className='flex flex-col items-center gap-2'>
        <div className='text-[16px] tracking-widest font-semibold text-sky-400'>OUR BLOG</div>
        <div className='text-2xl font-semibold'>Latest News And Event</div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
{
  blog.map((val,i)=>{
return(
  <div key={i} className=' group  bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden px-4 py-4'>
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
  <div className='text-xl font-semibold group-hover:text-sky-500 transition-colors'>{val.title}</div>
</div>
  <div className='text-gray-500 text-sm leading-relaxed'>{val.description}</div>
  <button className='h-8 w-8 flex justify-center items-center rounded-full border border-[#656464] group-hover:bg-sky-500 group-hover:border-sky-500 transition-all'>
<FaArrowRightLong className='text-gray-500 group-hover:text-white transition-all'/>
  </button>
    </div>
  </div>
)
  })
}
      </div>
    </div>
  )
}

export default BlogSection