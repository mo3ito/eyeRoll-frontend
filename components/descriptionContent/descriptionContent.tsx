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
        { productDescription ? <p className='my-5'>{productDescription}</p>
        : <p className='text-center mt-36 font-semibold border border-fuchsia-400 p-4 rounded-lg'>No details have been registered for this product!</p>
      }
        </div>
        
        
    </div>
  )
}
