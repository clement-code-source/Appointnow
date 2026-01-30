import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Doctorspage({ doctors = [] }) {
  const { speciality } = useParams()

  const filteredDoctors = speciality
    ? doctors.filter(
        d =>
          d.speciality.replace(/\s+/g, '').toLowerCase() ===
          speciality.toLowerCase()
      )
    : doctors

  const navigate = useNavigate()

  return (
    <div>
      <section className="w-full cursor-pointer px-5 mt-9 mb-3">
        <div className="flex flex-wrap gap-3 py-4">
          <p
            className={`border w-1/4 rounded-lg px-5 py-2 text-center ${
              speciality === 'Generalphysician'
                ? 'bg-black text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => navigate(`/doctors/Generalphysician`)}
          >
            General Physician
          </p>

          <p
            className={`border w-1/4 rounded-lg px-5 py-2 text-center ${
              speciality === 'Gynecologist'
                ? 'bg-black text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => navigate(`/doctors/Gynecologist`)}
          >
            Gynecologist
          </p>

          <p
            className={`border w-1/4 rounded-lg px-5 py-2 text-center ${
              speciality === 'Dermatologist'
                ? 'bg-black text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => navigate(`/doctors/Dermatologist`)}
          >
            Dermatologist
          </p>

          <p
            className={`border w-1/4 rounded-lg px-5 py-2 text-center ${
              speciality === 'Pediatricians'
                ? 'bg-black text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => navigate(`/doctors/Pediatricians`)}
          >
            Pediatricians
          </p>

          <p
            className={`border w-1/4 rounded-lg px-5 py-2 text-center ${
              speciality === 'Neurologist'
                ? 'bg-black text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => navigate(`/doctors/Neurologist`)}
          >
            Neurologist
          </p>

          <p
            className={`border w-1/4 rounded-lg px-5 py-2 text-center ${
              speciality === 'Gastroenterologist'
                ? 'bg-black text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => navigate(`/doctors/Gastroenterologist`)}
          >
            Gastroenterologist
          </p>
        </div>
      </section>

      <div className="w-full sm:grid grid-cols-3 m-12 md:gap-4 sm:gap-9 justify-items-center rounded-lg">
        {filteredDoctors.map(d => (
          <Link
            key={d._id}
            to={`/appointments/${d._id}`}
            className="w-64 bg-white border rounded-lg cursor-pointer hover:-translate-y-2 transition-all duration-500 block"
          >
            <img className="bg-blue-50 rounded-lg" src={d.image} alt={d.name} />
            <div className="p-4">
              <p className="text-gray-800 text-lg font-medium">{d.name}</p>
              <p className="text-gray-800 text-sm">{d.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Doctorspage
