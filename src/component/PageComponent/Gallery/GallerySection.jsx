import React from 'react'

import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import Image from 'next/image'
function GallerySection() {
  const images = [
  "/blog.jpg",
  "/blog-2.jpg.webp",
  "/blog3.jpg",
  "/blog4.jpg",
  "/room1.webp",
  "/room2.webp",
  "/room3.webp",
  "/room4.webp",
  "/fishing.jpg",
  "/logo1.jpg",
  "/page.jpg",
  "/about_bg.jpg.webp",
];
  return (
    <div className=' px-4 pb-12 lg:px-20'>
     <div className='text-center'>
<div className='text-3xl font-semibold'>Our Gallery</div>
<div className="text-gray-500 mt-2">Explore moment from our resort</div>
     </div>

     <div className='pt-8 grid  grid-cols-4 gap-4 '>
      {
        images.map((val,i)=>{
          return(
<div key={i} className={`group overflow-hidden rounded-xl relative 
 ${i==1 ?'col-span-2 row-span-2':''}
${i==3 || i==4 ||i==7||i==10?'row-span-2':''}

`}>
  
<Image src={val} alt='' height={300} width={300} className='object-cover group-hover:scale-110 group-hover:rotate-2 duration-500 transition-transform w-full h-full '/>

   <div className='absolute inset-0 items-center flex flex-col gap-2 justify-center px-2 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity  duration-400'>
         <div className='text-amber-400 hover:text-white transition-transform  hover:-translate-y-0.5 duration-300 '><FaFacebookF /></div>
         <div className=' text-amber-400 hover:text-white transition-transform  hover:-translate-y-0.5 duration-300'><FaTwitter /></div>
         <div className='text-amber-400  hover:text-white transition-transform  hover:-translate-y-0.5 duration-300'><FaInstagram /></div>
       </div>
</div>
          )
        })
      }
     </div>
      </div>
  )
}

export default GallerySection