
import { ProductsType , EditMenuType } from '@/types/onlineMenuBo/productsType'
import useChangeEventsOnlineMenu from '@/hooks/useChangeEventsOnlineMenu';

export default function EditMenuScreen({allProducts , descriptionHandler , processEditHandler , processDeleteHandler , setDetailsProduct , setIsShowProduct  , setIsDeleteProductImageModal , setProductId  , setImageFile , setIsChangeImage }:EditMenuType) {

  const {detailsHandler , proccessDelete , onInputChange , changeImageClick , fileInputRef}= useChangeEventsOnlineMenu(setDetailsProduct , setIsShowProduct , setProductId , setIsDeleteProductImageModal , setImageFile , setIsChangeImage)

  return (
    <div className='h-max'>
    
     {allProducts && allProducts.length > 0 && <div className='w-full h-max fixed top-48 z-40 hidden  bg-sky-100 lg:block px-2 sm:px-6'>
     <div className="  flex items-center text-center z-40 h-max container mx-auto  font-semibold py-5">
            <div className="w-[14%] rounded-l-lg ">number</div>
            <div className="w-[14%] break-words  ">name</div>
            <div className="w-[14%] break-words  ">group</div>
            <div className="w-[14%] break-words ">amount</div>
            <div className="w-[14%] break-words ">description</div>
            <div className="w-[14%] break-words ">image product</div>
            <div className="w-[14%] break-words rounded-r-lg pl-4 ">edit product</div>
          </div>
     </div>
     }
        
     <div className='w-full bg-sky-100  translate-y-64 hidden lg:block px-6'>
     {allProducts && allProducts.length > 0 ? <div className=" flex flex-col container mx-auto  h-full items-center pb-8 ">
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
        <div className=' w-[14%]'>
        <button onClick={()=>detailsHandler(product.productName , product.productPrice , product.productPricePetty , product.productDescription , product.product_image_path , product.productAssortment)} className=" break-words   px-2 text-center  ">
         <img className=' md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20 block mx-auto rounded-md object-cover' src={product.product_image_path ? product.product_image_path : "/images/default-product.jpg"} alt="" />
        </button>
        <div className='translate-y-2'>
        <button onClick={()=>proccessDelete(product._id)} className='mr-2'>
        <svg className='w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
        </button>
        <button onClick={(event)=>changeImageClick( event ,product._id)} className='ml-2'>
        <svg className='w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z" ></path></svg>
        </button>
        <input ref={fileInputRef} onChange={onInputChange} className=" bg-transparent border border-fuchsia-400 rounded-lg invisible hidden" id="changImage" type="file" />
        </div>
       
        </div>
       
        <div className="w-[14%] mx-auto flex items-center justify-center break-words  p-2  text-center  ">
          <button onClick={()=>processEditHandler(product.productName , product.productPrice , product.productPricePetty , product.productAssortment , product.productDescription , product._id)} className="mr-4 pt-2">
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
  </div> : <p className='text-center  text-xl '>there is no product </p> }


     </div>


 
  </div>
  )
}
