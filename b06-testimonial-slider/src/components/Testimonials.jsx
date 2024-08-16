import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Testimonials({ reviews }) {

  let [index, setIndex] = useState(0);

  function leftHandler(){
    if(index-1 <0){
      setIndex(reviews.length-1);
    }else{
      setIndex(index-1);
    }
  }

  function rightHandler(){
    if(index+1 >= reviews.length){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }

  function surpriseHandler(){
    console.log(Math.floor(Math.random()*reviews.length));
    setIndex(Math.floor(Math.random()*reviews.length));
  }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
      <Card review={reviews[index]} />

      <div className='flex text-3xl mt-5 gap-3 text-violet-300 font-bold mx-auto items-center'>
        <button
        onClick={leftHandler}
        className='cursor-pointer hover:text-violet-500'><FiChevronLeft /></button>
        <button
        onClick={rightHandler}
        className='cursor-pointer hover:text-violet-500'><FiChevronRight /></button>
      </div>

      <div>
        <button
        onClick={surpriseHandler}
        className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-6'>
          Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials