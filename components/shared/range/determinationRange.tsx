import { ChangeEvent } from 'react'
import Range from '@/components/shared/range/range';
import CheckBox from '@/components/shared/checkeBox/checkBox';
import { DeterminationRangePropsType } from '@/types/rangeType/rangePropsType';


export default function DeterminationRange({minValue , maxValue , setMinValue , setMaxValue ,  isChecked , setIsChecked , title , showInformation}:DeterminationRangePropsType) {
    
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
    <div className='w-full h-max rounded-xl mb-4 bg-indigo-100 p-3'>
    <div className='flex items-center just  '>
      <div>
        <button title='click for information' onClick={showInformation} >
        <svg className='w-4 h-4 inline-block mb-1 mr-1 fill-pink-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path></svg>
        </button>
      <p className='inline-block text-lg font-medium'>{title}</p>
       
      </div>
    
    <CheckBox  onChange={(event)=>changeProductsHandler(event)} checked={isChecked} backgroundClasses={isChecked ? 'bg-pink-400' : 'bg-pink-300'} sizeClasses='w-12 h-6 ml-auto ' circleClasses='w-4 h-4 bg-indigo-200 peer-checked:translate-x-6  peer-checked:bg-violet-500'  />
    </div>
    <div className='w-full  h-max py-3 rounded-xl space-y-6 flex items-center justify-center flex-col mt-3'>
        <div className='  space-x-10 flex items-center justify-center w-full'>
          <div>
          <span className='text-lg pr-1'>min</span>
          <input value={minValue} onChange={addHandler} type="number" className=' bg-transparent w-20 h-10 shadow-md rounded-lg  pl-3 border outline-none border-purple-300'/>
          </div>
          <div>
          <span className='text-xl pr-1 ml-3'>max</span>
          <input value={maxValue} onChange={minusHandler} type="number" className=' bg-transparent w-20 h-10 shadow-md rounded-lg  pl-3 border outline-none border-purple-300'/>
          </div>
          
         
        </div>
      
    <Range minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} valueGap={0}/>
      </div>
    

  </div>
  )
}
