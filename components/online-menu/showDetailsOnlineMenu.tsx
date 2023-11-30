import React, { Dispatch, SetStateAction } from 'react'
import ModalDefault from '../modal/modalDefault'
import { ProductDetailsType } from '@/types/onlineMenuUser/onlineMenuUser'

interface ShowDetailsOnlineMenuProps{
  isShowProduct: boolean,
  setIsShowProduct: Dispatch<SetStateAction<boolean>>;
  productDetails: ProductDetailsType | null;

}

export default function ShowDetailsOnlineMenu({isShowProduct , setIsShowProduct , productDetails }: ShowDetailsOnlineMenuProps) {
  return (
    <ModalDefault
    closeIconClassName="w-8 h-8 fill-red-400"
    isShowModal={isShowProduct}
    setIsShowModal={setIsShowProduct}
  >
   <div className='w-full h-max p-2 overflow-x-hidden sm:text-lg'>
    <p className='text-center mb-4 pt-2  text-fuchsia-400 font-semibold'>Product Specifications</p>
    <img className='bg-red-200 w-full h-64 object-cover hover:scale-105 hover:duration-500' src={productDetails?.productImage ? productDetails?.productImage : "/images/default-product.jpg"} alt="" />
    <div className=' mt-2 text-fuchsia-400 font-semibold'>
    <p className='w-full h-max max-h-[96px]  overflow-y-auto border-b ' > <span className='text-black'>name:</span>  {productDetails?.producName}</p>
    <p className='text-red-400 border-b'> <span className='text-black '>price:</span> {productDetails?.productPrice}.{productDetails?.productPricePetty ? productDetails?.productPricePetty : null } $</p>
    </div >
    <div className=''>
      <p className='text-center text-red-400 font-semibold'>details:</p>
      <div className='w-full h-44 shadow-lg border overflow-y-auto p-2 break-words text-zinc-600'>
      {productDetails?.productDescription}
      </div>
    </div>
    


   </div>
  </ModalDefault>
  )
}
