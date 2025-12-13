import React from 'react'
import Image from 'next/image'
import Aboutimg from '../../../../public/about_bg.jpg.webp'
function AboutSection() {
  return (
    <div className='py-5 flex gap-18'>
      <div className='gap-12 w-5/12 flex flex-col'>
        <div className='text-6xl font-bold capitalize'>
          about us our history mission & vision
        </div>
 <div className='text-gray-500 text-[14px]'>Experience comfort,style and exceptional service at our resort.With premium rooms,modern amenities and a welcoming atmosphere, we create the ideal setting for relaxation.</div>
 <div className='text-white bg-[#222222] px-4 py-1.5 w-fit rounded capitalize'>request custom price </div>
      </div>
      <div>
       <Image src={Aboutimg} alt='image'/>
      </div>
    </div>
  )
}

export default AboutSection