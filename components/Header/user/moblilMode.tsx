'use client'
import {useState , useRef, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import useDropDownHandler from '@/hooks/useDropDownHandler'
import Logo from '@/components/logo/logo'

export default function MoblilMode() {
    const [isShowMobliMenu , setIsShowMobileMenu]=useState<boolean>(false)
    const [isShowRegisterLogin , setIsShowRegisterLogin]=useState<boolean>(false)
    const registerLoginRef = useRef<null | HTMLLIElement>(null);
    const menuRef = useRef<null | HTMLDivElement>(null)
    const router = useRouter()
    useDropDownHandler(menuRef , setIsShowMobileMenu )


      const linkHandler = (href : any)=>{
        router.push(href)
        setIsShowMobileMenu(false)
      }

  return (
    <div className='w-full flex sm:hidden items-center justify-between px-4'>

  
    <div className='w-12  h-12 rounded-full flex items-center justify-center  bg-blue-200 '>
    <div className=''>
      <div className='w-max overflow-hidden '>
        {/* <div className='truncate text-xs px-1 max-w-[40px] inline-block'>mo3iiiiiiiiiiiiitttttttttt</div>
        <svg className='w-3 h-3 mb-2 inline-block ml-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg> */}
      </div>

    </div>
    </div>

    <Logo/>

    <div ref={menuRef}  className=' h-max w-max '>
        <div className='relative'>
    <button onClick={()=>setIsShowMobileMenu(prev=> !prev)} className=''>
    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
    </button>

    <ul className={` ${isShowMobliMenu ? "absolute" : "hidden"} top-6 w-52 h-72  overflow-y-auto p-1 bg-blue-100 border border-purple-500 rounded-lg shadow-md z-50 `} >
      <li ref={registerLoginRef} onClick={()=>setIsShowRegisterLogin(prev=>!prev)}  className='px-2 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white'>
      <span className=''  >Registeration/login
      { !isShowRegisterLogin ? <svg className='w-3 h-3 inline-block ml-8 fill-fuchsia-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path></svg>
     : <svg className='w-3 h-3 inline-block ml-8 fill-fuchsia-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>}
      </span>
      <ul className={`${isShowRegisterLogin ? 'absolute' : 'hidden'} w-max h-44  left-0 top-10  z-50 text-sm p-2 bg-blue-100 border border-purple-500 rounded-lg`}>
        <li onClick={()=>linkHandler("/register-user")} className='px-1 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white cursor-pointer'>
            Register as customer
            </li>
        <li onClick={()=>linkHandler("/register-user/login")} className='px-1 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white cursor-pointer'>Login as customer</li>
        <li onClick={()=>linkHandler("/register-business-owner")} className='px-1 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white cursor-pointer'>Register as business owner</li>
        <li onClick={()=>linkHandler("/register-business-owner/login")} className='px-1 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white cursor-pointer'>Login as business owner</li>
      </ul>
      </li>
      <li  className='px-2 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white'>groups</li>
      <li className='px-2 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white'>Nearest stores</li>
      <li></li>
    </ul>
    </div>
    </div>
   


    </div>
  )
}
