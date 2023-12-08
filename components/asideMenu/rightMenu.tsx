'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import CloseIcon from '../shared/icon/closeIcon'
import AccordionBox from '../shared/accordion/accordionBox'
import userAsideMenuItems from '@/routes/userRoutes/userAsideMenuItems'

interface RightMenuProps {
    showAside: boolean;
    setShowAside: Dispatch<SetStateAction<boolean>>

}

export default function RightMenu({showAside , setShowAside} : RightMenuProps) {
    console.log(showAside);
    
  return (
    <div className={`${showAside ? 'right-0': '-right-64'} w-64  h-screen sm:hidden  bg-gray-100 border-2 border-fuchsia-300 absolute top-0  rounded-l-3xl shadow-lg transition-all z-50  overflow-y-auto`}>
        <CloseIcon classNameButton="absolute left-4 top-4  " classNameSvg="w-6 h-6  fill-fuchsia-500  " onClick={() => setShowAside(false)}/>
        <AccordionBox className="w-full h-max mt-16 last:border-b-2 " accordions={userAsideMenuItems} setShowAside={setShowAside} />
    </div>
  )
}
