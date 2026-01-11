import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
function Footersection() {
  return (
    <div className='bg-[#302f2f] flex flex-col gap-2 py-8'>
      <div className='grid lg:grid-cols-4 gap-20 lg:px-18 px-6 '>
        <div className='flex flex-col gap-3'>
          <div className='text-white text-xl'>About Us</div>
          <p className='text-[#797878] text-base leading-6'>At  Resort, we combine luxury, comfort, and nature to create an unforgettable experience. Discover how our journey started and what 
          drives us to provide the best for our guests.</p>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-white text-xl'>Quick Links</div>
          <div className='text-[#797878] text-base flex flex-col gap-1'>
            <p className='hover:text-white'>About Us</p>
            <p className='hover:text-white'>Menu</p>
          <p className='hover:text-white'>Room</p>
          <p className='hover:text-white'>Event</p>
          <p className='hover:text-white'>Gallery</p>
            <p className='hover:text-white'>Contact Us</p>
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3'>
            <div className='text-white text-xl'>Subscibe Newsletter</div>

            <div className='flex'>
              <input type='email' placeholder='Enter Email' className='text-[#797878] text-sm  border pl-5 outline-none border-gray-300 rounded-l-2xl  py-1' />
              <button className='text-black bg-white border border-gray-300 rounded-r-2xl px-3 -ml-1 py-1 hover:bg-amber-500 hover:text-white'>Send</button>
            </div>


          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-white text-xl'>Contact us</div>
            <div className='flex flex-col gap-1 text-base'>
              <h1 className=' text-[#797878] hover:text-white'>SainaMaina-1,Ranibagiya</h1>
              <h1 className=' text-[#797878] hover:text-white '>9803456723</h1>
              <h1 className=' text-[#797878] hover:text-white'>abc@gmail.com</h1>

            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-white text-xl'>Follow Us</div>
          <div className='flex gap-3'>
            <FaFacebookF className='text-[#797878] hover:text-white' />
            <FaInstagram className='hover:text-white text-[#797878]' />
            <FaTwitter className='text-[#797878] hover:text-white' />
          </div>
        </div>

      </div>
      <div className='border border-gray-300 lg:w-11/12 w-10/12 mx-auto my-2'></div>
      <div className='text-[#797878] lg:w-6/12 w-11/12 mx-auto gap-1 flex items-center text-center'>Copyright ©2025 All rights reserved | This template is made with <span className=''><FaHeart className='text-red-600' /></span> by <span className='text-[#797878] hover:text-white'>Puspa</span></div>
    </div>
  )
}

export default Footersection
