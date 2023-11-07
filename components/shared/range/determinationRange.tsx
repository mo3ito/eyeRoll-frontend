'use client'
import { ChangeEvent , useEffect } from 'react'
import Range from '@/components/shared/range/range';
import CheckBox from '@/components/shared/checkeBox/checkBox';
import { DeterminationRangePropsType } from '@/types/rangeType/rangePropsType';
import InformationButton from '@/components/informationButton/informationButton';


export default function DeterminationRange({minValue , maxValue , setMinValue , setMaxValue ,  isChecked , setIsChecked , title , showInformation }:DeterminationRangePropsType) {
    
    const addHandler = (event: ChangeEvent<HTMLInputElement>) : void => {
        const newValue = parseInt(event.target.value);
        const clampedValue = Math.min(100, Math.max(0, newValue));
        setMinValue(clampedValue);
      };
      
      const minusHandler = (event: ChangeEvent<HTMLInputElement>) : void => {
        const newValue = parseInt(event.target.value);
        const clampedValue = Math.min(100, Math.max(0, newValue));
        setMaxValue(clampedValue);
      };
    const changeProductsHandler = (event : ChangeEvent<HTMLInputElement>) : void =>{
        setIsChecked(event.target.checked)
       
        
      }
      useEffect(()=>{
        if(!isChecked){
          setMinValue(0);
          setMaxValue(0)
        }
      },[isChecked])
     
  return (
    <div className={` ${isChecked ? ' bg-indigo-100' : 'bg-gray-200'} w-full h-max  rounded-xl my-2  p-2`}>
    <div className='flex  items-center justify-center   '>
      <div className='w-10/12'>
       <p className="inline-block max-xs:text-xs text-sm  sm:text-lg font-medium "><InformationButton onClick={showInformation}/> {title}</p>
      </div>
    
   

    <CheckBox
          onChange={(event)=>changeProductsHandler(event)}
          checked={isChecked}
          backgroundClasses={isChecked ? "bg-pink-400" : "bg-pink-300"}
          sizeClasses="max-xs:w-6 max-xs:h-[14px]   w-8 h-[18px]   sm:w-12 sm:h-6 ml-auto "
          circleClasses=" max-xs:w-2 max-xs:h-2 max-xs:peer-checked:translate-x-[10px] w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 peer-checked:translate-x-3 sm:peer-checked:translate-x-6  peer-checked:bg-violet-500"
        />
    </div>
    <div className='w-full h-max  rounded-xl space-y-4 flex items-center justify-center flex-col mt-3 -translate-y-2 sm:translate-y-0'>
        <div className=' space-x-4 max-xs:space-x-2  sm:space-x-10 flex  items-center justify-center w-full'>
          <div className=''>
          <span className=' pl-6  max-xs:text-base max-xs:pl-4 sm:pl-8 text-lg '>min</span>
          <div className=' flex items-center justify-center  max-xs:w-16 max-xs:h-8 w-20 h-9   sm:w-24  sm:h-10 border rounded-lg border-purple-300 shadow-md '>
          <input disabled={!isChecked} value={ !isChecked ? 0 : minValue} onChange={addHandler} type="number" className='w-14 max-xs:text-sm bg-transparent max-xs:w-12  pl-2  sm:w-16 sm:h-10  rounded-lg  sm:pl-3  outline-none'/>
          <span className='pr-2'>%</span>
         
          </div>
          
          </div>
          <div className=''>
          <span className=' pl-6  max-xs:text-base max-xs:pl-4 sm:pl-8 text-lg '>max</span>
          <div className=' flex items-center justify-center  max-xs:w-16 max-xs:h-8 w-20 h-9   sm:w-24  sm:h-10 border rounded-lg border-purple-300 shadow-md '>
          <input disabled={!isChecked} value={ !isChecked ? 0 : maxValue} onChange={minusHandler} type="number" className='w-14 max-xs:text-sm bg-transparent max-xs:w-12  pl-2  sm:w-16 sm:h-10  rounded-lg  sm:pl-3  outline-none'/>
          <span className='pr-2'>%</span>
          </div>
          </div>
          
         
        </div>
      
    <Range disable={!isChecked} minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} valueGap={0}/>
      </div>
    

  </div>
  )
}
