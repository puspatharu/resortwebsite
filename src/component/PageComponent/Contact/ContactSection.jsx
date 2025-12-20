 'use client'
import { Formik,Form, Field, ErrorMessage } from 'formik'
 import React from 'react'
import * as Yup from 'yup'
import { CiHome } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
function ContactSection() {
  const form=[
    {title:"username",type:"text" },
    {title:"email",type:"email"},
     { title: "number", type: 'text'}
  ]
      const schema=Yup.object().shape({
  username:Yup.string().min(3, 'Username must be at least 3 characters')
      .max(15, 'Username must be 15 characters or less')
      .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores are allowed')
      .required('Username is required'),
      email:Yup.string() 
      .email("Invalid email format")
      .required("Email is required"),
      number:Yup.string() 
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
      //  message: Yup.string()
      // .required("Message is required")
      // .min(10, "Message must be at least 10 characters")
      // .max(500, "Message cannot exceed 500 characters"),
    })
  return (
<div className='flex flex-col gap-6 lg:px-18 px-6'>
<div className='text-2xl font-semibold text-center'>Contact Us</div>
<div className='lg:flex-row flex flex-col  gap-14 lg:gap-8'>

  <div className='flex flex-col gap-5 px-4'>
        <div className='flex gap-5'>
          <div className=''>
            <CiHome className='text-amber-400 hover:text-amber-500' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-[18px] font-semibold text-amber-400 hover:text-amber-500'>SainaMaina-1,Ranibagiya</h1>
            <p className='text-gray-700'>4343 tinkunechowk</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <div>
            <FaPhone className='text-amber-400 hover:text-amber-500' />
          </div>
          <div>
            <h1  className='text-[18px] font-semibold text-amber-400 hover:text-amber-500'>9803456723</h1>
            <p className='text-gray-700'>Sun to Sat 7am to 7pm</p>
          </div>
        </div>
             <div className='flex gap-5'>
          <div>
           <MdOutlineEmail  className='text-amber-400 hover:text-amber-500'/>
          </div>
          <div>
            <h1  className='text-[18px] font-semibold text-amber-400 hover:text-amber-500'>abc@gmail.com</h1>
            <p  className='text-gray-700'>Send us your query anytime</p>
          </div>
        </div>
      </div>
  <Formik initialValues={{
  username:'',
email:"",
number:"",
message:'',
}
}
validationSchema={schema}

onSubmit={(values)=>{
  console.log(values)
}}
    >
{({})=>{
  return(
  <Form className=' flex flex-col  shadow-md py-4 bg-[#fbfbfb]  px-6 gap-6 '>
    <div className='lg:flex-row flex flex-col gap-7'>
    <div className='flex flex-col gap-3'>
    {
      form.map((val,i)=>{
return(
  <div key={i} className='flex flex-col gap-1'>
<label htmlFor={val.title} className='text-base font-semibold capitalize'>{val.title}</label>
<Field className="border px-4 py-2 text-[12px] font-semibold w-82 border-gray-500 outline-none " placeholder={val.title}  name={val.title} type={val.type}/>


<ErrorMessage className='text-red-700' component={'span'} name={val.title} />

  </div>
)
      })
    }
    </div>

    <div className='flex flex-col gap-1'>
    <label htmlFor="message" className='text-base font-semibold capitalize'>Message</label>
<Field
  as="textarea"
  name="message"
  placeholder="message"
  className="border px-4 py-2 h-full text-[12px] font-semibold w-82 border-gray-500 outline-none"
/>

    </div>
    </div>

   <button className=' text-white px-4 py-2 font-semibold rounded  bg-amber-400 hover:bg-amber-500 transition duration-300 ease-in-out w-fit ' type='submit'>Submit</button>
  </Form>
  )
}}
</Formik>
</div>
</div>
  )
}

export default ContactSection