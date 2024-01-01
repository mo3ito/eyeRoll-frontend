import React from 'react'

interface DescriptionContentProps {
    productName: string | undefined;
    productDescription:string | undefined;
}

export default function DescriptionContent({productName , productDescription}: DescriptionContentProps) {
  return (
    <div className=' w-full h-full px-6 py-8 break-words overflow-y-auto '>
        
        <div className='w-full h-max'>
        <p className='text-center font-semibold'> description </p>
        { productDescription ? <p className=' border border-fuchsia-400 p-2 rounded-lg shadow-md min-h-28  max-h-48 overflow-y-auto'>{productDescription}</p>
        : <p className='text-center  font-semibold border border-fuchsia-400 p-4 rounded-lg shadow-md'>No details have been registered for this product!</p>
      }
        </div>
        
        
    </div>
  )
}
