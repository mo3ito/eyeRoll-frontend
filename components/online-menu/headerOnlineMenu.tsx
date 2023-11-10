import React from 'react'
import Searcher from '../searcher/searcher'

export default function HeaderOnlineMenu({products , allProducts , setAllProducts}) {
  return (
    <div className="flex flex-col h-max gap-y-10 items-center w-full  bg-sky-100 pt-4 sticky top-0">
      <div className='w-full h-max '>
      <div className='w-max  h-10   pt-2'>
          <span>Total number of goods: {products?.data.length}</span>
        </div>
      
        <Searcher items={products} allItems={allProducts} setAllItems={setAllProducts}/>
      
      
        </div>
        
        
    
        </div>
  )
}
