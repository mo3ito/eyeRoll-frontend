'use client'
import {useContext} from 'react'
import HeaderTitleLi from '../headerTitleLi'
import { AuthContext } from '@/context/authContext'
import { useRouter } from 'next/navigation'
import useLogoutHandler from '@/hooks/useLogoutHandler'

export default function FullScreenMode() {
    const {infos , setInfos}=useContext(AuthContext)
    const router = useRouter()
  
 
    
  return (
    <div className='container hidden sm:flex h-full mx-auto   items-center    px-20 '>
      <div className='h-10 w-24 text-3xl text-white '>logo</div>
      <ul className='flex items-center   text-xl h-full space-x-12 w-full '>
      
        { infos?.username && !infos?.is_businessOwner && <li  className='relative group hover:border-b-4  border-purple-400 h-full flex items-center justify-center cursor-pointer  w-max'>
          <div className='w-max bg-indigo-300 p-2 flex items-center justify-center rounded-lg '>
        <span className=' inline-block mr-1 text-stone-600 truncate max-w-[140px]'>{infos.username}</span>
        <svg className='w-4 h-4 fill-zinc-700 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16L6 10H18L12 16Z"></path></svg>
          </div>
          <ul className={`hidden ${  'group-hover:block'} text-lg absolute border p-1 border-purple-500 bg-blue-100 z-50 shadow-md  top-24 left-0 h-max  min-w-[176px] w-max  rounded-xl `}>
          
            <li onClick={()=>useLogoutHandler(router , setInfos)} className='px-6 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>
             log out
              </li>
           
            
          
          </ul>
          
        </li>}
        {/* <HeaderTitleLi title="Nearest stores" options={[{id:"3" , name:"Ali cafe" , path:"/" } , {id:"4" , name:"joe black" , path:"/"  } ]} /> */}
        <HeaderTitleLi title="Register/Login" options={[{id:"5" , name:"register as customer",path:"/register-user"  }, {id:"6" , name:"login as customer" , path:"/register-user/login"  } , {id:"4" , name:"register as business owner" , path:"/register-business-owner"  } ,
         {id:"12" , name:"login as business owner" , path:"/register-business-owner/login"  }]} />

      </ul>
      </div>
  )
}
