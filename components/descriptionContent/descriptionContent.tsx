import React from 'react'

interface DescriptionContentProps {
    productName: string | undefined;
    productDescription:string | undefined;
}

export default function DescriptionContent({productName , productDescription}: DescriptionContentProps) {
  return (
    <div className=' w-full h-full px-6 py-8 break-words overflow-y-auto '>
        
        <div className='w-full h-max'>
        <p className='text-center'>{productName} description </p>
        <p className='my-5'>{productDescription}</p>
        </div>
        
        
    </div>
  )
}
