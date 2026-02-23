
import { NavLink, useNavigate } from 'react-router-dom'
import assetsData from "../assets/assets_frontend/assets"

const { assets } = assetsData


const Navbar = () => {
 



  const navigate=useNavigate();
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 px-8 ">
      <img
        className="w-40 cursor-pointer  md:mb-0"
        src={assets.logo}
        alt="logo"
        onClick={()=>navigate('/')}
      />

      <div className="flex flex-col md:flex-row md:items-center md:gap-8 font-medium">
        <ul className="flex flex-col md:flex-row items-start md:gap-8 font-medium md:ml-12 md:mr:3
        ">
          <li className="list-none py-2">
            <NavLink to="/" className="text-2xl text-gray-500">
              Home
            </NavLink>
            <hr className="border-gray-300 mt-1" />
          </li>

          <li className="list-none py-2">
            <NavLink to="/doctors" className="text-2xl text-gray-500">
              Doctors
            </NavLink>
            <hr className="border-gray-300 mt-1" />
          </li>

          <li className="list-none py-2">
            <NavLink to="/about" className="text-2xl text-gray-500">
              About
            </NavLink>
            <hr className="border-gray-300 mt-1" />
          </li>

          <li className="list-none py-2">
            <NavLink to="/myappointments" className="text-2xl text-gray-500">
              Myappointments
            </NavLink>
            <hr className="border-gray-300 mt-1" />
          </li>
        </ul>

        
         
      </div>
    </div>
  )
}

export default Navbar
