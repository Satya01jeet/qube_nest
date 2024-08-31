import React from 'react'
import heroimg from '../assets/heroImg.png'

const Hero = () => {
  return (
    <>
      <div className='md:hidden flex flex-col items-center my-2 w-full h-auto'>
        <div className=''>
          <img src={heroimg} className='w-full' alt="" />
        </div>
        <div className='pt-4 text-center'>
          <h1 className='text-teal-600 font-bold'>Your Home</h1>
          <h1 className='text-xl font-bold'>Away From Home</h1>
          <h3 className='m-4'>Our PG offers a safe, secure, and welcoming environment, where you can focus on your goals while enjoying a comfortable stay</h3>
        </div>
        <div className='w-full flex justify-center items-center mt-5'>
          <button className="px-3 w-[70%] border-teal-800 bg-white text-teal-800 rounded-lg active:bg-teal-800 active:text-white active:border-white transition-colors duration-300">
              Book now
          </button>
        </div>
      </div>
      {/* {desktop view} */}
      <div className='hidden md:block h-screen'>
        <div className="flex items-center justify-evenly">
          <div className='pt-4 text-center'>
            <h1 className='text-teal-600 text-8xl font-bold'>Your Home</h1>
            <h1 className='text-4xl font-bold'>Away From Home</h1>
            <h3 className='m-6'>Our PG offers a safe, secure, and welcoming environment, where you can focus on your goals while enjoying a comfortable stay</h3>
            <button className="px-3 w-[70%] border-teal-800 bg-white text-teal-800 rounded-lg active:bg-teal-800 active:text-white active:border-white transition-colors duration-300">
              Book now
          </button>
          </div>
          <div className='w-[80%]'>
            <img src={heroimg} className='w-full h-full' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero