'use client'
import {useState , useRef, useEffect} from 'react'
import { useRouter } from 'next/navigation'

export default function MoblilMode() {
    const [isShowMobliMenu , setIsShowMobileMenu]=useState<boolean>(false)
    const [isShowRegisterLogin , setIsShowRegisterLogin]=useState<boolean>(false)
    const registerLoginRef = useRef<null | HTMLLIElement>(null);
    const menuRef = useRef<null | HTMLDivElement>(null)
    const router = useRouter()


    useEffect(()=>{

        const dropDownUlHandler = (event : MouseEvent)=>{
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setIsShowMobileMenu(false)
            }
        }

        document.addEventListener("click", dropDownUlHandler);

        return ()=> document.removeEventListener("click", dropDownUlHandler )

    },[])


    useEffect(() => {
        const dropDownHandler = (event : MouseEvent) => {
          if (registerLoginRef.current && !registerLoginRef.current.contains(event.target as Node)) {
            setIsShowRegisterLogin(false);
          }
        }
        document.addEventListener("click", dropDownHandler);
        return () => {
          document.removeEventListener("click", dropDownHandler);
        }
      }, []);

      const linkHandler = (href)=>{
        router.push(href)
        setIsShowMobileMenu(false)
      }

  return (
    <div className='w-full flex sm:hidden items-center mx-4 '>
    <div ref={menuRef}  className=' h-max w-max '>
        <div className='relative'>
    <button onClick={()=>setIsShowMobileMenu(prev=> !prev)} className=''>
    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
    </button>

    <ul className={` ${isShowMobliMenu ? "absolute" : "hidden"} top-6 w-52 h-72  overflow-y-auto p-1 bg-blue-100 border border-purple-500 rounded-lg shadow-md`} >
      <li ref={registerLoginRef} onClick={()=>setIsShowRegisterLogin(prev=>!prev)}  className='px-2 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white'>
      <span className=''  >Registeration/login
      { !isShowRegisterLogin ? <svg className='w-3 h-3 inline-block ml-8 fill-fuchsia-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path></svg>
     : <svg className='w-3 h-3 inline-block ml-8 fill-fuchsia-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>}
      </span>
      <ul className={`${isShowRegisterLogin ? 'absolute' : 'hidden'} w-max h-44  left-0 top-10  z-50 text-sm p-2 bg-blue-100 border border-purple-500 rounded-lg`}>
        <li onClick={()=>linkHandler("/register-user")} className='px-1 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white'>
            Register as customer
            </li>
        <li onClick={()=>linkHandler("/register-user/login")} className='px-1 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white'>Login as customer</li>
        <li onClick={()=>linkHandler("/register-business-owner")} className='px-1 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white'>Register as business owner</li>
        <li onClick={()=>linkHandler("/register-business-owner/login")} className='px-1 py-2 relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white'>Login as business owner</li>
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
