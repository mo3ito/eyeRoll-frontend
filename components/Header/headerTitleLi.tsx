import React from 'react'
import Link from 'next/link'
interface HeaderTitleLiProps {
  title : string,
  options : object[],
}

const HeaderTitleLi = ({title , options } : HeaderTitleLiProps) => {
  return (
    <li className='relative group hover:border-b-4  border-sky-700 h-full flex items-center justify-center cursor-pointer  w-max'>
          <div className='w-max'>
        <span className=' inline-block mr-1 '>{title}</span>
        <svg className='w-4 h-4 fill-white inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16L6 10H18L12 16Z"></path></svg>
          </div>
          <ul className='hidden group-hover:block text-[17px] absolute bg-neutral-50 shadow-md  top-20 left-0 h-max  min-w-[176px] w-max  rounded-xl '>
            {options.map(option=>
            <li key={option.id} className='px-6 py-2 hover:bg-neutral-200 text-neutral-500 hover:font-semibold '>
              <Link href={option.path}>{option.name}</Link>
              </li>
              )}
            
          
          </ul>
          
        </li>
  )
}

export default HeaderTitleLi