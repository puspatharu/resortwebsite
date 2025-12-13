import React from 'react'

function BookingSection() {
  return (
    <div className='bg-[#303030]  flex gap-10 p-12'>
      <div className='capitalize text-white text-3xl'>Book <br></br>Your Room</div>
      <div className='text-white grid grid-cols-5 gap-8 items-center'>
         <div className='flex flex-col gap-2'>
          <label>Arrival</label>
          <input type="date" className='border-2 border-[#838181] py-1 px-2 rounded text-[#838181] w-40'/>
        </div>
   <div className='flex flex-col gap-2'>
          <label>Departure</label>
          <input type="date" className='border-2 border-[#838181] py-1 px-2 rounded text-[#838181] w-40'/>
        </div>

        <div className='flex flex-col gap-2'>
        <label>Room type</label>
        <select className='border-2 border-[#838181] py-1 px-2 rounded text-[#838181] w-40'>
          <option>Single Room</option>
          <option>Double Room</option>
          <option>Deluxe Room</option>
        </select>
        </div>
        
 

     
        <div className='flex flex-col gap-2'>
          <label>Adult</label>
          <select className='border-2 border-[#838181] py-1 px-2 rounded text-[#838181] w-40'>
            <option>1</option>
            <option>2</option>
             <option>3</option>
          </select>
        </div>
      <div>
         <div className=' relative text-white px-2 py-2 font-semibold rounded  bg-amber-300 hover:bg-amber-500 transition duration-300 ease-in-out w-fit'>Book Now</div>
       </div>
      </div>
     </div>
  )
}

export default BookingSection