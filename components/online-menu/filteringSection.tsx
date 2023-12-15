'use client'
import React,{useRef} from 'react'
import InputDefault from '../shared/inputs/inputDefault'
import { FilteringSectionProps } from '@/types/onlineMenuUser/onlineMenuUser'
import useDropDownHandler from '@/hooks/useDropDownHandler'



export default function FilteringSection({inputSearchValue , inputSearchValueHandler , clearSearchHandler , setIsShowFilterClick , isShowFilterClick , showFilterCondition , defaultHandler , cheapestHandler , mostExpensiveHandler }:FilteringSectionProps) {

  const containerBoxFilterRef = useRef<HTMLDivElement | null>(null)
  useDropDownHandler(containerBoxFilterRef , setIsShowFilterClick )

 
  return (
    <div className='  my-4 flex flex-col lg:flex-row items-center h-max lg:h-10 gap-x-2 max-xs:text-xs text-sm sm:text-base'>
    <div className="flex flex-col h-max gap-y-10 items-center  container w-full lg:w-2/3  md:mb-0  py-2 top-32 sticky mx-auto bg-sky-100   ">
      
     <div className=' w-full flex items-center justify-center'>
     <div className=' w-full bg-sky-50 border-2 border-fuchsia-300 rounded-lg h-10   flex items-center  '>
    <svg className='w-4 h-4 inline-block mx-1 fill-zinc-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
      <InputDefault type='text' value={inputSearchValue} onChange={inputSearchValueHandler} placeholder='search product name' className=' text-sm sm:text-base h-full w-11/12  pr-2 outline-none  bg-transparent ' />
    </div>
    <button onClick={clearSearchHandler} className=' max-xs:w-20 text-xs ml-2 sm:ml-3 px-4 rounded-lg  sm:text-base h-10 w-32 sm:w-36 bg-fuchsia-300 '>clear search</button>
    </div> 
      </div> 
  
    <div ref={containerBoxFilterRef} className='relative w-full  h-10    lg:w-1/3   border bg-sky-50 border-fuchsia-400 rounded-lg '>
    <div onClick={()=>setIsShowFilterClick(prev=> !prev)} className='  h-full ml-auto bg rounded-lg flex items-center justify-between px-2 cursor-pointer'>
    <p className='truncate w-full '> filter : <span className='font-semibold'>{showFilterCondition}</span> </p>
    { isShowFilterClick ? <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>
   : <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path></svg>}
    </div>
    <ul className={`${isShowFilterClick ? 'absolute' : 'hidden' } w-full border shadow-md border-fuchsia-400 h-max bg-sky-50 rounded-lg p-1 z-30`}>
    <li onClick={defaultHandler} className='w-full h-10 pt-2 px-2 cursor-pointer hover:bg-fuchsia-400'>no filter</li>
    <li onClick={cheapestHandler}  className='w-full h-10 pt-2 px-2 cursor-pointer hover:bg-fuchsia-400'>cheapest</li>
    <li onClick={mostExpensiveHandler} className='w-full h-10 pt-2 px-2 cursor-pointer hover:bg-fuchsia-400'>most expensive</li>
    
    </ul>

    </div>
  
  
  </div>
  )
}
