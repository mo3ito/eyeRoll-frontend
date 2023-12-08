'use client'
import {useState } from 'react'

import Logo from '@/components/logo/logo'
import RightMenu from '@/components/asideMenu/rightMenu'

export default function MoblilMode() {
  
  


 

    const[showAside, setShowAside] = useState<boolean>(false);
   
  return (
    <div className='relative h-max'>
    <div className='w-full flex sm:hidden items-center justify-between px-4 '>

  
    <div className='w-12 mt-4 h-12 rounded-full flex items-center justify-center  bg-blue-200 '>
    <div className=''>
      <div className='w-max overflow-hidden '>
      </div>
    </div>
    </div>


    <Logo/>
    <button onClick={()=>setShowAside(true)} className='pt-2'>
    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
    </button>
    
   


    </div>
   <RightMenu showAside={showAside}  setShowAside={setShowAside} />
    </div>
  )
}
