import React from 'react'

function Contact() {
  return (
 
      <div className="max-w-6xl mx-auto  text-base bg-white mt-32 py-14 px-6 md:px-16">
         
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-14">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600">
          
         
          <div className="space-y-4">
            <p>
              <span className="font-semibold text-gray-900">Phone</span><br />
              +91 98765 43210<br/>
              +91 87654 32109<br/>
              +91 76543 21098<br /><br/>
            </p>

            <p>
              <span className="font-semibold text-gray-900">Email</span><br />
              doctoroo@gmail.com
            </p>
          </div>

         
          <div className="space-y-4">
            <p>
              <span className="font-semibold text-gray-900">Social Media</span><br />
              Follow us on @doctoroo_001 on instagram
            </p><br/>

            <p>
              <span className="font-semibold text-gray-900">Address</span><br />
              2nd Floor, HealthCare Plaza,<br />
              MG Road, Bengaluru,<br />
              Karnataka, India
            </p>
          </div>

        </div>

      </div>
   
  )
}

export default Contact
