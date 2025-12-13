import React from 'react'
import Image from 'next/image'
import page from '../../../../public/page.jpg'
import chicken from '../../../../public/chickenfry.jpg'
import chowmien from '../../../../public/chowmien.jpg'
import fishfry from '../../../../public/fish.jpg'
import momo from '../../../../public/momos.jpg'
import pizza from '../../../../public/pizza.jpg'
function MenuSection() {

  const menu=[
    {
prize:70,
name:"chicken fry",
description:"Crispy fried chicken with herbs and spices.",
image:chicken
    },
     {
prize:16,
name:"momo",
description:"Steamed Nepali dumplings served with chutney.",
image:momo
    },
    {
    prize:100,
name:"Fish fry",
description:"Crispy fried fish marinated with turmeric,chili and special masala.",
image:fishfry
    },
      {
    prize:40,
name:"chicken Chowmein",
description:"stir-fried noodles mixed with seasoned chicken strips and vegetables.",
image:chowmien
    },

    {
    prize:20,
name:"pizza",
description:"Steamed Nepali dumplings served with chutney.",
image:pizza
    },
    {
    prize:100,
name:"Fish fry",
description:"Crispy fried fish marinated with turmeric,chili and special masala.",
image:fishfry
    },
  ]
  return (

<div>
  <Image src={page} alt='image' className='h-lvh w-full absolute left-0 right-0 object-cover' />
  <div className='h-lvh w-full absolute left-0 right-0 opacity-80 bg-black'></div>
  <div className='flex flex-col gap-8 py-13'>
  <div className='relative  flex items-center text-white flex-col'>
<div className='text-4xl font-medium'>Menu List that we salve</div>
<div className='text-center text-gray-300'>Explore our freshly prepared meals,crafted with rich flavors and premiun ingredients to satisfy every craving</div>
  </div>
  <div className='relative flex gap-7  justify-center text-white text-xl font-semibold'>
    <div className='hover:underline transition duration-200 hover:text-amber-500 cursor-pointer'>Food</div>
    <div className='hover:underline transition duration-200 hover:text-amber-500 cursor-pointer'>dessert</div>
    <div className='hover:underline transition duration-200 hover:text-amber-500 cursor-pointer'>drink</div>
  </div>
  <div className='relative grid grid-cols-2 gap-8 py-9 '>
   {
   menu.map((val,i)=>{
return(
  <div key={i} className='flex gap-6 item-center'>
    <div>
    <Image
  src={val.image}
  alt="Chicken Fry"
  width={90}
  height={90}
  className='relative rounded-full object-cover'
/>
    </div>
    <div className='flex flex-col'>
    <div className='flex gap-7'>
 <div className='text-xl font-semibold text-white'>{val.name}</div>
 <div className='text-amber-500'>${val.prize}</div>
    </div>
 <div className='text-gray-300'>{val.description}</div>
  </div>
    </div>
)
   })
   }
  </div>
  </div>
</div>
  )
}

export default MenuSection