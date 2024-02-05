'use client'
import {useState , useCallback , ChangeEvent , useEffect, SetStateAction, Dispatch} from 'react'
import InputDefault from '../shared/inputs/inputDefault'
import { ProductsType  } from '@/types/onlineMenuBo/productsType'
import { AxiosResponse } from 'axios'

interface SearcherProps {
items: AxiosResponse<any, any> | null | undefined;
setAllItems: Dispatch<SetStateAction<ProductsType[]>>
}

export default function Searcher({items , setAllItems }: SearcherProps) {
    const [inputSearchValue , setInputSearchValue]=useState<string>('')

    const inputSearchValueHandler =useCallback((event : ChangeEvent<HTMLInputElement>)=>{
        setInputSearchValue(event.target.value)
      }
     ,[]) 
     const clearSearchHandler = ()=>{
        setInputSearchValue("")
        setAllItems(items?.data)
       }
       useEffect(()=>{
        if(inputSearchValue && items){
         const searchedValue = items?.data.filter((product : ProductsType)=> product.productName.startsWith(inputSearchValue.toLowerCase()))
          setAllItems(searchedValue)
        }
        if(inputSearchValue === ""){
            setAllItems(items?.data)
        }
       },[inputSearchValue , items])
      
  return (

    <div className='w-full h-max'>
    <div className="flex flex-col h-max gap-y-10 items-center w-full  md:mb-0  py-2     ">
    <div className='w-full  h-max '>
  <div className=' flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row '>
      <div className=' w-full sm:w-1/2 md:w-5/12 lg:w-4/12 xl:w-3/12  2xl:w-3/12  border-2 border-fuchsia-300 rounded-lg h-10   flex items-center '>
      <svg className='w-4 h-4 inline-block mx-1 fill-zinc-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          <InputDefault type='text' value={inputSearchValue} onChange={inputSearchValueHandler} placeholder='search product name' className=' text-sm sm:text-base h-full w-11/12  pr-2 outline-none  bg-transparent ' />
        </div>
       <button onClick={clearSearchHandler} className=' sm:ml-3 px-4 rounded-lg text-sm sm:text-base h-10 bg-fuchsia-300'>clear search</button>
        </div> 
        </div>
      </div>
    </div>
    
   
  )
}
