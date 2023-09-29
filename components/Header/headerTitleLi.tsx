'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HeaderTitleLiProps } from '@/types/headerTitleLiProps/headerTitleLiProps'


const HeaderTitleLi = ({title , options } : HeaderTitleLiProps) => {
  const [showBox , setShowBox]=useState(true)
  const router = useRouter()
  const linkHandler =(path : string)=>{
    router.push(path)
   setShowBox(false)
  }
  return (
    <li onMouseEnter={()=>setShowBox(true)} className='relative group hover:border-b-4  border-purple-400 h-full flex items-center justify-center cursor-pointer  w-max'>
          <div className='w-max'>
        <span className=' inline-block mr-1 text-stone-600'>{title}</span>
        <svg className='w-4 h-4 fill-zinc-700 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16L6 10H18L12 16Z"></path></svg>
          </div>
          <ul className={`hidden ${ showBox && 'group-hover:block'} text-lg absolute border p-1 border-purple-500 bg-blue-100 z-50 shadow-md  top-24 left-0 h-max  min-w-[176px] w-max  rounded-xl `}>
            {options.map(option=>
            <li onClick={()=>linkHandler(option.path)} key={option.id} className='px-6 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>
              {option.name}
              </li>
              )}
            
          
          </ul>
          
        </li>
  )
}

export default HeaderTitleLi