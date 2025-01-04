import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='text-2xl px-[10%] py-[2%] flex items-center
    justify-between'>
      <div className='text-4xl font-bold'>RahuL</div>
      <div className='nav-center flex
    justify-between gap-4 text-base font-semibold '>
        <div>Home</div>
        <div>About Me</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </div>
      <button className='nav-button px-4 rounded-full text-sm bg-red-300 bg-gradient-to-r from-pink-500 to-orange-500 to-90% '>Connect with me</button>
    </div>

  )
}

export default Navbar
