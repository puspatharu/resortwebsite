'use client'
import React from 'react'
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import userimg from '../../../../public/user.jpg'
import Image from 'next/image';
function ReviewSection() {

  const list = [
    {
      name: "Rameshwor Giri",
      rating: 5,
      comment: "Absolutely delicious food with amazing flavors. Highly recommended!",
      image:userimg
    },
    {
      name: "Raju Prasad Giri",
      rating: 4,
      comment: "Great taste and quality. The service was also very friendly.",
      image:userimg
    },
    {
      name: "Dilkumar Raj",
      rating: 5,
      comment: "One of the best dining experiences I’ve had. Will visit again!",
      image:userimg
    },
    {
      name: "Hemkala Giri",
      rating: 4,
      comment: "Fresh ingredients and wonderful presentation. Loved it!",
      image:userimg
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <div className="bg-gray-100 py-16 mb-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-2 w-5/12 mx-auto">
          Real reviews from our valued guests sharing their dining experience and satisfaction.
        </p>
      </div>

      <div className="px-6">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          arrows={false}
        >
          {list.map((val, i) => (
            <div key={i} className="px-3">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                
              
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {Array(val.rating)
                    .fill(0)
                    .map((a, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  “{val.comment}”
                </p>
<div className='flex items-center gap-4'>
                 <Image src={val.image} alt='' className='h-15 w-15 object-cover rounded-full' />

                <h4 className="text-lg font-semibold text-gray-800">
                  {val.name}
                </h4>
</div>
               

               
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ReviewSection;
