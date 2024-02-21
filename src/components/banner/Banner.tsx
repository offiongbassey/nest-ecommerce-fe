'use client';

import ArrowIcon from '@/svg/Arrow';
import React, { useState } from 'react';
import Subscription from '../Subscription';

const slides = [
    {
        url: "./Banner1.png",
        title: "Fresh Vegetables Big discount",
        desc: "Save up to 50% off on your first order"
    },
    {
        url: "./Banner4.png",
        title: "Pure Coffe Big discount",
        desc: "Save up to 50% off on your first order"
    },
    {
        url: "./Banner3.png",
        title: "Don’t miss amazing grocery deals",
        desc: "Sign up for the daily newsletter"
    }
]

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const is_previous = currentSlide === 0;
        const new_slide = is_previous ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(new_slide);
    }
    const nextSlide = () => {
        const is_new = currentSlide === slides.length - 1;
        const new_slide = is_new ? 0 : currentSlide + 1;
        setCurrentSlide(new_slide);
    }

  return (
    <section className='padding-container max-container'>
      <div 
      style={{ backgroundImage: `url(${slides[currentSlide].url})`}}
      className='bg-green-20 px-12 md:px-14 lg:px-24 pt-10 md:pt-24 rounded-xl bg-cover bg-center'>
        <h1 className='text-green-30 font-[800] text-2xl md:text-4xl lg:max-w-[350px] mb-4'>{slides[currentSlide].title}</h1>
        <button onClick={prevSlide} className='bg-white p-3 rounded-full rotate-90 absolute mt-10 md:mt-0 left-6 md:left-8 lg:left-28' ><ArrowIcon className='fill-gray-10'/></button>
        <button onClick={nextSlide} className='bg-white p-3 rounded-full rotate-[270deg] absolute mt-10 md:mt-0 right-6 md:right-8 lg:right-28' ><ArrowIcon className='fill-gray-10'/></button>
        <p className='text-gray-10 text-sm md:text-md mb-10'>{slides[currentSlide].desc}</p>
        <Subscription />
        <div className='flex items-center justify-center gap-2 pt-10 pb-6'>
           {slides.map((slide, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`p-[5px] ${currentSlide === index ? "bg-green-10" : " bg-transparent"} rounded-full ${currentSlide !== index ? "border border-green-30" : "border border-green-10" }`}>
            </button>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
