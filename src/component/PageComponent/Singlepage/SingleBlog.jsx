

'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import blog1 from '../../../../public/blog.jpg'
import blog2 from '../../../../public/blog-2.jpg.webp'
import blog4 from '../../../../public/blog4.jpg'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link'
function SingleBlog() {
   const { slug } = useParams();

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

  const blogdata = blog.find(item => item.slug === slug);

  if (!blogdata) {
    return <div className="p-10 text-center">Blog not found</div>;
  }
  return (
    <div className='mt-25 px-6 lg:px-20'>
     
     
  <div className="bg-gray-50  min-h-screen">
    <div className="relative rounded-2xl overflow-hidden  h-[60vh] w-full">
      <Image
        src={blogdata.image}
        alt={blogdata.title}
        fill
        priority
        className="object-cover rounded-2xl"
      />
      <div className="absolute inset-0 rounded-2xl bg-black/50 flex items-center justify-center">
        <h1 className="text-white text-3xl lg:text-5xl font-bold text-center px-6">
          {blogdata.title}
        </h1>
      </div>
    </div>

    
    <div className="max-w-4xl mx-auto px-6 py-14 bg-white -mt-20 relative z-10 rounded-3xl shadow-lg">

    
      <p className="text-sm text-gray-400 text-center mb-6">
        {blogdata.date} - Resort Lifestyle
      </p>

      <p className="text-gray-600 leading-relaxed text-lg">
        {blogdata.description}
      </p>

      <p className="text-gray-600 leading-relaxed mt-6">
        Our resort offers a peaceful escape where nature, comfort, and luxury
        come together. Whether its relaxing under the sun, enjoying wellness
        experiences, or discovering mindful living, every moment here is
        designed for rejuvenation.
      </p>

     
      <div className="my-10 border-l-4 border-amber-400 pl-6 italic text-gray-700 text-lg">
        “True relaxation begins when you disconnect from routine and reconnect
        with yourself.”
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-semibold mb-3">Resort Experience</h3>
          <p className="text-gray-600">
            Wake up to scenic views, enjoy gourmet dining, and spend your days
            immersed in calm surroundings that redefine luxury living.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Wellness & Leisure</h3>
          <p className="text-gray-600">
            From spa therapies to open-air relaxation zones, our resort is built
            to nourish both body and mind.
          </p>
        </div>
      </div>

   
      <div className="grid grid-cols-3 gap-4 mt-12">
        <Image src={blogdata.image} alt="" className="rounded-xl" />
        <Image src={blogdata.image} alt="" className="rounded-xl" />
        <Image src={blogdata.image} alt="" className="rounded-xl" />
      </div>

      
      <div className="text-center mt-14">
        <Link href="/">
          <button className="px-8 py-3 rounded-full border border-gray-400 text-gray-700 hover:bg-amber-400 hover:text-white flex  gap-1 items-center transition">
            <div><FaArrowLeftLong /></div>
            <div> Back to Blogs</div>
            
          </button>
        </Link>
      </div>
    </div>
  </div>


    </div>
  )
}

export default SingleBlog