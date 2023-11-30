import React, { Dispatch, SetStateAction } from 'react'
import { ProductType , sortedProduct , ContainerOnlineMenuProps   } from '@/types/onlineMenuUser/onlineMenuUser'
import HeaderMenu from './headerMenu';



export default function ContainerOnlineMenu({sortedProduct = [] , setIsShowProduct , setProductDetails}: ContainerOnlineMenuProps) {

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
    <>
 {sortedProduct.map((item : sortedProduct) =>
           <div key={item.id} className='w-full bg-sky-50 rounded-lg h-max mb-2 px-4 pb-6 pt-2 border border-fuchsia-400'>
           <HeaderMenu content={item.group}/>
           <div className='w-full  h-max flex justify-around flex-wrap gap-y-8 pt-4'>
   
           {item.values.map((product : ProductType) =>
               <div key={product._id} className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-50'>
               <div className='w-5/12 h-full '>
               <img src={product.product_image_path} className='w-full h-full object-cover' alt="" />
               </div>
               <div className='w-8/12 px-2 h-full  pt-8'>
               <p className='pb-3'>{product?.productName}</p>
               <button onClick={()=>detailsHandler(product.productName , product.product_image_path , product.productPrice , product.productPricePetty , product.productDescription )} className='pb-3 truncate opacity-40 hover:underline'> <span>details: </span>{product?.productDescription}</button>
               <p className='pb-3'>{product.productPrice}{product.productPricePetty && `.${product.productPricePetty}`} $ </p>
               </div>
             </div>
             )}

           </div>
         </div>
          )}
    </>
  )
}
