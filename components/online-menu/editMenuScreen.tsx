import React from 'react'
import { ProductsType , EditMenuType } from '@/types/onlineMenuBo/productsType'


export default function EditMenuScreen({allProducts , descriptionHandler , processEditHandler , processDeleteHandler }:EditMenuType) {

  console.log(allProducts);
  
  return (
    <>
    
     {allProducts && allProducts.length > 0 && <div className=" hidden lg:flex  items-center text-center container sticky top-52 z-40 bg-sky-100 h-20 w-full font-semibold pt-4">
            <div className="w-[14%] rounded-l-lg ">number</div>
            <div className="w-[14%] break-words  ">name</div>
            <div className="w-[14%] break-words  ">group</div>
            <div className="w-[14%] break-words ">amount</div>
            <div className="w-[14%] break-words ">description</div>
            <div className="w-[14%] break-words ">image product</div>
            <div className="w-[14%] break-words rounded-r-lg pl-4 ">edit product</div>
          </div>}
        
    {allProducts && allProducts.length > 0 ? <div className=" hidden lg:flex flex-col mt-16 h-max items-center overflow-y-auto ">
    {allProducts?.map((product: ProductsType , index : number)=>
      <div key={product._id} className="flex  md:text-sm  xl:text-base border border-fuchsia-300 bg-blue-100 text-center items-center h-max py-4 max-h-max w-full rounded-lg mb-4">
      <div className="w-[14%] break-words  p-2 text-center ">{index+1}</div>
        <div className="w-[14%] break-words  p-2 text-center  ">
          {product.productName}
         
        </div>
        <div className="w-[14%] break-words  p-2 text-center ">{product.productAssortment}</div>
        { product.productPricePetty  ? <div className="w-[14%] break-words  p-2 text-center  "> {product.productPrice}.{product.productPricePetty} $</div>
       : <div className="w-[14%] break-words  p-2  "> {product.productPrice} $</div>
        }
        <div className="w-[14%] break-words  p-2 text-center translate-x-1 ">
          <button onClick={()=>descriptionHandler(product.productName , product.productDescription)} className="  w-max md:text-xs lg:text-sm px-2 bg-fuchsia-300 py-2 rounded-lg">show description</button>
        </div>
        <div className="w-[14%] break-words   px-2 text-center translate-x-1 ">
         <img className=' md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20 block mx-auto rounded-md object-cover' src={product.product_image_path ? product.product_image_path : "/images/default-product.jpg"} alt="" />
        </div>
        <div className="w-[14%] mx-auto flex items-center justify-center break-words  p-2  text-center  ">
          <button onClick={()=>processEditHandler(product.productName , product.productPrice , product.productPricePetty , product.productAssortment , product.productDescription, product._id)} className="mr-4 pt-2">
            <svg
              className=" w-6 h-6 mb-1 xl:w-6 xl:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
            </svg>
          </button>
          <button onClick={()=>processDeleteHandler(product._id)} className="">
            <svg
               className=" w-6 h-6 xl:w-6 xl:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
            </svg>
          </button>
        </div>
      </div>
      )}
  </div> : <p className='text-center mt-28 text-xl '>there is no product </p> }
 
  </>
  )
}
