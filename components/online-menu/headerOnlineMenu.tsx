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
    <div className=" w-full flex flex-col h-max gap-y-10 items-center    bg-sky-100  top-24   z-40  fixed px-2 sm:px-6">
      <div className='w-full container mx-auto h-max'>
      <div className='w-max  h-10   pt-2'>
          <span>Total number of goods: {allProducts?.length}</span>
        </div>
        <Searcher items={products}  setAllItems={setAllProducts}/>
        </div>
        </div>
  )

}
