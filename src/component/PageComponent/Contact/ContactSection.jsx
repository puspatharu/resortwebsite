 'use client'
import { Formik,Form, Field, ErrorMessage } from 'formik'
 import React from 'react'
import * as Yup from 'yup'
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
<div className=' py-10 flex flex-col items-center gap-6'>
<div className='text-2xl font-semibold'>Contact Us</div>
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
  <Form className=' flex flex-col shadow-md py-4 bg-[#fbfbfb]  px-6 gap-6 '>
    
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
  className="border px-4 py-2 text-[12px] font-semibold w-82 border-gray-500 outline-none"
/>

    </div>
   <button className=' text-white px-4 py-2 font-semibold rounded  bg-amber-300 hover:bg-amber-500 transition duration-300 ease-in-out ' type='submit'>Submit</button>
  </Form>
  )
}}
</Formik>
</div>
  )
}

export default ContactSection