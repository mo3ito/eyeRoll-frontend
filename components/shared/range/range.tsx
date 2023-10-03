'use client'
import React, { ChangeEvent, useState } from 'react';
import { RangePropsType } from '@/types/rangeType/rangePropsType';




export default function Range({minValue = 0 , setMinValue , maxValue = 0 , setMaxValue , valueGap = 0 , disable} : RangePropsType) {
 

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
    <div className='w-full'>
      <div className='w-full bg-[#ddd] h-4 relative rounded-full '>
        <div  style={{ left: `${ disable ? '0' : minValue}%`, right: `${disable ? '100' : 100 - (maxValue)}%` }} className=' h-4 absolute rounded-full bg-fuchsia-400 left-[25%] right-[25%]' ></div>
      </div>
      <div className='relative'>
        <input
          type="range"
          min="0"
          max="100"
          value={ disable ? '0' : minValue}
          onChange={minValueHandler}
          className='common-range '
          disabled={disable}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={ disable ? '0' : maxValue}
          onChange={maxValueHandler}
          className='common-range '
          disabled={disable}
        />
      </div>
    </div>
  );
}