'use client'
import React from 'react'
import Input from '../shared/input'
import HeaderTitleLi from './headerTitleLi'

const HomePageHeader = () => {
  return (
    <header className='h-20   bg-purple-500 flex items-center justify-center '>
      <div className='container h-full mx-auto  flex items-center  text-white px-20 '>
      <div className='h-10 w-24 text-3xl  '>logo</div>
      <ul className='flex items-center   text-xl h-full space-x-12 w-full'>
        {/* <li className='relative group hover:border-b-4 hover:font-semibold border-white h-full flex items-center justify-center cursor-pointer tracking-widest'>
          <div className=''>
        <span className=' inline-block mr-1 '>Grouping</span>
        <svg className='w-4 h-4 fill-white inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16L6 10H18L12 16Z"></path></svg>
          </div>
          <ul className='hidden group-hover:block text-xl absolute bg-purple-400 top-20 left-0 h-max w-44 '>
            <li className='p-1 hover:bg-purple-600'>group 1</li>
            <li className='p-1 hover:bg-purple-600'>group 2</li>
            <li className='p-1 hover:bg-purple-600'>group 3</li>
          </ul>
          
        </li> */}
        <HeaderTitleLi title="groups" options={[{id:"1" , name:"group" } , {id:"2" , name:"group2" } ]} />
        <HeaderTitleLi title="Nearest stores" options={[{id:"3" , name:"Ali cafe" } , {id:"4" , name:"joe black" } ]} />
        <HeaderTitleLi title="Register/Login" options={[{id:"5" , name:"register/login as customer" } , {id:"4" , name:"register/login as business owner" } ]} />
       
       
        {/* <li className='group/parent relative   h-full border-b pr-3 hover:border-b-4'>
        <span className=' inline-block mr-1 '>Grouping</span>
        <svg className='w-4 h-4 fill-white inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16L6 10H18L12 16Z"></path></svg>
        <div className='w-44 h-22 bg-purple-300 hidden group-hover/parent:block   absolute top-8 -left-3'>
yyyyyyyyyyyyy
        </div>
       
        </li>
        <li className='group/parent relative hover:border-b  h-full  border-b'>
        <span className=' inline-block mr-1 '>Grouping</span>
        <svg className='w-4 h-4 fill-white inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16L6 10H18L12 16Z"></path></svg>
        <div className='w-44 h-22 bg-purple-300 hidden group-hover/parent:block   absolute top-8 -left-3'>
yyyyyyyyyyyyy
        </div>
        {/* <p className='hidden group-hover/parent:block absolute top-2'>ggjgggg</p> */}
        {/* </li> */}
      
      </ul>
      </div>
    </header>
  )
}

export default HomePageHeader;