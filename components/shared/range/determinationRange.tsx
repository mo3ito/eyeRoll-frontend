import { ChangeEvent } from 'react'
import Range from '@/components/shared/range/range';
import CheckBox from '@/components/shared/checkeBox/checkBox';
import { DeterminationRangePropsType } from '@/types/rangeType/rangePropsType';


export default function DeterminationRange({minValue , maxValue , setMinValue , setMaxValue ,  isChecked , setIsChecked , title}:DeterminationRangePropsType) {
    
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
    <div className='w-full h-44 '>
    <div className='flex items-center mx-5'>
    <p className='inline-block text-lg font-medium'>{title}</p>
    <CheckBox  onChange={(event)=>changeProductsHandler(event)} checked={isChecked} sizeClasses='w-12 h-6 ml-auto ' circleClasses='w-4 h-4 bg-indigo-200 peer-checked:translate-x-6  peer-checked:bg-indigo-600'  />
    </div>
    <div className='w-full  h-max py-3 rounded-xl space-y-3 flex items-center justify-center flex-col  mt-3'>
        <div className='  flex items-center justify-center'>
          <span className='text-lg pr-1'>min</span>
          <input value={minValue} onChange={addHandler} type="number" className='w-16 h-6 rounded-lg  pl-3 border outline-none border-purple-300'/>
          <span className='text-xl pr-1 ml-3'>max</span>
          <input value={maxValue} onChange={minusHandler} type="number" className='w-16 h-6 rounded-lg  pl-3 border outline-none border-purple-300'/>
        </div>
      
    <Range minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} valueGap={0}/>
      </div>
    

  </div>
  )
}
