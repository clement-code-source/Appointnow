import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import assetsData from '../assets/assets_frontend/assets'
import axios from 'axios'

function Appointments({ doctors = [] }) {
  const { docID } = useParams()
  const { assets } = assetsData
 

  const [docInfo, setDocInfo] = useState({
    _id: '',
    name: '',
    image: '',
    experience: '',
    degree: '',
    speciality: '',
    about: '',
  })

  useEffect(() => {
    const foundDoctor = doctors.find(doc => doc._id === docID)
    if (foundDoctor) setDocInfo(foundDoctor)
  }, [docID, doctors])

  const [dates, setDates] = useState([])
  const [times, setTimes] = useState({})
  const [chosenDate, setChosenDate] = useState(null)
  const [chosenSlot, setChosenSlot] = useState(null)

  const daysofweek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const findDates = async () => {
    let today = new Date()
    let newDates = []
    let newTimes = {}

    for (let i = 0; i < 7; i++) {
      let currdate = new Date(today)
      currdate.setDate(today.getDate() + i)

      let startTime = new Date(currdate)
      startTime.setHours(9, 0, 0, 0)

      let endTime = new Date(currdate)
      endTime.setHours(18, 0, 0, 0)

      let slots = []
      let tempTime = new Date(startTime)

      while (tempTime < endTime) {
        slots.push(
          tempTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
        )
        tempTime.setMinutes(tempTime.getMinutes() + 60)
      }

      newDates.push(currdate)
      newTimes[currdate.toDateString()] = slots
    }

    setDates(newDates)
    setTimes(newTimes)
  }

  useEffect(() => {
    if (docInfo._id) findDates()
  }, [docInfo])

  const sendAppointment = async () => {
  if (!chosenDate || !chosenSlot) {
    window.alert("Please select a date and time slot first");
    return;
  }

  const aData = {
    docid: docInfo._id,
    name: docInfo.name,               
    speciality: docInfo.speciality,   
    date: chosenDate.toISOString().split("T")[0], 
    time: parseInt(chosenSlot.replace(":", ""))   
  }

  try {
    await axios.post("http://localhost:5000/patient/appointment", aData);
    window.alert("Appointment booked successfully");
  } catch (error) {
    console.error(error);
    window.alert("Failed to book appointment");
  }
};


  
  return (
    <div>
      <div className="flex flex-row mt-8 ml-8">
        <section className="flex flex-col items-center">
          <img
            className="w-64 bg-blue-300 rounded-lg"
            src={docInfo.image}
            alt={docInfo.name}
          />
          <button
            className="mt-8 text-blue-600 bg-green-400 w-44 h-8 rounded-lg hover:scale-105 font-semibold"
            onClick={() =>
            {sendAppointment()
            }}
          >
            BOOK APPOINTMENT
          </button>
        </section>

        <div className="w-1/2 ml-6">
          <section className="flex flex-col border rounded-lg px-20 gap-4 bg-white-100">
            <div className="flex flex-wrap flex-row items-center">
              <h1 className="text-4xl mt-2 font-bold">{docInfo.name}</h1>
              <p className="px-5 mt-3">({docInfo.experience})</p>
            </div>
            <h2 className="text-2xl">{docInfo.degree}</h2>
            <h3 className="text-2xl">{docInfo.speciality}</h3>
            <>
              <p className="py-0 font-semibold">About</p>
              <img className="w-5" src={assets.info_icon} />
              <p className="py-2">{docInfo.about}</p>
            </>
          </section>

          <section id="date" className="mt-6 grid grid-cols-2 gap-6">
  {dates.map((d, index) => (
    <div
      key={index}
      onClick={() => setChosenDate(d)}
      className={`cursor-pointer p-3 rounded-lg border ${
        chosenDate?.toDateString() === d.toDateString()
          ? 'bg-blue-500 text-white'
          : 'bg-white hover:bg-blue-100'
      }`}
    >
      <h3 className="font-semibold mb-2">
        {daysofweek[d.getDay()]}
      </h3>

      <div className="flex flex-wrap gap-3 font-semibold">
        {times[d.toDateString()].map((slot, i) => (
          <p
            key={i}
            onClick={(e) => {
             
              setChosenSlot(slot);
              setChosenDate(d);
            }}
            className={`w-32 border rounded-lg p-2 cursor-pointer ${
              chosenSlot === slot && chosenDate?.toDateString() === d.toDateString()
                ? 'bg-green-300 text-black'
                : 'bg-gray-200 text-black'
            }`}
          >
            {slot}
          </p>
        ))}
      </div>
    </div>
  ))}
</section>

        </div>
      </div>
    </div>
  )
}

export default Appointments
