'use client'
import {useState , ChangeEvent} from 'react'

import Range from '@/components/shared/range/range';

export default function DeterminingDiscount() {
   
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  
  const addHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setMinValue(newValue);
  }
  const minusHandler = (event : ChangeEvent<HTMLInputElement>)=>{
     const newValue = parseInt(event.target.value);
    setMaxValue(newValue);
  }

  return (
    <>
    <div className='w-full h-screen flex justify-center bg-sky-100'>
      <div className='w-4/12 h-max py-10 rounded-xl space-y-3 flex items-center justify-center flex-col bg-indigo-200 mt-3'>
        <div className='  flex items-center justify-center'>
          <span className='text-2xl pr-3'>min</span>
          <input value={minValue} onChange={addHandler} type="number" className='w-28 h-12 rounded-lg text-lg pl-3 border outline-none border-indigo-300'/>
          <span className='text-2xl pr-3 ml-3'>max</span>
          <input value={maxValue} onChange={minusHandler} type="number" className='w-28 h-12 rounded-lg text-lg pl-3 border outline-none border-indigo-300'/>
        </div>
      
    <Range minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} valueGap={10}/>
      </div>
 
    </div>
    
    </>
  )
}
