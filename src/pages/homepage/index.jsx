import React from 'react'
import './index.css'
import Carosal from './carosal'

export default function index() {
  return (
    <div>
      <section className='-z-50 banner relative flex flex-col justify-center items-center'>
        <div className='w-[50vw] z-10 text-center'>
          <p className='text-2xl lg:text-7xl font-bold z-10 py-5'>
            Tomato
          </p>
          <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Savor Every Moment, One Bite at a Time
            Where Taste Meets Inspiration</p>
        </div>
        <div className="cover top-0 left-0 right-0 absolute animate-fadeOut"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
         Top picks
          </p>
          <Carosal />
        </div>
      </section>
    </div>
  )
}
