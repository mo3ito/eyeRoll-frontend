'use client'
import React, { useState } from 'react'
import Accordion from '../../shared/accordion/accordion'
import LeftMenu from './leftMenu'

const LayoutDashboard = () => {
  const [showAside , setShowAside]=useState<boolean>(false)
 
  return (
    <nav className='h-20 bg-sky-500 '>
      <div className='w-full h-full flex items-center text-white px-8'>
      <button onClick={()=>setShowAside(true)}>
      <svg className='h-6 w-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
      </button>
      <LeftMenu setShowAside={setShowAside} showAside={showAside}  />
      </div>
      

    </nav>
  )
}

export default LayoutDashboard