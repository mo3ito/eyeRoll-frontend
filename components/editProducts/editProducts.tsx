"use client";
import React, {
  useCallback,
  ChangeEvent,
  useRef,
  FormEvent
} from "react";
import InputDefault from "../shared/inputs/inputDefault";
import ButtonDefault from "../shared/button/buttonDefault";
import  handleInputChange  from "@/utils/handleInputChange";
import { EditProductsProps } from "@/types/onlineMenuBo/productsType";
import { toast } from "react-toastify";

export default function EditProducts({
  producName,
  productPrice,
  productAssortment,
  productDescription,
  productPricePetty,
  setProductName,
  productImage,
  setProductAssortment,
  setProductPrice,
  setProductPricePetty,
  setProductDescription,
  setIsDeleteProductImage,
  setImageFile,
  imageFile,
  onSubmit,
}: EditProductsProps) {
  const changeProductDescriptionHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setProductDescription(event.target.value);
    },
    []
  );

  const fileInputRef = useRef<null | HTMLInputElement>(null)
  console.log(productPrice);

  const changeProductPriceHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.trim();
      const parseValue = parseInt(inputValue);
      if (parseValue >= 0 && !isNaN(parseValue)) {
        setProductPrice(parseValue.toString());
      } else {
        setProductPrice("");
      }
    },
    []
  );

  const changeProductPricePettyHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.trim();
      const parseValue = parseInt(inputValue);
      if (parseValue >= 0 && !isNaN(parseValue) && inputValue.length <= 2) {
        setProductPricePetty(parseValue.toString());
      } else {
        setProductPricePetty("");
      }
    },
    []
  );

  const onInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0].type);
      if(event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/jpg" || event.target.files[0].type === "image/png"){
        const selectedFile = event.target.files[0];
        setImageFile(selectedFile);
      }else{
        toast.warn("Only photos in jpg , jpeg and png format are allowed")
      }
     
      
    }
  };

  const changeImageClick = (event:FormEvent)=>{
    event.preventDefault()
    if(fileInputRef && fileInputRef.current){
      fileInputRef.current.click()
    }
   
    
  }
  console.log(imageFile);
  

  return (
    <form onSubmit={onSubmit} className=" py-5 h-full px-2 sm:px-8 overflow-y-auto ">
      <div className="mb-2">
        <p className="text-center mb-2">edit product</p>
        <p className="mb-2">product group</p>
        <InputDefault
          onChange={(event) => handleInputChange(event, setProductAssortment)}
          value={productAssortment}
          disabled={false}
          type="text"
          placeholder="for examole: drink"
          className="w-full max-xs:h-7 h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
        />
      </div>
      <div className="mb-2">
        <p className="mb-2">product name</p>
        <InputDefault
          onChange={useCallback(
            (event: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(event, setProductName),
            []
          )}
          value={producName}
          disabled={false}
          type="text"
          placeholder="for examole: moca"
          className="w-full max-xs:h-7 h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
        />
      </div>

      <div className="flex w-full mb-3 space-x-2">
        <div className=" w-1/2">
          <p className="mb-2">price</p>
          <InputDefault
            onChange={changeProductPriceHandler}
            value={productPrice}
            disabled={false}
            type="text"
            placeholder="for examole: burger"
            className="w-full max-xs:h-7 h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <p className="mb-2">price(cent)</p>
          <InputDefault
            onChange={changeProductPricePettyHandler}
            value={productPricePetty}
            disabled={false}
            type="text"
            placeholder="if required"
            className="w-full max-xs:h-7 h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
          />
        </div>
      </div>
      
      <div className="mb-2">
        <p className="mb-2 ">product image</p>
        <div className="border border-fuchsia-400 p-2 flex flex-col sm:flex-row sm:gap-x-2 items-center rounded-lg ">
        <img className=" w-32 h-28  sm:h-24 sm:w-1/3 md:w-4/12 lg:w-3/12 rounded-lg border border-fuchsia-400 object-cover" src={productImage ? productImage : "/images/default-product.jpg"} alt="product image" />
        <div className="   w-full sm:w-2/3 md:w-8/12 lg:w-9/12 ">
          <div className="   flex items-center gap-x-2 justify-center my-2 ">
          <button onClick={changeImageClick} className=" w-1/2  mx-auto   text-sm    h-max px-2 py-1 rounded-lg  bg-fuchsia-400">change image</button>
        <button onClick={()=>setIsDeleteProductImage(true)} className=" w-1/2    mx-auto  text-sm   h-max px-2 py-1 rounded-lg  bg-fuchsia-400">delete image</button>
          </div>
        
        
        <label  className="cursor-pointer flex items-center justify-center flex-col gap-y-3 w-full"  htmlFor="changImage">
        { imageFile?.name &&   <div className="border w-full  text-sm sm:text-base border-fuchsia-400  h-10 flex  justify-start items-center p-1 rounded-lg ">
           <p className="mr-auto sm:w-max truncate px-1"> <span className="font-semibold">file name:</span> {imageFile?.name}</p>
            </div>}
            <input ref={fileInputRef} onChange={onInputChange} className=" bg-transparent border border-fuchsia-400 rounded-lg invisible hidden" id="changImage" type="file" />
            </label>
        </div>
        
        </div>
      </div>
        
      <div className="mb-1">
        <p className="mb-3">product description</p>
        <textarea
          onChange={changeProductDescriptionHandler}
          value={productDescription}
          className="w-full max-xs:h-14 h-28 border focus:border-2 border-fuchsia-400 p-2 outline-none bg-transparent rounded-lg resize-none overflow-y-auto"
        />
      </div>
      <ButtonDefault
        text="send"
        className="hoverScale w-full bg-fuchsia-400 max-xs:h-7 h-12 rounded-lg "
      />
    </form>
  );
}
