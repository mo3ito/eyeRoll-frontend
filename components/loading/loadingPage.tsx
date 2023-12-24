import React from 'react'

export default function LoadingPage() {
  return (
    <div className='w-full h-screen flex flex-col bg-sky-100  items-center justify-center pb-52 '>
        <img className=' w-20 sm:w-32 md:w-40  bg-transparent' src="/images/doubleRingLoading.gif" alt="" />
        <span className=' text-lg sm:text-xl md:text-2xl'>loading...</span>
    </div>
  )
}
