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
   <div className='w-full h-max p-2 overflow-x-hidden sm:text-lg text-zinc-500'>
    <p className='text-center mb-4 pt-2   font-semibold'>Product Specifications</p>
    <div className='border border-fuchsia-400 p-2 shadow-lg overflow-hidden'>
    <img className=' w-full h-64 object-cover hover:scale-105 hover:duration-500' src={productDetails?.productImage ? productDetails?.productImage : "/images/noImage.jpg"} alt="product-image" />
    <div className=' mt-2  font-semibold'>
    <p className='w-full h-max max-h-[96px]  overflow-y-auto border-b ' > <span className='text-black'>group:</span> {productDetails?.productAssortment}</p>
    <p className='w-full h-max max-h-[96px]  overflow-y-auto border-b ' > <span className='text-black'>name:</span> {productDetails?.producName}</p>
    <p className='text-red-400 border-b'> <span className='text-black '>price:</span> {productDetails?.productPrice}{productDetails?.productPricePetty &&`.${productDetails?.productPricePetty}`} $</p>
    </div >
    <div className=''>
      <p className='text-center  font-semibold'>details:</p>
      <div className='w-full h-44 shadow-lg border overflow-y-auto p-2 break-words text-base '>
      
      { productDetails?.productDescription ? <span>{productDetails?.productDescription}</span>
     : <p className='w-full h-full flex items-center justify-center'>no description</p>}
      </div>
    </div>
     </div>
   </div>
  </ModalDefault>
  )
}
