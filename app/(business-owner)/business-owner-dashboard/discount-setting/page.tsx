'use client'
import {useState , ChangeEvent} from 'react'

import Range from '@/components/shared/range/range';

export default function DeterminingDiscount() {
   
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
 

  return (
    <>
    <div>
      <input type="number" />
    <Range minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} valueGap={10}/>
    </div>
    
    </>
  )
}
