import React from 'react'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6";
function BookForm() {
  return (
   <div className='pt-24 pb-18 px-6 lg:px-20'>
    <Link href='/'>
<div className='flex gap-2 items-center mt-8 text-amber-600'>
<FaArrowLeftLong />
        <div>Back to Home</div>
      </div>
    </Link>
  <div className="min-h-screen   bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-12">
 
       
        <h2 className="text-2xl font-semibold text-center mb-2">
          Complete Your Booking
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please fill in the details below to proceed
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="text-base text-gray-600">Arrival Date</label>
            <input type="date" className="w-full text-sm border border-gray-400 text-gray-500 rounded px-3 py-2 mt-1 outline-none" />
          </div>

          <div>
            <label className="text-base text-gray-600">Departure Date</label>
            <input type="date" className="w-full border rounded text-sm text-gray-500 border-gray-400 outline-none px-3 py-2 mt-1" />
          </div>

          <div>
            <label className="text-base text-gray-600">Room Type</label>
            <select className="w-full border border-gray-400 text-sm rounded px-3 py-2 mt-1 text-gray-600">
              <option>Select Room</option>
              <option>Single Room</option>
              <option>Double Room</option>
              <option>Deluxe Room</option>
            </select>
          </div>

          <div>
            <label className="text-base text-gray-600">Adults</label>
            <select className="w-full border border-gray-400 text-sm rounded px-3 py-2 mt-1 text-gray-600">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-base text-gray-600 outline-none">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded border-gray-400 text-sm px-3 py-2 mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-base text-gray-600">Email</label>
            <input
              type="email"
              placeholder="pus@example.com"
              className="w-full border rounded text-sm px-3 py-2 mt-1 border-gray-400 outline-none"
            />
          </div>

          <div>
            <label className="text-base text-gray-600">Phone</label>
            <input
              type="tel"
              placeholder="phone no"
              className="w-full border rounded text-sm px-3 py-2 mt-1 border-gray-400 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-white font-medium py-3 rounded transition"
            >
              Confirm Booking
            </button>
          </div>

        </form>
      </div>
    </div>
   </div>
  )
}

export default BookForm