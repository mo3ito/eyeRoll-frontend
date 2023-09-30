'use client'
import {ChangeEvent, useState , Dispatch , SetStateAction} from 'react'

interface DeterminationDiscountTimeProps {
    firstTime : string ;
    lastTime : string ;
    setFirstTime : Dispatch<SetStateAction<string>> ;
    setLastTime : Dispatch<SetStateAction<string>> ;
    days : number ;
    setDays : Dispatch<SetStateAction<number>>;
    title : string
}

export default function DeterminationDiscountTime({firstTime = "8:30", setFirstTime , lastTime = "23:30" , setLastTime , days = 1 , setDays , title = "Determining the discount time"}:DeterminationDiscountTimeProps) {
   

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
    <div className=" w-full">
            <p>{title}</p>
            <div className="flex space-x-4 mt-2">
             <div><span>from</span> <input value={firstTime} onChange={firstTimeHandler} className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="text" /></div>
             <div><span>to</span> <input value={lastTime} onChange={lastTimeHandler} className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="text" /></div>
             <div><span>for</span> <input value={days} onChange={daysHandler} className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="number" /><span className="pl-1">day</span></div>
            </div>
          </div>
  )
}
