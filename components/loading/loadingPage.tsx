import React from 'react'

export default function LoadingPage() {
  return (
    <div className='w-full h-[700px] flex flex-col bg-sky-100  items-center justify-center '>
        <img className='w-48 h-48 bg-transparent' src="/images/doubleRingLoading.gif" alt="" />
        <span className='text-2xl'>loading...</span>
    </div>
  )
}
