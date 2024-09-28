import React from 'react'
import LwFullW from '../assets/LwFullW.png'

function Hero() {
  return (
    <div className="h-screen w-full bg-transparent flex flex-col justify-between p-9 items-center">
      {/* Navbar content */}
      <div className="w-full flex justify-center gap-6 items-center py-4">
        <button className="text-white">About</button>
        <button className="text-white">Contacts</button>
        <button className="text-white">FAQ</button>
      </div>

      {/* Main content in the center */}
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-white mb-4">Ideathon 1.0</h1>
        <h1 className="text-cyan-500 mb-5">Spreading the positivity</h1>
        <button className="bg-transparent mt-7 text-cyan-500 border-2 border-cyan-300 font-bold py-2 px-4 rounded-md hover:shadow-[0_0_25px_rgb(6,182,212)] transition-all">
          Explore Now
        </button>
      </div>

      {/* Footer content */}
      <div className="flex flex-col items-center">
        <h1 className="text-white text-xl mt-14">Proudly presented by</h1>
        <img src={LwFullW} alt="Logo" className="w-40 h-auto mt-3" />
      </div>
    </div>
  )
}

export default Hero
