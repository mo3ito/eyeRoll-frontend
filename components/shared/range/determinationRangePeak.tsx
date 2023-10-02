import React from 'react'
import Range from './range'
import TimeSetterInput from '../timeSetterInput/timeSetterInput'
import InformationButton from '@/components/informationButton/informationButton'

export default function DeterminationRangePeak({
setMinValuePeak,
setMaxValuePeak,
minValuePeak,
maxValuePeak,
isChecked,
setIsChecked,
title,
showInformation,
firstHourPeak,
setFirstHourPeak,
firstMinsPeak,
setFirstMinsPeak,
lastHourPeak,
setLastHourPeak,
lastMinsPeak,
setLastMinsPeak,

}) {

        const minValueHandler = (event)=>{
            setMinValuePeak(event.target.value)
        }
        const maxValueHandler = (event)=>{
            setMaxValuePeak(event.target.value)
        }

  return (
    <>
  
    <div className={` w-full bg-indigo-100 h-44 my-2 rounded-xl px-2 py-4 flex flex-col gap-y-6  `}>
        <div>
        <InformationButton onClick={showInformation}/>
       <p className='inline-block'>{title}</p>
       </div>
        <div className='flex '>
         <span className='pt-2 px-1'>min</span> <input className='pl-2 w-16 bg-transparent border outline-none border-fuchsia-300 rounded-lg' onChange={minValueHandler} value={minValuePeak} type="number" />  
         <span className='pt-2 px-1'>max</span> <input className='pl-2 w-16 bg-transparent border outline-none border-fuchsia-300 rounded-lg' onChange={maxValueHandler} value={maxValuePeak} type="number" />  
        <TimeSetterInput setHour={setFirstHourPeak} setMins={setFirstMinsPeak} hour={firstHourPeak} mins={firstMinsPeak} text='from'  />
        <TimeSetterInput setHour={setLastHourPeak} setMins={setLastMinsPeak} hour={lastHourPeak} mins={lastMinsPeak} text='to'  />
        </div>
        <Range valueGap={0} minValue={minValuePeak} setMinValue={setMinValuePeak} maxValue={maxValuePeak} setMaxValue={setMaxValuePeak} />
    </div>
    </>
  )
}
