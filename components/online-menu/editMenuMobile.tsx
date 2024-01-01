import React from 'react'
import { ProductsType , EditMenuType } from '@/types/onlineMenuBo/productsType'
import useChangeEventsOnlineMenu from '@/hooks/useChangeEventsOnlineMenu'

export default function EditMenuMobile({allProducts , processDeleteHandler , descriptionHandler , processEditHandler , setDetailsProduct, setIsShowProduct , setProductId , setIsDeleteProductImageModal , setImageFile , setIsChangeImage }:EditMenuType) {
  
  const {detailsHandler , proccessDelete , onInputChange , changeImageClick , fileInputRef}= useChangeEventsOnlineMenu(setDetailsProduct , setIsShowProduct , setProductId , setIsDeleteProductImageModal , setImageFile , setIsChangeImage)

  return (
   
    <div className='w-full  h-max pb-8 block translate-y-60  sm:translate-y-48 lg:hidden  px-2 sm:px-6'>
      { allProducts && allProducts.length>0 ? allProducts.map((product: ProductsType , index : number)=>
        <div key={product._id} className='flex gap-y-2 flex-col container  mx-auto divide-y divide-fuchsia-400 border border-fuchsia-400 rounded-lg mb-8 '>
        <div className='h-8 pt-2 px-2 break-words '>number: <span className='text-zinc-500'>{index+1}</span></div>
        <div  className='h-max pt-2 px-2  break-words '>name: <span className='text-zinc-500'>{product.productName}</span></div>
        <div  className='h-max pt-2 px-2 break-words'>group: <span className='text-zinc-500'>{product.productAssortment}</span></div>
        <div  className='h-max pt-2 px-2 break-words'>amount: <span className='text-zinc-500'>{product.productPrice}.{product.productPricePetty} $</span></div>
        <div  className='h-max pt-1 px-2 break-words'>description: <span className='inline-block '> <button onClick={()=>descriptionHandler(product.productName , product.productDescription)}  className='w-32 sm:w-44 bg-fuchsia-400 h-7 mt-0.5 text-sm rounded-md'>show description</button></span></div>
        <div className='h-max px-2 pt-2 flex gap-x-2'>
          <button className='h-20 w-20 flex-shrink-0' onClick={()=>detailsHandler(product.productName , product.productPrice , product.productPricePetty , product.productDescription , product.product_image_path , product.productAssortment)}  >
          <img className='h-full w-full object-cover' src={product.product_image_path ? product.product_image_path : "/images/default-product.jpg"} />
          </button>
          <div className='w-32 sm:w-44 h-20 flex flex-col justify-around text-sm'>
            <div className='w-full h-1/3'>
            <button onClick={(event)=>changeImageClick( event ,product._id)} className=' bg-fuchsia-400 rounded-md w-full h-full'>change image</button>
            <input ref={fileInputRef} onChange={onInputChange} className=" bg-transparent border border-fuchsia-400 rounded-lg invisible hidden" id="changImage" type="file" />
            </div>
            
            <button onClick={()=>proccessDelete(product._id)} className='w-full h-1/3 bg-fuchsia-400 rounded-md '>delete image</button>
          </div>
        
        </div>
        <div  className='h-10 max-h-max flex items-center px-2'>edit: <span className='ml-2 pt-1'><button  onClick={()=>processEditHandler(product.productName , product.productPrice , product.productPricePetty , product.productAssortment , product.productDescription, product._id)} className=" mr-2">
          <svg
          className=" w-5 h-5 fill-zinc-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
        </svg>
        </button>
        <button onClick={()=>processDeleteHandler(product._id)} className="">
        <svg
            className=" w-5 h-5 fill-zinc-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
        </svg>
        </button></span></div>
          </div>
            ) : <p className='text-center pt-20'>there is no product</p> }
          </div>
        
  )
}


