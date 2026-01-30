import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Myappointments() {
  const [booked, setBooked] = useState([])

  const getAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/patient/myappointments")
      setBooked(res.data.results) 
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <div className='flex flex-col items-center gap-5 mt-9'>
      {booked.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        booked.map((item, index) => (
          <div
            key={item.id } 
            className="
              bg-white 
              border 
              rounded-2xl 
              md:w-1/2
              py-12 
              flex 
              flex-wrap
              flex-col
              items-center 
              text-center
              p-4
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
            "
          >
            
            
            <section className='flex flex-row gap-5 mb-4 '>
                <p className="text-lg font-semibold text-gray-800">
                {item.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                ({item.speciality})
                </p>
            </section>
           
           <section className='flex flex-row gap-5 items-center'>
            <p className='text-red-600'>Date:</p> <p className='text-2xl text-green-300'>{item.date}</p>
            <p className='text-red-600'> Time</p><p className='text-2xl text-green-300'>{item.time}</p>
           </section> 
          </div>
        ))
      )}
    </div>
  )
}

export default Myappointments

