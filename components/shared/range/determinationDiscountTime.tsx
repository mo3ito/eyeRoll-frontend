'use client'
import {ChangeEvent, useState , Dispatch , SetStateAction} from 'react'

interface DeterminationDiscountTimeProps {
    firstTime : string ;
    lastTime : string ;
    setFirstTime : Dispatch<SetStateAction<string>> ;
    setLastTime : Dispatch<SetStateAction<string>> ;
    days : number ;
    setDays : Dispatch<SetStateAction<number>>;
    title : string,
    showInformation:()=> void
}

export default function DeterminationDiscountTime({firstTime = "8:30", setFirstTime , lastTime = "23:30" , setLastTime , days = 1 , setDays , title = "Determining the discount time" , showInformation}:DeterminationDiscountTimeProps) {
   

    const firstTimeHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setFirstTime(event.target.value)
    }

    const lastTimeHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setLastTime(event.target.value)
    }

    const daysHandler = (event : ChangeEvent<HTMLInputElement>)=>{
        setDays(Number(event.target.value))
    }

   
    

  
  return (
    <div className=" w-full bg-indigo-100 p-3 rounded-xl">
   
      <div>
      <button title='click for information' onClick={showInformation} >
        <svg className='w-4 h-4 inline-block mb-1 mr-1 fill-pink-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path></svg>
        </button>
        <p className='inline-block'>{title}</p>
      </div>
            
            <div className="flex space-x-4 mt-2 justify-center">
             <div><span>from</span> <input value={firstTime} onChange={firstTimeHandler} className=" px-2 bg-transparent  h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="text" /></div>
             <div><span>to</span> <input value={lastTime} onChange={lastTimeHandler} className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="text" /></div>
             <div><span>for</span> <input value={days} onChange={daysHandler} className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="number" /><span className="pl-1">day</span></div>
            </div>
          </div>
  )
}
