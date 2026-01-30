import React from 'react'
import assetsData from '../assets/assets_frontend/assets'

function Header() {
  const { assets } = assetsData

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20 ">

   
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        
        <p className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold leading-tight">
          Book appointments <br /> with trusted doctors
        </p>

        <img src={assets.group_profiles} alt="profiles" />

        <div className='flex items-center gap2 bg-white px-8 py-3 rounded full hover:scale-105'> 
            <a
            href="/doctors"
            className="flex items-center gap-2 text-grey text-base font-medium hover:underline"
            >
            Book appointments
            <img src={assets.arrow_icon} alt="arrow" />
            </a>
        </div>
      
      </div>

   
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 rounded-lg"
          src={assets.header_img}
          alt="header"
        />
      </div>
    </div>
  )
}

export default Header
