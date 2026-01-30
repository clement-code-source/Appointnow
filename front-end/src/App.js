import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import Doctorspage from './pages/Doctorspage'
import Aboutpage from './pages/Aboutpage'
import Contactpage from './pages/Contactpage'
import Loginpage from './pages/Loginpage'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

import assetsData from './assets/assets_frontend/assets'
import Myappointments from './pages/Myappointments'




function App() {
  const {doctors}=assetsData;


  return (
    <BrowserRouter> 
     <div className='margin-auto px-3  py-5  '>
      <Navbar/>
      

     
      
       <Routes>
        
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/doctors" element={<Doctorspage doctors={doctors}/>}/>
        <Route path="/doctors/:speciality" element={<Doctorspage doctors={doctors}/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
      
       <Route path='/myappointments' element={<Myappointments/>}/>
        <Route path="/appointments/:docID" element={<Appointments doctors={doctors} />}/>
        
       </Routes>

      
       
     </div>
     <Contact/>
    </BrowserRouter> 
    
  
  )
}

export default App