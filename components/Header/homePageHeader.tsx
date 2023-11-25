'use client'
import React from 'react'
import Input from '../shared/inputs/input'
import HeaderTitleLi from './headerTitleLi'
import MoblilMode from './user/moblilMode'

const HomePageHeader = () => {
  return (
    <header className='h-24 bg-gradient-to-b from-indigo-300 to-sky-100  fixed z-50 w-full flex items-center justify-center '>
      <div className='container hidden sm:flex h-full mx-auto   items-center    px-20 '>
      <div className='h-10 w-24 text-3xl text-white '>logo</div>
      <ul className='flex items-center   text-xl h-full space-x-12 w-full '>
      
        <HeaderTitleLi title="groups" options={[{id:"1" , name:"group" , path:"/"  } , {id:"2" , name:"group2" , path:"/"  } ]} />
        <HeaderTitleLi title="Nearest stores" options={[{id:"3" , name:"Ali cafe" , path:"/" } , {id:"4" , name:"joe black" , path:"/"  } ]} />
        <HeaderTitleLi title="Register/Login" options={[{id:"5" , name:"register as customer",path:"/register-user"  }, {id:"6" , name:"login as customer" , path:"/register-user/login"  } , {id:"4" , name:"register as business owner" , path:"/register-business-owner"  } ,
         {id:"12" , name:"login as business owner" , path:"/register-business-owner/login"  }]} />

      </ul>
      </div>


      <MoblilMode/>

    </header>
  )
}

export default HomePageHeader;