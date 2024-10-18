import React from 'react'
import Img01 from './Images/Bg1.jpeg'
import Newsletter from './Newsletter'

function About() {
  return (
    <div className=''>
      <div className="about">
        <img src={Img01} alt="" className='h-screen object-cover w-full absolute' />
        <div className="text relative md:pt-[14%] pt-[30%]">
          <h1 className='text-white font-bold md:ml-8 sm:text-center md:text-left md:text-6xl text-4xl'>Mission statement</h1>
          <p className='text-white md:text-3xl sm:px-4 sm:font-medium text-lg sm:text-center md:text-left md:w-[70%] my-10 leading-10 md:font-thin md:ml-20'>Hydratech, we believe that travel and tech can change lives. That’s why we’re dedicated to providing our customers with top-notch travel and tech services that will help them achieve their goals. Whether you’re looking to study abroad, develop cutting edge technology, or design a beautiful website, we’ve got you covered. Our team of passionate creators is always on hand to help you make the most of your travel and tech experiences.</p>
        </div>
      </div>
      <div className="mt-[16%]">
        <Newsletter />
      </div>
      <div className='lg:pt-[10%] md:pt-[20%] sm:pt-[30%] bg-black/90 lg:pb-[2%] md:pb-[5%] sm:pb-[8%]'>
        <p className='lg:text-sm md:text-sm sm:text-xs text-white text-center border-t border-white/30 pt-10 lg:mx-28'>COPYRIGHT © 2023 Hydratech NIG LTD ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  )
}

export default About