import React from 'react'
import img1 from "../../../../public/blog.jpg"
import img2 from "../../../../public/blog-2.jpg.webp"
import img3 from "../../../../public/blog3.jpg"
import img4 from "../../../../public/blog4.jpg"
import img5 from "../../../../public/room1.webp"
import img6 from "../../../../public/room2.webp"
import img7 from "../../../../public/room3.webp"
import img8 from "../../../../public/room4.webp"
import img9 from "../../../../public/fishing.jpg"
import img10 from "../../../../public/logo1.jpg"
import img11 from "../../../../public/page.jpg"
import img12 from "../../../../public/about_bg.jpg.webp"
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import Image from 'next/image'
function GallerySection() {
  const images=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
  return (
    <div className='py-13 px-4 lg:px-20'>
     <div className='text-center'>
<div className='text-3xl font-semibold'>Our Gallery</div>
<div className="text-gray-500 mt-2">Explore moment from our resort</div>
     </div>

     <div className='pt-8 columns-2  lg:columns-4 gap-4 '>
      {
        images.map((val,i)=>{
          return(
<div key={i} className={`group break-inside-avoid overflow-hidden rounded-xl relative 
`}>
<Image src={val} alt='' className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 duration-500 transition-transform "/>

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