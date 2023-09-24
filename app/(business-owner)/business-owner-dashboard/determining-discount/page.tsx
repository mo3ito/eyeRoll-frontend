'use client'
import {useState , ChangeEvent} from 'react'

export default function DeterminingDiscount() {
    const [rangeValue , setRangeValue]=useState<number>(10)

    const handleInputChange = (event : ChangeEvent<HTMLInputElement> )=>{
        setRangeValue(parseInt(event.target.value));
    }

    console.log(rangeValue);

  return (
    <>
    <div>{rangeValue}٪</div>
    <input  className='w-96' type="range" step="1" min="5" max="100" value={rangeValue} onChange={handleInputChange}  />

   <div className='w-64 h-4 bg-gray-600 relative ml-5 rounded-full'>
    <div className=' absolute top-0 left-2 bg-pink-500 w-full h-full rounded-full cursor-pointer  '></div>
   </div>
    </>
  )
}
