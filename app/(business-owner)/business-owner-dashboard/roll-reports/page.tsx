'use client'
import React,{useState} from 'react'
import DatesPicker from '@/components/datePicker/datePicker';
import Rate from '@/components/shared/rate/rate';
import "react-datepicker/dist/react-datepicker.css";

export default function RollReports() {

  
 
  
  return (
    <div className='w-screen h-[930px] bg-sky-100 flex items-center justify-center absolute'>
      <div className='w-11/12 h-5/6  rounded-xl flex gap-x-5 '>
      <section className='w-10/12  h-full rounded-3xl flex justify-center flex-wrap gap-4 overflow-y-auto overflow-x-hidden px-2 py-8 bg-sky-50'>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center  flex-col py-10 px-4'>
      
      <span className='text-4xl font-semibold'>12345</span>
      <svg className='w-20 h-20' fill="#000000" width="800px" height="800px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="m640.92 389-116.56-82.742c-36.07-24.465-78.586-37.68-122.17-37.977-45.773-0.95312-88.414 10.902-120.03 33.348l-123.08 87.371c-3.5625 2.5312-5.6797 6.6289-5.6797 10.996 0 4.3711 2.1172 8.4688 5.6797 10.996l116.56 82.73c36.07 24.469 78.586 37.688 122.17 37.977 1.6797 0.039063 3.3555 0.054687 5.0312 0.054687 43.875 0 84.551-11.785 115-33.41l123.09-87.352c3.5625-2.5273 5.6758-6.625 5.6758-10.996 0-4.3672-2.1133-8.4648-5.6758-10.996zm-138.7 87.363c-55.414 39.34-152.03 37.219-210.98-4.6289l-101.06-71.738 107.59-76.367c55.414-39.336 152.03-37.219 210.98 4.6289l101.06 71.738zm-102.22-160.41c-22.289 0-43.668 8.8555-59.426 24.617-15.762 15.758-24.617 37.137-24.617 59.426s8.8555 43.664 24.617 59.426c15.758 15.758 37.137 24.613 59.426 24.613s43.664-8.8555 59.426-24.613c15.758-15.762 24.613-37.137 24.613-59.426-0.023437-22.281-8.8867-43.645-24.645-59.398-15.754-15.758-37.113-24.617-59.395-24.645zm0 141.11c-15.137 0-29.652-6.0117-40.355-16.715-10.703-10.703-16.715-25.219-16.715-40.352 0-15.137 6.0117-29.652 16.715-40.355s25.219-16.715 40.355-16.715c15.133 0 29.648 6.0117 40.352 16.715 10.703 10.703 16.715 25.219 16.715 40.355-0.015625 15.129-6.0352 29.633-16.734 40.332s-25.203 16.719-40.332 16.734z"/>
      </svg>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa modi dolorum non pariatur nisi debitis voluptatibus rerum. Excepturi cupiditate quos, voluptatibus soluta sit ut a facilis laudantium qui. Consectetur, ratione!</p>
      </div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      <div className='w-72 h-[360px] bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200'>sajad jaghparvar</div>
      </section>

       <section className='w-2/12 bg-sky-50 rounded-3xl border-2  '>
     <DatesPicker/>
     <Rate/>
       </section>
       
       
      </div>

    </div>
  )
}
