import React from 'react'
import { Link } from 'react-router-dom'

import Dermatologist from '../assets/assets_frontend/Dermatologist.svg'
import Gastroenterologist from '../assets/assets_frontend/Gastroenterologist.svg'
import General_physician from '../assets/assets_frontend/General_physician.svg'
import Gynecologist from '../assets/assets_frontend/Gynecologist.svg'
import Neurologist from '../assets/assets_frontend/Neurologist.svg'
import Pediatricians from '../assets/assets_frontend/Pediatricians.svg'

function Specialities() {

  const specialityData = [
    { speciality: 'Generalphysician', image: General_physician },
    { speciality: 'Gynecologist', image: Gynecologist },
    { speciality: 'Dermatologist', image: Dermatologist },
    { speciality: 'Pediatricians', image: Pediatricians },
    { speciality: 'Neurologist', image: Neurologist },
    { speciality: 'Gastroenterologist', image: Gastroenterologist },
  ];

  return (
    <div className='flex flex-col items-center md:flex-col  text-gray-500 text-3xl rounded:lg  gap-5 m-9'>
      <p className='text-gray-500 text-5xl underline my-5 py-10'>Find by speciality</p>
      <div className='flex sm:justify-center gap-5  overflow-scroll '>
      {specialityData.map((item, index) => (
        <Link className='flex flex-col items-center cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
          key={index}
          to={`/doctors/${item.speciality}`}
            >
          <img className='w-16 sm:w-24 mb:-w-2'src={item.image} alt={item.speciality} />
          <p className='text-2xl flex items-center'>{item.speciality}</p>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Specialities



