import React from 'react'
import HTML from '../assets/images/strengths/html5.png'
import CSS from '../assets/images/strengths/css.png'
import JS from '../assets/images/strengths/js.png'
import PHP from '../assets/images/strengths/php.png'
import PY from '../assets/images/strengths/python.png'



import Image from 'next/image'
export default function Strengths() {
  return (
    <div className='md:grid md:grid-flow-row md:grid-cols-12'>
        <div className='col-span-6 text-white md:pr-10 pt-10'>
          <div className='flex space-x-3 p-1 items-center'>            
            <p className='font-bold   whitespace-nowrap'><f className='text-[#fff4cf]'> 02.</f> Strengths</p>
            <div className='h-[0.100em] w-full bg-white rounded-full' />
          </div>
          <div className='text-sm sm:pr-5 p-5 md:p-5 text-justify space-y-5 '>
            <p>My first encounter with HTML was back in 2017. The IT teacher had introduced the class to basic HTML and CSS as requested by the curriculum. Ever since I got aroused with curiosity, and wondered how do websites really work, I can&#39;t stop learning and building </p>
            <p className='text-justify'>I am a huge fan of Javascript. Using NextJS I can work with both the front-end and back-end to render static or dynamic content. NextJS lets me creates re-usable components, which means I write once and re-use.  </p> 
          </div>
          <div>
            <p></p>
          </div>
        
        </div>
        <div className='col-span-6 pr-5'>
          <ul>
            <li className='grid grid-flow-row items-center grid-cols-12'>
              <div className='col-span-2'>
                 <Image src={HTML} width={1000} height={1000} objectFit='contain' />
              </div>
              <div className='col-span-9 border rounded-full'> 
                <div className='w-[90%] h-2 rounded-full  bg-[#fff4cf]'/>
              </div>
              <div className='px-5 text-[#fff4cf]'>
                <p>88%</p>
              </div>
               
            </li>
            <li className='grid grid-flow-row items-center grid-cols-12'>
              <div className='col-span-2'>
                 <Image src={CSS} width={1000} height={1000} objectFit='contain' />
              </div>
              <div className='col-span-9 border rounded-full'> 
                <div className='w-[87%] h-2 rounded-full  bg-[#fff4cf]'/>
              </div>
              <div className='px-5 text-[#fff4cf]'>
                <p>87%</p>
              </div>
               
            </li>
            <li className='grid grid-flow-row items-center grid-cols-12'>
              <div className='col-span-2 p-3'>
                 <Image src={JS} width={1000} height={1000} objectFit='contain' />
              </div>
              <div className='col-span-9 border rounded-full'> 
                <div className='w-[80%] h-2 rounded-full  bg-[#fff4cf]'/>
              </div>
              <div className='px-5 text-[#fff4cf]'>
                <p>80%</p>
              </div>
               
            </li>
            <li className='grid grid-flow-row items-center grid-cols-12'>
              <div className='col-span-2 '>
                 <Image src={PHP} width={1000} height={1000} objectFit='contain' />
              </div>
              <div className='col-span-9 border rounded-full'> 
                <div className='w-[50%] h-2 rounded-full  bg-[#fff4cf]'/>
              </div>
              <div className='px-5 text-[#fff4cf]'>
                <p>50%</p>
              </div>
               
            </li>
            <li className='grid grid-flow-row items-center grid-cols-12'>
              <div className='col-span-2 '>
                 <Image src={PY} width={1000} height={1000} objectFit='contain' />
              </div>
              <div className='col-span-9 border rounded-full'> 
                <div className='w-[50%] h-2 rounded-full  bg-[#fff4cf]'/>
              </div>
              <div className='px-5 text-[#fff4cf]'>
                <p>50%</p>
              </div>
               
            </li>
        </ul>
        </div>
        
    </div>
  )
}
