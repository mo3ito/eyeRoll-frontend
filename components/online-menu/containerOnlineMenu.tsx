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
           <div key={item.id} className='w-full text-sm md:text-base bg-sky-50 rounded-lg h-max mb-2 px-4 pb-6 pt-2 border border-fuchsia-400'>
           <HeaderMenu content={item.group}/>
           <div className='w-full  h-max flex justify-around flex-wrap gap-x-2 gap-y-3 sm:gap-y-4 pt-4'>
   
           {item.values.map((product : ProductType) =>
               <div onClick={()=>detailsHandler(product.productName , product.product_image_path , product.productPrice , product.productPricePetty , product.productDescription )} key={product._id} 
               className=' hoverScale cursor-pointer w-full sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[400px] 2xl:w-[480px] h-28 md:h-32 lg:h-44 xl:h-40 2xl:h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-50'>
               <div className=' w-[100px] sm:w-6/12 md:w-4/12 lg:w-5/12 h-full '>
               <img src={product.product_image_path ? product.product_image_path : "/images/noImage.jpg"} className=' w-full h-full object-cover' alt="" />
               </div>
               <div className='w-8/12 px-2 h-full flex flex-col  items-start justify-around'>
               <p className='break-words w-full h-max max-h-[48px]  line-clamp-2 '>{product?.productName}</p>
               {product.productDescription && <button onClick={()=>detailsHandler(product.productName , product.product_image_path , product.productPrice , product.productPricePetty , product.productDescription )} className='truncate w-full opacity-40 hover:underline'> <span className='truncate'>details: </span>{product?.productDescription}sssssssssssssssssdddsdsdsdsdsdsdsdsdsd</button>}
               <p className='text-red-400 w-full truncate'> <span className='font-semibold'>{product.productPrice}{product.productPricePetty && `.${product.productPricePetty}`}</span> $ </p>
               </div>
             </div>
             )}

           </div>
         </div>
          )}
    </>
  )
}
