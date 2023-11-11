import React, { Dispatch, SetStateAction } from 'react'
import Searcher from '../searcher/searcher'
import { ProductsType } from '@/types/onlineMenuBo/productsType'
import { AxiosResponse } from 'axios'

interface HeaderOnlineMenuProps{
products:AxiosResponse<any, any> | null | undefined;
allProducts : ProductsType[],
setAllProducts: Dispatch<SetStateAction<ProductsType[]>>
}

export default function HeaderOnlineMenu({products , allProducts , setAllProducts}:HeaderOnlineMenuProps) {
  
  return (
    <div className="flex flex-col h-max gap-y-10 items-center w-full mx-auto  bg-sky-100  top-24 pb-8 pt-4 z-40  sticky ">
      <div className='w-full mx-auto h-max  '>
      <div className='w-max  h-10   pt-2'>
          <span>Total number of goods: {allProducts?.length}</span>
        </div>
      
        <Searcher items={products}  setAllItems={setAllProducts}/>
      
      
        </div>
        
        
    
        </div>
  )
  // <div className='w-full bg-red-200 h-12 top-24 sticky mx-auto container'>

  // </div>
  
}
