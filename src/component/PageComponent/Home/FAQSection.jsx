'use client'
import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { motion } from 'framer-motion';
function FAQSection() {
  const faq = [
  {
    question: "What facilities does your resort offer?",
    answer:
      "Our resort offers comfortable rooms, a swimming pool, restaurant, free Wi-Fi, parking, and beautiful outdoor spaces for relaxation."
  },
  {
    question: "Do you provide food and dining services?",
    answer:
      "Yes, we have an in-house restaurant serving fresh, delicious meals including breakfast, lunch, and dinner."
  },
  {
    question: "Is advance booking required?",
    answer:
      "We recommend advance booking to ensure availability, especially during weekends and peak seasons."
  },
  {
    question: "Do you organize events and celebrations?",
    answer:
      "Yes, we organize weddings, birthday parties, corporate events, and private gatherings with customized arrangements."
  },
  {
    question: "Is the resort family-friendly?",
    answer:
      "Absolutely! Our resort is perfect for families, with safe surroundings, open spaces, and activities for all age groups."
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in time is from 12:00 PM and check-out time is until 11:00 AM."
  },
  {
    question: "Is parking available at the resort?",
    answer:
      "Yes, we provide free and secure parking for all our guests."
  },
  {
    question: "Can we cancel or modify our booking?",
    answer:
      "Yes, bookings can be modified or canceled according to our cancellation policy. Please contact us for assistance."
  }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const container={
    hidden:{opacity:0},
    show:{opacity:1,
      transition:{
        delayChildren:0.3,
        staggerChildren:0.4
      }
    }
  }

  const item={
    hidden:{opacity:0,y:30},
    show:{opacity:1,
      transition:{
        duration:0.7,
        ease:'easeOut'
      }
    }
  }

  return (
    <motion.div 
    variants={container} 
    initial='hidden'
    whileInView='show'
    viewport={{once:true}}
    className="w-10/12 mx-auto px-20 py-18 bg-[#f7f6f6] shadow-md ">
      <motion.h2 
      variants={item}
      className="text-center text-3xl font-semibold mb-10">
        Frequently Asked Questions
      </motion.h2>

      <motion.div 
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{once:true}}
      className="flex flex-col gap-4">
        {faq.map((val, i) => (
          <motion.div
          variants={item}
            key={i}
            className="bg-white border border-amber-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="flex justify-between items-center w-full px-6 py-4 text-left"
            >
              <span className="text-lg font-medium text-gray-800">
                {val.question}
              </span>

              <span className="text-3xl text-amber-500 transition-transform duration-300">
                {openIndex === i ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                {val.answer}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default FAQSection
