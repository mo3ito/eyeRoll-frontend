'use client'
import React, { useState , useRef , useEffect } from 'react'
import LeftMenu from './leftMenu'
import LinkDefault from '@/components/link/linkDefault'


const LayoutDashboard = () => {
  const [showAside , setShowAside]=useState<boolean>(false)
  const leftMenuRef = useRef<HTMLDivElement | null>( null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (leftMenuRef.current && !leftMenuRef.current.contains(event.target as Node) ) {
        setShowAside(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showAside]);

  

 
  return (
   
   <div  className='w-screen bg-sky-50 bg-gradient-to-b from-indigo-300 to-sky-100 h-20 overflow-x-auto flex items-center  px-20'>
    <div className='flex  gap-x-20 '>
      <button className='iniline-block text-xl hover:scale-90 hover:duration-300  mr-8' onClick={()=>setShowAside(true)}>
      menu
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
      
      <LeftMenu leftMenuRef={leftMenuRef} setShowAside={setShowAside} showAside={showAside}  />
      </div>
  )
}

export default LayoutDashboard