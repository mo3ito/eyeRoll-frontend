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
    <input type="range" step="1" min="1" max="100" value={rangeValue} onChange={handleInputChange}  />
    </>
  )
}
