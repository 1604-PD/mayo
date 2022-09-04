import React from 'react'
import Image from 'next/image'
import Auth from '../assets/images/technologies/auth.png'
import Cloudinary from '../assets/images/technologies/cloudinary.png'
import Figma from '../assets/images/technologies/figma.png'
import Github from '../assets/images/technologies/github.png'
import Mongodb from '../assets/images/technologies/mongodb.png'
import Next from '../assets/images/technologies/nextjs.png'
import Node from '../assets/images/technologies/nodejs.png'
import Reactjs from '../assets/images/technologies/react.png'
import Sql from '../assets/images/technologies/sql.png'
import Tailwind from '../assets/images/technologies/tailwind.png'
import Wordpress from '../assets/images/technologies/wordpress.png'


export default function Technologies() {
  return (
    <div className='md:grid grid-flow-row grid-cols-12 mt-20 '>
        <div className='md:hidden col-span-6 text-white'>
            <div className='flex space-x-3 p-1 items-center'>            
            <p className='font-bold   whitespace-nowrap'><f className='text-[#fff4cf]'> </f>03. Tools</p>
            <div className='h-[0.100em] w-full bg-white rounded-full' />
          </div>
          <div className='text-sm  p-5 md:p-5 text-justify space-y-5 '>
            <p>My Web Development process involves the use of a span of Web Tools and Technologies which guarantee the efficient production of web products. </p>
            <p className='text-justify'></p> 
          </div>
          <div>
            <p></p>
          </div>
        </div>
        <div className='col-span-6 pr-10'>
            <ul className='flex justify-evenly space-x-5'>
                <li>
                    <Image src={Auth} width={500} height={500} objectFit='contain' />
                </li>
                <li>
                    <Image src={Cloudinary} width={500} height={500} objectFit='contain' />
                </li>
                <li>
                    <Image src={Github} width={500} height={500} objectFit='contain' />
                </li>
                <li>
                    <Image src={Mongodb} width={500} height={500} objectFit='contain' />
                </li>
                
            </ul>
            <ul className='flex space-x-5'>
                <li>
                    <Image src={Next} width={500} height={500} objectFit='contain' />
                </li>
                <li>
                    <Image src={Node} width={500} height={500} objectFit='contain' />
                </li>
                <li>
                    <Image src={Reactjs} width={500} height={500} objectFit='contain' />
                </li>
                <li>
                    <Image src={Tailwind} width={500} height={500} objectFit='contain' />
                </li><li>
                    <Image src={Wordpress} width={500} height={500} objectFit='contain' />
                </li>
                
            </ul>
        </div>
        <div className='col-span-6 hidden md:inline text-white'>
            <div className='flex space-x-3 p-1 items-center'>            
            <p className='font-bold   whitespace-nowrap'><f className='text-[#fff4cf]'> </f>03. Tools</p>
            <div className='h-[0.100em] w-full bg-white rounded-full' />
          </div>
          <div className='text-sm sm:pr-5 py-5 md:p-5 text-justify space-y-5 '>
            <p>My Web Development process involves the use of a span of Web Tools and Technologies which guarantee the efficient production of scalable web products. </p>
            <p className='text-justify'></p> 
          </div>
          <div>
            <p></p>
          </div>
        </div>
    </div>
  )
}
