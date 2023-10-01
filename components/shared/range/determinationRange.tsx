import { ChangeEvent } from 'react'
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
     
  return (
    <div className={` ${isChecked ? ' bg-indigo-100' : 'bg-gray-200'} w-full h-max  rounded-xl mb-4  p-3`}>
    <div className='flex items-center justify-center   '>
      <div className=' h-max'>
       <InformationButton onClick={showInformation}/>
      <p className='inline-block text-lg font-medium'>{title}</p>
       
      </div>
    
    <CheckBox  onChange={(event)=>changeProductsHandler(event)} checked={isChecked} backgroundClasses={isChecked ? 'bg-pink-400' : 'bg-pink-300'} sizeClasses='w-12 h-6 ml-auto ' circleClasses='w-4 h-4 bg-gray-200 peer-checked:translate-x-6  peer-checked:bg-violet-500'  />
    </div>
    <div className='w-full  h-max py-4  rounded-xl space-y-6 flex items-center justify-center flex-col mt-3'>
        <div className='  space-x-10 flex items-center justify-center w-full'>
          <div>
          <span className='text-lg pr-1'>min</span>
          <input disabled={!isChecked} value={ !isChecked ? "0" : minValue} onChange={addHandler} type="number" className=' bg-transparent w-20 h-10 shadow-md rounded-lg  pl-3 border outline-none border-purple-300'/>
          </div>
          <div>
          <span className='text-xl pr-1 ml-3'>max</span>
          <input disabled={!isChecked} value={ !isChecked ? "0" : maxValue} onChange={minusHandler} type="number" className=' bg-transparent w-20 h-10 shadow-md rounded-lg  pl-3 border outline-none border-purple-300'/>
          </div>
          
         
        </div>
      
    <Range isDisable={!isChecked} minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} valueGap={0}/>
      </div>
    

  </div>
  )
}
