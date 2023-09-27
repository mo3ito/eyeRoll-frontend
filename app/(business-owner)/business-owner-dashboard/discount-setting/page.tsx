'use client'
import {useState , ChangeEvent} from 'react'

import Range from '@/components/shared/range/range';

export default function DeterminingDiscount() {
    const [rangeValue , setRangeValue]=useState<number>(10)

    const handleInputChange = (event : ChangeEvent<HTMLInputElement> )=>{
        setRangeValue(parseInt(event.target.value));
    }

    console.log(rangeValue);

  return (
    <>
    <div>
    <Range/>
    </div>
    
    </>
  )
}
