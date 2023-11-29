import React from 'react'
import { ProductType } from '@/types/onlineMenuUser/onlineMenuUser'


  
  interface sortedProduct{
    id: string;
    group: string;
    values: ProductType[]
  }
  interface ContainerOnlineMenuProps {
    sortedProduct?: sortedProduct[];
  }
  

export default function ContainerOnlineMenu({sortedProduct = []}: ContainerOnlineMenuProps) {
  return (
    <>
 {sortedProduct.map((item : sortedProduct) =>
           <div key={item.id} className='w-full bg-sky-50 rounded-lg h-max mb-10 px-4 py-2 '>

           <div className="flex items-center  px-3 ">
           <hr className="flex-grow border-t border-fuchsia-400 mr-4" />
           <p className="text-fuchsia-400 text-xl">{item.group}</p>
           <hr className="flex-grow border-t border-fuchsia-400 ml-4" />
           </div>
   
           <div className='w-full  h-max flex justify-around flex-wrap gap-y-8 pt-12'>
   
           {item.values.map((product : ProductType) =>
               <div key={product._id} className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
               <div className='w-5/12 h-full bg-red-50'>
               <img src={product.product_image_path} className='w-full h-full object-cover' alt="" />
               </div>
               <div className='w-8/12 px-2 h-full  pt-8'>
               <p className='pb-3'>{product?.productName}</p>
               <p className='pb-3 truncate'> <span>details: </span>{product?.productDescription}</p>
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
