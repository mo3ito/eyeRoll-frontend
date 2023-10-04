'use client'
import React, { useState } from 'react'
import Accordion from '../../shared/accordion/accordion'
import LeftMenu from './leftMenu'
import LinkDefault from '@/components/link/linkDefault'


const LayoutDashboard = () => {
  const [showAside , setShowAside]=useState<boolean>(false)
 
  return (
   
   <div className='w-screen bg-sky-50 bg-gradient-to-b from-indigo-300 to-sky-100 h-20 overflow-x-auto flex items-center  px-20'>
    <div className='flex  gap-x-20 '>
      <button className='iniline-block text-xl hover:scale-90 hover:duration-300  mr-8' onClick={()=>setShowAside(true)}>
      menu
      {/* <svg className='h-6 w-6 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg> */}
      </button>
      <button className=' p-2 flex items-center space-x-2 justify-center'>
        <div className='w-8 h-8 bg-red-200 rounded-full '></div>
        <span className='inline-block'>joe black
        <svg className='w-4 h-4 inline-block ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>
        </span>
      </button>
      </div>
      <div className='ml-auto '>
        <LinkDefault className='w-12 h-12 bg-red-200 rounded-full flex items-center justify-center' href='/business-owner-dashboard' text='logo' />
      </div>
      
      <LeftMenu setShowAside={setShowAside} showAside={showAside}  />
      </div>
  










  
  )
}

export default LayoutDashboard