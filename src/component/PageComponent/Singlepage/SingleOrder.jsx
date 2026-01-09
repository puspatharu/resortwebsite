'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'

import chicken from '../../../../public/chickenfry.jpg'
import chowmien from '../../../../public/chowmien.jpg'
import fishfry from '../../../../public/fish.jpg'
import momo from '../../../../public/momos.jpg'
import pizza from '../../../../public/pizza.jpg'
import cookies from '../../../../public/cookies.jpg'
import cupcake from '../../../../public/cupcake.jpg'
import juice from '../../../../public/juice.jpg'
import cake from '../../../../public/cake.jpg'
import stw from '../../../../public/stw.jpg'

function SingleOrderContent() {
  const searchParams = useSearchParams()

  const images = {
    chicken,
    momo,
    fishfry,
    chowmien,
    pizza,
    cookies,
    cupcake,
    juice,
    cake,
    stw,
  }

  const name = searchParams.get('name')
  const price = searchParams.get('price')
  const imagekey = searchParams.get('image')

  const image = images[imagekey] ||images[0]

  return (
    <div className="pt-24 py-6 px-6 lg:px-20 w-11/12 mx-auto">
      <Link href="/menu">
        <div className="flex gap-2 mt-8 items-center text-amber-600 mb-8">
          <FaArrowLeftLong />
          <div>Back to Menu</div>
        </div>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Order Your Meal</h1>

      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        <div className="h-[300px] rounded-xl overflow-hidden">
          {image && (
            <Image
              src={image}
              alt={name || 'Food'}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-amber-500 text-xl font-semibold">${price}</p>

          <div>
            <label className="flex text-gray-600 mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-32 border-gray-400 text-gray-500 outline-none border rounded px-3 py-2"
            />
          </div>

          <div className="py-4">
            <label className="block text-gray-600 mb-1">
              Special Instructions
            </label>
            <textarea
              rows="3"
              placeholder="Less spicy, no onion, etc."
              className="w-full border-gray-400 text-gray-700 outline-none border rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-6 border-gray-300 mb-8">
        <h3 className="text-lg font-semibold mb-4">Delivery Details</h3>

        <div className="grid lg:grid-cols-2 gap-8">
          <input placeholder="Guest Name" className="input  border-gray-400 text-gray-700 outline-none border rounded px-3 py-2" />
          <input placeholder="Room Number" className="input  border-gray-400 text-gray-700 outline-none border rounded px-3 py-2" />
          <input placeholder="Contact Number" className="input  border-gray-400 text-gray-700 outline-none border rounded px-3 py-2" />
          <input placeholder="Address" className="input  border-gray-400 text-gray-700 outline-none border rounded px-3 py-2" />
        </div>
      </div>

      <button className="w-fit px-7 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold transition">
        Place Order
      </button>
    </div>
  )
}

export default function SingleOrder() {
  return (
    <Suspense fallback={<div className="pt-24 text-center">Loading...</div>}>
      <SingleOrderContent />
    </Suspense>
  )
}
