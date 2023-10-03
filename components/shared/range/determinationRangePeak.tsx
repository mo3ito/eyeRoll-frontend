import {ChangeEvent} from 'react'
import Range from './range'
import TimeSetterInput from '../timeSetterInput/timeSetterInput'
import InformationButton from '@/components/informationButton/informationButton'
import CheckBox from '../checkeBox/checkBox'

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
           

            const newValue = parseInt(event.target.value);
            const clampedValue = Math.min(100, Math.max(0, newValue));
            setMinValuePeak(clampedValue);
        }

        const maxValueHandler = (event)=>{
            
              const newValue = parseInt(event.target.value);
            const clampedValue = Math.min(100, Math.max(0, newValue));
            setMaxValuePeak(clampedValue);
        }

        const changeProductsHandler = (event : ChangeEvent<HTMLInputElement>) : void =>{
          setIsChecked(event.target.checked)
         
          
        }
  return (
    <>
  
    <div className={` ${isChecked ? 'bg-indigo-100' :'bg-gray-200'} w-full  h-max  my-2 rounded-xl p-4 flex flex-col  space-y-6 `}>
        <div className='flex'>
        <InformationButton onClick={showInformation}/>
       <p className='inline-block'>{title}</p>
       <CheckBox  onChange={(event)=>changeProductsHandler(event)} checked={isChecked} backgroundClasses={isChecked ? 'bg-pink-400' : 'bg-pink-300'} sizeClasses='w-12 h-6 ml-auto ' circleClasses='w-4 h-4 bg-gray-200 peer-checked:translate-x-6  peer-checked:bg-violet-500'  />
       </div>
        <div className='flex  justify-center items-center h-10  '>
         <span className=' px-1'>min</span> <input disabled={!isChecked} className=' shadow-md pl-2 w-16 bg-transparent border outline-none border-fuchsia-300 rounded-lg h-full' onChange={minValueHandler} value={minValuePeak} type="number" />  
         <span className=' px-1'>max</span> <input disabled={!isChecked} className=' shadow-md pl-2 w-16 bg-transparent border outline-none border-fuchsia-300 rounded-lg h-full' onChange={maxValueHandler} value={maxValuePeak} type="number" />  
        <TimeSetterInput disabled={!isChecked} setHour={setFirstHourPeak} setMins={setFirstMinsPeak} hour={firstHourPeak} mins={firstMinsPeak} text='from'  />
        <TimeSetterInput disabled={!isChecked} setHour={setLastHourPeak} setMins={setLastMinsPeak} hour={lastHourPeak} mins={lastMinsPeak} text='to'  />
        </div>
        <Range disable={!isChecked}  valueGap={0} minValue={minValuePeak} setMinValue={setMinValuePeak} maxValue={maxValuePeak} setMaxValue={setMaxValuePeak} />
    </div>
    </>
  )
}
