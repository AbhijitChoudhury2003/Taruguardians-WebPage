import React from 'react'
import Logo from '../../../../assets/taruguardians.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex sticky top-0 z-50 bg-[#20BD8A] h-16 items-center justify-between text-sm sm:text-lg lg:text-xl lg:pl-14 lg:pr-40 px-3 md:px-14 mb-6 sm:mb-8 lg:mb-16'>
      <img className=' h-[90%] pl-2' src={Logo} alt="logo" />
      <Link to="/" className=' leading-tight font-medium px-1 sm:px-4 py-2 hover:cursor-pointer hover:bg-white hover:rounded-3xl '>HOME</Link>
      <Link to="/event" className=' decoration-slate-600  leading-tight font-poppins px-1 sm:px-4 py-2 hover:cursor-pointer hover:bg-white hover:rounded-3xl '>EVENTS</Link>
      <Link to="/team" className=' leading-tight font-poppins px-1 sm:px-4 py-2 hover:cursor-pointer hover:bg-white hover:rounded-3xl  '>TEAM</Link>
      <Link to="/about" className="leading-tight font-poppins px-1 sm:px-4 py-2 hover:cursor-pointer hover:bg-white hover:rounded-3xl ">ABOUT</Link>
      <Link to="/contact" className=' leading-tight font-poppins  px-1 sm:px-4 py-2 hover:cursor-pointer hover:bg-white hover:rounded-3xl '>CONTACT</Link>
    </div>
  )
}

export default Navbar
