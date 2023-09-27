'use client'
import React, { useEffect, useState } from 'react';

export default function Range() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const valueGap = 20;

  const minValueHandler = (event) => {
    const newValue = parseInt(event.target.value);
    let newMinValue = newValue;

    if (maxValue - newValue <= valueGap) {
      newMinValue = maxValue - valueGap;
    } else if (newValue < 0) {
      newMinValue = 0;
    }

    setMinValue(newMinValue);
  };

  const maxValueHandler = (event) => {
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
    <div className='ml-8 mt-8'>
      <div className='slider'>
        <div className='progress' style={{ left: `${(minValue / 100) * 100}%`, right: `${100 - (maxValue / 100) * 100}%` }}></div>
      </div>
      <div className='range-input'>
        <input
          type="range"
          min="0"
          max="100"
          value={minValue}
          onChange={minValueHandler}
          className='range-min'
        />
        <input
          type="range"
          min="0"
          max="100"
          value={maxValue}
          onChange={maxValueHandler}
          className='range-max'
        />
      </div>
    </div>
  );
}