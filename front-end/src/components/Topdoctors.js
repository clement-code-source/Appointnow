import React from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import doc1 from '../assets/assets_frontend/doc1.png'
import doc2 from '../assets/assets_frontend/doc2.png'
import doc3 from '../assets/assets_frontend/doc3.png'

function Topdoctors() {
  const navigate=useNavigate();  
  const doctors = [
    { _id:'doc1',image: doc1, name: 'Dr. Arjun', speciality: 'General physician' },
    {_id:'doc2', image: doc2, name: 'Dr.Emily Larson', speciality: 'Pediatricians' },
    { _id:'doc3',image: doc3, name: 'Dr.Sarah Patel', speciality: 'Gastroenterologist' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl  md:text-3xl font-bold text-center  py-12">
        WE PROVIDE THE BEST DOCTORS <br />
        THE INDUSTRY OFFERS
      </h2>

      <div className="flex flex-col md:flex-row  gap-4 py-6 justify-center">
        {doctors.map((item, index) => (
          <div onClick={()=>{navigate(`/appointments/${item._id}`)}}
            key={index}
            className="
              bg-white 
              border 
              rounded-2xl 
              
              md:w-80
              py-12 
              flex 
              flex-col 
              items-center 
              text-center
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-contain mb-4"
            />

            <p className="text-lg font-semibold text-gray-800">
              {item.name}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {item.speciality}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topdoctors
