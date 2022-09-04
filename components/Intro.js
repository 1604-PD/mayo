import React from 'react'

export default function Intro() {
  return (
    <div className='space-y-5'>
        <div className='font-bold text-xl  md:text-5xl lg:text-6xl text-[#fff4cf] space-y-5 '>
            
            <div className='flex-none'>
              <p>I'm</p>
              <div className='typewriter'>
                <h1 className='text-[#ffb200]'>Web Developer</h1>
              </div>
            </div>
            
            
          </div>
          <div className=' w-12/12  text-justify md:w-9/12 text-[#fff4cf]' >
            <p>I build exceptional experiencies for the web. I craft solid and scalable web products </p>
          </div>
          <div>
            <button className='bg-[#fff4cf] text-[#277bc0] hover:border-2 hover:border-[#ffb200] hover:bg-white shadow px-5 py-1 rounded'> <p >Hire Me! </p></button>
          </div>
    </div>
  )
}
