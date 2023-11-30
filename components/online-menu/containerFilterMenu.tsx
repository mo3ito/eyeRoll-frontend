import React from 'react'
import { ProductType , ContainerFilterMenuProps } from '@/types/onlineMenuUser/onlineMenuUser'
import HeaderMenu from './headerMenu';



export default function ContainerFilterMenu({groupName , filteredProduct , setIsShowProduct , setProductDetails }:ContainerFilterMenuProps) {
  const detailsHandler = (producName: string , productImage: string , productPrice: string , productPricePetty: string , productDescription:string )=>{
    setIsShowProduct(true)
    setProductDetails({
      producName,
      productImage,
      productPrice,
      productPricePetty,
      productDescription
    })
  }

  return (
    <div className='w-full h-max bg-sky-50 mb-3 rounded-lg pt-2 pb-6 border border-fuchsia-400'>
   
   <HeaderMenu content={groupName} />

    <div className='w-full h-max flex flex-wrap  justify-around gap-y-3 items-center  pb-5  '>
    { filteredProduct.length ? filteredProduct.map((item : ProductType) =>
        
        <div key={item._id} className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
    <div className='w-5/12 h-full bg-red-50'>
    <img src={item.product_image_path} className='w-full h-full object-cover' alt="" />
    </div>
    <div className='w-8/12 px-2 h-full  pt-8'>
    <p className='pb-3'>{item?.productName}</p>
    <button onClick={()=>detailsHandler(item.productName , item.product_image_path , item.productPrice , item.productPricePetty , item.productDescription )} className='pb-3 truncate opacity-40 hover:underline'> <span>details: </span>{item?.productDescription}</button>
    <p className='pb-3'>{item.productPrice}{item.productPricePetty && `.${item.productPricePetty}`} $ </p>
    </div>
  </div>
    
    ): <p className='  text-lg'>there is no product</p>}
    </div>
    </div>
  )
}
