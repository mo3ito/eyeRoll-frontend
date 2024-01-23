
'use client'
import {useRef} from 'react'
import linkHandler from '@/utils/linkHandler'
import logoutHandler from '@/utils/logoutHandler'
import Logo from '@/components/logo/logo'
import useDropDownHandler from '@/hooks/useDropDownHandler'
import { BoxMenuProfileAdminPropsType } from '@/types/admin/adminTypes'



export default function BoxMenuProfileAdmin({setShowAside , setShowBox  , showBox  , router , setInfos , infos }:BoxMenuProfileAdminPropsType) {

  const menuBoxRef = useRef<HTMLDivElement | null>(null)
  useDropDownHandler(menuBoxRef , setShowBox)
    console.log(showBox);
    

  return (
    <header className='  h-24 bg-gradient-to-b from-indigo-300 to-sky-100 w-full fixed  top-0 z-50  flex items-center justify-center '>
    <div className=' w-full h-full  mx-auto  flex  items-center justify-between max-xs:px-2 px-4 sm:px-10 '>
    <div className='flex items-center   h-full space-x-3  w-full '>
        <button
          className="iniline-block text-xl   md:mr-8"
          onClick={() => setShowAside(true)}
        >
          <svg
            className="size-5 md:w-7 md:h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
        <div ref={menuBoxRef} className="w-max max-w-[200px] h-max relative bg-indigo-200  mt-1  rounded-md">
          <div onClick={()=>setShowBox(prev=> !prev)} className=" flex size-full items-center justify-center p-1 cursor-pointer ">
            <img className=" w-10 h-10 sm:w-12 sm:h-12 object-cover border bg-sky-100  rounded-full inline-block" src={infos?.profile_image_path ? infos.profile_image_path : "/images/defaultPerson.png"} alt="" />
            <p className="inline-block ml-2 truncate w-max text-stone-600 max-w-[110px] text-sm  md:text-lg  pr-2">{ infos?.is_admin && infos?.username}</p>
          </div>
          <div className={` ${showBox ? 'absolute' : 'hidden'}  bg-blue-100 max-xs:w-52 w-60  h-max top-12 sm:top-14  border rounded-lg border-purple-400`}>
          <ul className="w-full h-max  max-xs:text-xs text-sm sm:text-base p-1 shadow-md">
          <li onClick={()=>logoutHandler(router , setInfos)} className=' cursor-pointer px-2 py-2 hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>log out</li>
          </ul>
          </div>
 
        </div>
 
    </div>
    <Logo className='h-max  w-max' href="/business-owner-dashboard"/>
    </div>
    </header>
 
  )
}
