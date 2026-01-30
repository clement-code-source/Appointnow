import React from 'react'
import Header from '../components/Header'
import Specialities from '../components/Specialities'
import Topdoctors from '../components/Topdoctors'
import Des from '../components/Des'

const Homepage = () => {
  return (
    <div className='text-6xl text-blue-500'>

      <Header/>
      <Specialities/>
      <Topdoctors/>
      <Des/>
     
    </div>
  )
}

export default Homepage