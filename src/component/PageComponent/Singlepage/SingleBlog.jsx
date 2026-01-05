

'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import blog1 from '../../../../public/blog.jpg'
import blog2 from '../../../../public/blog-2.jpg.webp'
import blog4 from '../../../../public/blog4.jpg'
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
    <div>
      <div className="max-w-4xl mx-auto px-6 py-12">
      <Image src={blogdata.image} alt={blogdata.title} className="rounded-xl" />
      <p className="text-gray-400 mt-4">{blogdata.date}</p>
      <h1 className="text-3xl font-bold mt-3">{blogdata.title}</h1>
      <p className="mt-6 text-gray-600 leading-relaxed">
        {blog.description}
      </p>
        <Link href='/'>
      <button className='border py-2 px-7 border-gray-400'>Go to back</button>
        </Link>
    </div>
    </div>
  )
}

export default SingleBlog