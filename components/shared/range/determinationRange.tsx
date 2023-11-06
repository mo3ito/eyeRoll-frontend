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
    <div className='flex  items-start justify-center   '>
      <div className='  bg-gray-300 w-10/12'>
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
    <div className='w-full  h-max  rounded-xl space-y-4 flex items-center justify-center flex-col mt-3'>
        <div className='  space-x-10 flex items-center justify-center w-full'>
          <div className=' '>
          <span className='text-lg pr-1'>min</span>
          <div className='w-24  h-10 border rounded-lg border-purple-300 shadow-md inline-block'>
          <input disabled={!isChecked} value={ !isChecked ? 0 : minValue} onChange={addHandler} type="number" className=' bg-transparent w-16 h-10  rounded-lg  pl-3  outline-none'/>
          %
          </div>
          
          </div>
          <div>
          <span className='text-xl pr-1 ml-3'>max</span>
          <div className='w-24  h-10 border rounded-lg border-purple-300 shadow-md inline-block'>
          <input disabled={!isChecked} value={ !isChecked ? 0 : maxValue} onChange={minusHandler} type="number" className=' bg-transparent w-16 h-10  rounded-lg  pl-3  outline-none '/>
          %
          </div>
          </div>
          
         
        </div>
      
    <Range disable={!isChecked} minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} valueGap={0}/>
      </div>
    

  </div>
  )
}
