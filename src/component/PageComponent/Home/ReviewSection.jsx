'use client'
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function ReviewSection() {
  const list=[
    {
      name:"Rameshwor Giri",
      rating:<FaStar/>,
      comment:"tasty and delicious hjhkskjkuh"
    },
     {
      name:"Raju prassad Giri",
      rating:<FaStar/>,
      comment:"tasty and delicious hjhkslid"
    },
     {
      name:"Dilkumar Raj",
      rating:<FaStar/>,
      comment:"tasty and delicious jhkksikslkjdl"
    },
     {
      name:"Hemkala Giri",
      rating:<FaStar/>,
      comment:"tasty and delicious jhkslikjd"
    },
      {
      name:"Rameshwor Giri",
      rating:<FaStar/>,
      comment:"tasty and delicious hjhkskjkuh"
    },
     {
      name:"Raju prassad Giri",
      rating:<FaStar/>,
      comment:"tasty and delicious hjhkslid"
    },
      {
      name:"Rameshwor Giri",
      rating:<FaStar/>,
      comment:"tasty and delicious hjhkskjkuh"
    },
     {
      name:"Raju prassad Giri",
      rating:<FaStar/>,
      comment:"tasty and delicious hjhkslid"
    },
  ]

   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
  return (
    <div className='flex flex-col items-center justify-center bg-[#ebe8e8] gap-12 mb-12 py-12'>
      <div className='flex flex-col justify-center'>
      <div className='text-2xl font-semibold'>Customer Review</div>
      <div className='text-[#3b3b3b]'>See What our customer are saying!</div>
      </div>
      <div className='w-full px-13'>
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            arrows={false}
            infinite={true}
            
      
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl
            customTransition
            transitionDuration={10}
            containerClass="carousel-container"
            >
        {
          list.map((val,i)=>{
return(
  <div key={i} className='flex flex-col '>
    <div className='flex gap-2 items-center'>
    <div className='text-xl font-semibold'>{val.name}</div>
    <div className='text-yellow-500'>{val.rating}</div>
    </div>
<div>{val.comment}</div>
    </div>
)
          })
        }
         </Carousel>
      </div>
    </div>
  )
}

export default ReviewSection