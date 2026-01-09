'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
function Toolbar() {
  const [isScrolled, setIsScrolled] = useState(false)
const [menuOpen,setMenuOpen]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nav = [
    { name: 'home', link: '/' },
    { name: 'about', link: '/about' },
     { name: 'event', link: '/event' },
    { name: 'menu', link: '/menu' },
     { name: 'room', link: '/room' },
    { name: 'gallery', link: '/gallery' },
    { name: 'contact', link: '/contact' },
  ]

  return (
    <div
      className={`
        fixed top-0 left-0 z-50 w-full
        flex justify-between py-5 tracking-wide
        transition-all duration-500 ease-out
        ${isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-[rgba(12,12,12,0.4)]'}
      `}
    >
      {/* Logo */}
      <div
        className={`
          pl-16 text-4xl font-serif
          transition-colors duration-400
          ${isScrolled ? 'text-black' : 'text-white'}
        `}
      >
        Resort
      </div>

     
      <div className="lg:flex hidden capitalize gap-6 items-center">
        {nav.map((val, i) => (
          <Link href={val.link} key={i}>
            <div
              className={`
                font-semibold cursor-pointer
                transition-colors duration-400  hover:text-amber-500
                ${isScrolled ? 'text-black' : 'text-white'}
              `}
            >
              {val.name}
            </div>
          </Link>
        ))}
      </div>
      {/* Menu icon */}
        <div className={` lg:hidden cursor-pointer ${isScrolled ? "text-black":'text-white'}`} onClick={()=> setMenuOpen(!menuOpen)}>
{
  menuOpen ? <RxCross2 /> : <GiHamburgerMenu />
}
        </div>

        {
          menuOpen && (

            <div className='fixed flex flex-col top-19 right-25 '>
{
  nav.map((val,i)=>{
    return(
<div key={i}>
  <Link href={val.link} onClick={()=>setMenuOpen(false)}>
  <div  className={`
                font-semibold tracking-wider hover:underline cursor-pointer
                transition-colors duration-400
                ${isScrolled ? 'text-black' : 'text-white'}
              `}>
 {val.name}
  </div>
  </Link>
</div>
    )
   
  })
}
 <button
          className={`
               px-4 py-1.5 rounded-full 
    bg-amber-400 
    hover:bg-amber-500
    transition-all duration-300
    shadow-md hover:shadow-amber-500/40
            ${isScrolled ? 'text-white' : 'text-white'}
          `}
        >
          Book Now
        </button>
            </div>
          )
        }

      {/* Button */}
      <div className="flex items-center pr-16">
       <button
          className={`lg:flex hidden 
               px-4 py-1.5 rounded-full font-medium
    bg-amber-400 text-black
    hover:bg-amber-500
    transition-all duration-300
    shadow-md hover:shadow-amber-500/40
            ${isScrolled ? 'text-black' : 'text-white'}
          `}
        >
          Book Now
        </button>



      </div>
    </div>
  )
}

export default Toolbar
