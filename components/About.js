import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Sphere_shape from './Sphere_shape'

export default function About() {
  return (
    <div className='md:grid md:grid-flow-row md:grid-cols-12 text-white w-full   rounded '>
        <div className=' col-span-6'>
          <div className='h-96  animate-bounce'>
        
        
          <Canvas className=''>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense>
              <Sphere_shape />
            </Suspense>
            
          </Canvas>
     
       
          
        </div>
        </div>
        
        <div className='col-span-6'>
          <div className='flex space-x-3  items-center'>            
            <p className='font-bold   whitespace-nowrap'><f className='text-[#fff4cf]'> 01.</f> About Me</p>
            <div className='h-[0.100em] w-full bg-white rounded-full' />
          </div>
          <div className='text-sm p-5 '>
            <p className='text-justify'>Hi, I am Mayibongwe Mahlalela and I am a<f className='text-[#fff4cf]'> Web Developer. </f>Immersed in <f className='text-[#fff4cf]'>stylesheets </f>tweaking <f className='text-[#fff4cf]'>font</f> sizes, contemplating <f className='text-[#fff4cf]'>layouts</f> and making the web alive. I&#39;m very <f className='text-[#fff4cf]'>passionate</f>  & <f className='text-[#fff4cf]'>committed</f> to creating fluent user <f className='text-[#fff4cf]'>experiences</f> while staying <f className='text-[#fff4cf]'>fashionable.</f> </p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
          
        </div>
  )
}
