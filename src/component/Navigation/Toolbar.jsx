'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { motion } from 'framer-motion';
function Toolbar() {
  const [isScrolled,setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY > 50);
    }
  window.addEventListener('scroll',handleScroll);
  return ()=>window.removeEventListener('scroll',handleScroll);
  },[]);
  const nav=[
    {
      name:"home",
      link:'/'
    },
       {
      name:"about",
      link:'/about'
    },
 {
      name:"menu",
      link:'/menu'
    },
     {
      name:"team",
      link:'/team'
    },
     
 {
      name:"contact",
      link:'/contact'
    },
  ]
  return (
    <motion.div
    initial={{opacity:0,y:-20 }}
animate={{opacity:1,y:0,
  backgroundColor:isScrolled ? '#ffffff':'rgba(0,0,0,0)',
   boxShadow: isScrolled ? "0 4px 10px rgba(0,0,0,0.15)" : "0 0 0 rgba(0,0,0,0)",
}}
 transition={{ duration: 0.5, ease: "easeOut" }}
     className='flex py-5 justify-between fixed z-50 top-0 left-0  w-full h-fit '>

      <motion.div 
      animate={{color:isScrolled ? "#000000" : "#ffffff"}}
       transition={{ duration: 0.4 }}
      className='px-5 text-4xl font-serif'>
        Resort
      </motion.div>
      <div className='flex capitalize gap-4 items-center'>
    {
      nav.map((val,i)=>{
        return(
          <Link href={val.link} key={i}>
            <motion.div 
            animate={{ color: isScrolled ? "#000000" : "#ffffff" }}
              transition={{ duration: 0.4 }}
              className="font-semibold cursor-pointer">{val.name}</motion.div>
          </Link>
        )
      })
    }
      </div>
      <div className='flex items-center gap-2 px-5'>
<motion.div
  animate={{ color: isScrolled ? "#000000" : "#ffffff" }}
          transition={{ duration: 0.4 }} >
  <IoMdSearch />
</motion.div>
<motion.div
 animate={{ color: isScrolled ? "#000000" : "#ffffff" }}
          transition={{ duration: 0.4 }}
>Login</motion.div>
      </div>
    </motion.div>
  )
}

export default Toolbar