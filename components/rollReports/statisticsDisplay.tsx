import React from 'react'

export default function StatisticsDisplay() {
  return (
  
    <>
    <div className=' md:w-56  xl:w-72 xl:h-[360px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>12345</div>
    <svg className='w-20 h-20 fill-blue-500'   version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="m640.92 389-116.56-82.742c-36.07-24.465-78.586-37.68-122.17-37.977-45.773-0.95312-88.414 10.902-120.03 33.348l-123.08 87.371c-3.5625 2.5312-5.6797 6.6289-5.6797 10.996 0 4.3711 2.1172 8.4688 5.6797 10.996l116.56 82.73c36.07 24.469 78.586 37.688 122.17 37.977 1.6797 0.039063 3.3555 0.054687 5.0312 0.054687 43.875 0 84.551-11.785 115-33.41l123.09-87.352c3.5625-2.5273 5.6758-6.625 5.6758-10.996 0-4.3672-2.1133-8.4648-5.6758-10.996zm-138.7 87.363c-55.414 39.34-152.03 37.219-210.98-4.6289l-101.06-71.738 107.59-76.367c55.414-39.336 152.03-37.219 210.98 4.6289l101.06 71.738zm-102.22-160.41c-22.289 0-43.668 8.8555-59.426 24.617-15.762 15.758-24.617 37.137-24.617 59.426s8.8555 43.664 24.617 59.426c15.758 15.758 37.137 24.613 59.426 24.613s43.664-8.8555 59.426-24.613c15.758-15.762 24.613-37.137 24.613-59.426-0.023437-22.281-8.8867-43.645-24.645-59.398-15.754-15.758-37.113-24.617-59.395-24.645zm0 141.11c-15.137 0-29.652-6.0117-40.355-16.715-10.703-10.703-16.715-25.219-16.715-40.352 0-15.137 6.0117-29.652 16.715-40.355s25.219-16.715 40.355-16.715c15.133 0 29.648 6.0117 40.352 16.715 10.703 10.703 16.715 25.219 16.715 40.355-0.015625 15.129-6.0352 29.633-16.734 40.332s-25.203 16.719-40.332 16.734z"/>
    </svg>
    <p className='w-full h-max text-center font-semibold'>Number of views of my account</p>
    </div>

    <div className='md:w-56  xl:w-72 xl:h-[360px]   bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>12345</div>
    <svg className='w-20 h-20 fill-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
    <p className='w-full h-max text-center font-semibold'>Number of people who added me to their favorites</p>
    </div>

    <div className='w-72 h-[360px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>12345</div>
    <div>
    <svg  className='inline-block h-12 w-12 fill-yellow-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
    <svg  className='inline-block h-14 w-14 fill-yellow-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
    <svg  className='inline-block h-12 w-12 fill-yellow-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
    </div>
    <p className='w-full h-max text-center font-semibold'>The number of people who get a discount</p>
    </div>

    <div className='w-72 h-[360px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>25128</div>
    
    <svg className='w-16 h-16 fill-zinc-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
    
    <p className='w-full h-max text-center font-semibold'>The number of people who have searched me</p>
    </div>

    <div className='w-72 h-[360px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>12519</div>
    <svg className="w-16 h-16 fill-none stroke-zinc-700"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
    <p className='w-full h-max text-center font-semibold'>Number of people who have used my QR</p>
    </div>
    
    <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 text-center pt-44 font-semibold text-lg'>coming soon</div>
    <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 text-center pt-44 font-semibold text-lg'>coming soon</div>
    <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 text-center pt-44 font-semibold text-lg'>coming soon</div>
    
    </>
  
  )
}
