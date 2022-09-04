import React from 'react'
import {BsGithub, BsPhone} from 'react-icons/bs'
import {MdEmail, MdPhone} from 'react-icons/md'

export default function Contact() {
  return (
    <div className='pb-20 text-sm'>
      <ul className='flex flex-col md:flex-row text-[#fff4cf] justify-between'>
        <li className='flex items-center space-x-4'>
          <MdPhone className='text-lg' />
          <p>+ (268) 78608308</p>
        </li>
        <li className='flex items-center space-x-4'>
          <MdEmail  className='text-lg' />
          <p>makabmahlalela@gmail.com</p>
        </li>
        
        
        
      </ul>
    </div>
  )
}
