import React from 'react'

export default function Nav() {
  return (
    <div>
        <nav className=' pt-5 flex justify-between w-full  text-[#fff4cf]'>
      <div className=''>
           <h1>Mayibongwe Mahlalela</h1>
      </div>
      <div className='hidden md:inline'>
        <div className='flex items-center space-x-1 text-sm'>
          <p className='cursor-pointer hover:underline'>About</p>
          <div className='w-4 h-0.5 bg-[#fff4cf]' />
          <p>Strengths</p>
          <div className='w-4 h-0.5 bg-[#fff4cf]' />
          <p>Work</p>
          <div className='w-4 h-0.5 bg-[#fff4cf]' />
          <p>Contact Me</p>
        </div>
      </div>
          
      </nav>
    </div>
  )
}
