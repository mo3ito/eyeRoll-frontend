'use client'
import React from 'react'
import Input from '../shared/inputs/input'
import HeaderTitleLi from './headerTitleLi'
import MoblilMode from './user/moblilMode'
import FullScreenMode from './user/fullScreenMode'

const HomePageHeader = () => {
  return (
    <header className='h-24 bg-gradient-to-b from-indigo-300 to-sky-100  fixed z-50 w-full sm:flex items-center justify-center '>
     
      <FullScreenMode/>

      <MoblilMode/>

    </header>
  )
}

export default HomePageHeader;