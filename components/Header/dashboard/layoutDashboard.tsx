'use client'
import React, { useState } from 'react'
import Accordion from '../../shared/accordion/accordion'
import LeftMenu from './leftMenu'
import Navbar from './navbar'

const LayoutDashboard = () => {
  const [showAside , setShowAside]=useState<boolean>(false)
 
  return (
    // <nav className='h-28 bg-sky-500 '>
    //   <div className='w-full h-full flex items-center text-white px-8'>
    //   <button onClick={()=>setShowAside(true)}>
    //   <svg className='h-6 w-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
    //   </button>
    //   <LeftMenu setShowAside={setShowAside} showAside={showAside}  />
    //   </div>
    //  <Navbar/>
      

    // </nav>
    <div className='w-screen h-screen bg-sky-100 flex items-center justify-center '>
      <div className='w-11/12 h-5/6  rounded-xl flex gap-x-5 '>
      <section className='w-9/12  h-full rounded-xl flex justify-center flex-wrap gap-4 overflow-y-auto overflow-x-hidden px-2 py-8 bg-sky-50'>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      </section>











       <section className='w-3/12 bg-sky-50 h-full rounded-xl border-2  '>2</section>
       
      </div>

    </div>
  )
}

export default LayoutDashboard