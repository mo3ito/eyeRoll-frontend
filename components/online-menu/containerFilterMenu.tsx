import React from 'react'
import { ProductType } from '@/types/onlineMenuUser/onlineMenuUser'

export default function ContainerFilterMenu({groupName , filteredProduct }) {
  return (
    <div className='w-full h-max bg-sky-50 mb-3 rounded-lg p-2 '>
    <div className="flex items-center  pb-4 pt-2 px-1 ">
    <hr className="flex-grow border-t border-fuchsia-400 mr-4" />
    <p className="text-fuchsia-400 text-xl">{groupName}</p>
   <hr className="flex-grow border-t border-fuchsia-400 ml-4" />
   </div>

    <div className='w-full h-max flex flex-wrap  justify-around gap-y-3 items-center  pb-5  '>
    { filteredProduct.map((item : ProductType) =>
        
        <div key={item._id} className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
    <div className='w-5/12 h-full bg-red-50'>
    <img src={item.product_image_path} className='w-full h-full object-cover' alt="" />
    </div>
    <div className='w-8/12 px-2 h-full  pt-8'>
    <p className='pb-3'>{item?.productName}</p>
    <p className='pb-3 truncate'> <span>details: </span>{item?.productDescription}</p>
    <p className='pb-3'>{item.productPrice}{item.productPricePetty && `.${item.productPricePetty}`} $ </p>
    </div>
  </div>
    
    )}
    </div>
    </div>
  )
}
