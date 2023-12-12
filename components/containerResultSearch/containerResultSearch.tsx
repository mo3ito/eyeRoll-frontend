'use client'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import useDropDownHandler from '@/hooks/useDropDownHandler'
import getter from '@/services/getter'
import { BASE_URL_SEARCH_INFORMATION } from '@/routeApi/baseUrlNextApi'

interface resultSearchProps{
_id:string;
brand_name:string
}

export default function ContainerResultSearch() {
    const [inputValue , setInputValue]=useState<string>("")
    const [resultSearch , setResultSearch]=useState<resultSearchProps[]|[]>([])
    const [isShowResultBox , setIsShowResultBox]=useState<boolean>(false)
    const boxSearchRef = useRef<HTMLDivElement | null>(null)
    useDropDownHandler(boxSearchRef , setIsShowResultBox)

   
    const changeInputValueHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event?.target.value)
    }
    useEffect(()=>{
        const searcher = async ()=>{
            if(inputValue.trim() !== ""){
                try {
                 const response =  await getter(`${BASE_URL_SEARCH_INFORMATION}/?input_value=${inputValue}`)
                 console.log(response);
                 if(response?.status === 200 ){
                    
                    setResultSearch(response.data)
                 }
                 
                } catch (error) {
                    console.error(error)
                    
                }
            }else{
            setResultSearch([])
           setIsShowResultBox(false)
            }
        }
        searcher()
    },[inputValue])


    useEffect(()=>{
        if(resultSearch.length >0){
            setIsShowResultBox(true)
        }else{
            setIsShowResultBox(false)
        }
    },[resultSearch])
    console.log(inputValue);
    console.log(resultSearch);
    
    

  return (
<div className='w-full relative'>
	<div ref={boxSearchRef} className='w-full border border-indigo-600 rounded-lg bg-sky-50 flex items-center max-xs:h-8 h-10 md:h-12 '>
    <svg className=' w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-auto ml-1 fill-zinc-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
     <input value={inputValue} onChange={changeInputValueHandler} placeholder='search' className='w-full h-full outline-none px-2 bg-transparent text-sm md:text-base lg:text-lg  text-zinc-500' type="text" />
    </div>

	<div  className={`${isShowResultBox ? "block" : "hidden"} w-full h-max bg-sky-50 border border-indigo-200 shadow-lg`}>
	<ul className='w-full  h-max max-h-72 overflow-y-auto p-1 text-sm md:text-base xl:text-lg '>
	{ resultSearch.map(item=>
    <li key={item._id} className='w-full px-1 md:px-2  max-xs:h-7 h-10 md:h-12 max-xs:pt-1 pt-[10px]   hover:bg-blue-200 hover:opacity-100 overflow-hidden  cursor-pointer opacity-70 truncate'>
	<svg className='w-4 h-4 xl:w-5 xl:h-5 mr-1  inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
	{item.brand_name}</li>
    ) }
	</ul>

	</div>
	</div>
  )
}
