'use client'
import React, { ChangeEvent, useState } from 'react';
import { RangePropsType } from '@/types/rangeType/rangePropsType';




export default function Range({minValue = 0 , setMinValue , maxValue = 0 , setMaxValue , valueGap = 0} : RangePropsType) {
 

  const minValueHandler = (event : ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    let newMinValue = newValue;

    if (maxValue - newValue <= valueGap) {
      newMinValue = maxValue - valueGap;
    } else if (newValue < 0) {
      newMinValue = 0;
    }

    setMinValue(newMinValue);
  };

  const maxValueHandler = (event : ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    let newMinValue = minValue;
  
    if (newValue - minValue <= valueGap && newValue < maxValue && newValue >= 0) {
      newMinValue = newValue - valueGap;
    }
  
    setMaxValue(newValue);
    setMinValue(Math.max(newMinValue, 0));
  };
  console.log("minValue", minValue);
  console.log("maxValue", maxValue);

 
  return (
    <div className=''>
      <div className='w-64 bg-[#ddd] h-3 relative rounded-full '>
        <div  style={{ left: `${minValue}%`, right: `${100 - (maxValue)}%` }} className=' h-3 absolute rounded-full bg-[#17A2b8] left-[25%] right-[25%]' ></div>
      </div>
      <div className='relative'>
        <input
          type="range"
          min="0"
          max="100"
          value={minValue}
          onChange={minValueHandler}
          className='common-range '
        />
        <input
          type="range"
          min="0"
          max="100"
          value={maxValue}
          onChange={maxValueHandler}
          className='common-range '
        />
      </div>
    </div>
  );
}