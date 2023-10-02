'use client'
import {ChangeEvent, useState , Dispatch , SetStateAction} from 'react'
import InformationButton from '@/components/informationButton/informationButton';
import DatesPicker from '@/components/datePicker/datePicker';
// import DatePicker, { DateObject } from "react-multi-date-picker"
// import transition from "react-element-popper/animations/transition"
// import type{Value} from "react-multi-date-picker"

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

        <InformationButton onClick={showInformation}/>
        <p className='inline-block'>{title}</p>
      </div>
  
            <div className="flex  mt-2">
              <div className='flex space-x-4 justify-center'>
              <div><span>from</span> <input value={firstTime} onChange={firstTimeHandler} className=" px-2 bg-transparent  h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="text" /></div>
             <div><span>to</span> <input value={lastTime} onChange={lastTimeHandler} className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="text" /></div>
             <div><span>for</span> <input value={days} onChange={daysHandler} className=" px-2 bg-transparent w-22 h-8 border rounded-lg border-fuchsia-300 outline-none w-16" type="number" /><span className="pl-1">day</span></div>
            </div>

              <div className=' w-max ml-auto mr-20 '>
              <DatesPicker isInline={false} isButton={false}/>
              </div>
              </div>
            
             
            {/* <div className='text-center mt-8 '>
            <span className='font-bold '> from</span> <span className='text-zinc-500 px-2'>08:00</span>  23/12/2023 <span className='font-bold pl-2'> to</span> <span className='text-zinc-500 px-2'>23:30</span>  27/12/2023 
            </div> */}
           
          </div>
  )
}
