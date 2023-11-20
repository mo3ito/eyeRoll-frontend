"use client";
import React, { ChangeEvent, FormEvent, useCallback, useState, useContext  } from "react";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import { BUSINESS_OWNER_ONLINE_MENU_ADD_PRODUCT } from "@/routeApi/endpoints";
import  handleInputChange  from "@/utils/handleInputChange";
import senderWithAuth from "@/services/senderWithAuth";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/authContext";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import handleNumberInputChange from "@/utils/handleNumberInputChange";



export default function Facilities() {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string | number>("");
  const [productPricePetty , setProductPricePetty]=useState<string | number>("")
  const [productDescription, setProductDescription] = useState<string>("");
  const [productAssortment , setProductAssortment] = useState<string>("")
  const [isLoadingForApi , setIsLoadingForApi]=useState<boolean>(false)
  const [productImage , setProductImage]=useState<File | null>(null)
  const [isShowInputsForImageProfile , setIsShowInputsForImageProfile]=useState<boolean>(false)
  const {infos}=useContext(AuthContext)
  const{businessOwnerId}=useGetBusinessOwnerId(infos)


  
  console.log(infos);
  

  const changeProductPricepettyHandler =useCallback( (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    const parseValue = parseInt(inputValue);
    if (parseValue >= 0 && !isNaN(parseValue) && inputValue.length <=2 ) {
      setProductPricePetty(parseValue.toString());
    } else {
      setProductPricePetty("");
    }
  },[])


  console.log("productAssortment", productAssortment);
  console.log("productName", productName);
  console.log("productPrice", productPrice);
  console.log('productDescription',productDescription);
  

  const changeProductDescriptionHandler =useCallback((
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProductDescription(event.target.value);
  },[]) 

  const clearStates = ()=>{
      setProductAssortment("")
      setProductDescription("")
      setProductName("")
      setProductPrice("")
      setProductPricePetty("")
  }

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const body = {
      businessOwnerId,
      productAssortment,
      productName,
      productPrice ,
      productPricePetty,
      productDescription,
    }
    
    if(productName.length > 0 && productName !== "" && productPrice !== "" && productAssortment.length > 0 && productAssortment !== ""){
      try {
        setIsLoadingForApi(true)
        const response = await senderWithAuth(BUSINESS_OWNER_ONLINE_MENU_ADD_PRODUCT , body)
      if (response?.status === 200) {
        setIsLoadingForApi(false)
        toast.success("Product added to the online menu successfully")
        clearStates()
      } 
      } catch (error : any) {
        if (error.response.status === 400) {
          setIsLoadingForApi(false)
          const errorMessage = error.response.data.message;
          toast.error(errorMessage);
        } else {
          setIsLoadingForApi(false)
        toast.error("An error occurred while processing your request");
        }
  }
    }else{
      toast.warn("Please fill all required fields")
    }

    
  };

  const onInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0].type);
      if(event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/jpg" || event.target.files[0].type === "image/png"){
        const selectedFile = event.target.files[0];
        setProductImage(selectedFile);
      }else{
        toast.warn("Only photos in jpg , jpeg and png format are allowed")
      }
     
      
    }
  };


  return (
    <div className="bg-sky-100 w-full h-max">
      <div className="container max-xs:px-2 px-4 min-h-screen max-h-max  mx-auto">
        <form onSubmit={submitHandler}>
          <div className=" text-sm sm:text-base sm:w-7/12  md:w-6/12 lg:w-5/12 xl:w-4/12  2xl:w-3/12  h-max mx-auto pt-44 pb-4  ">

          <div className="mb-4 ">
              <p className="mb-3 starBefore">group</p>
              <InputDefault
                disabled={false}
                type="text"
                value={productAssortment}
                onChange={useCallback((event)=>handleInputChange(event , setProductAssortment),[])}
                placeholder="for examole: hot sandwich"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>

            <div className="mb-4">
              <p className="mb-3 starBefore">product name</p>
              <InputDefault
                disabled={false}
                type="text"
                value={productName}
                onChange={useCallback((event)=>handleInputChange(event , setProductName),[])}
                placeholder="for examole: burger"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>

            <div className="mb-3 w-full space-x-2 flex items-center justify-center">
            <div className="">
              <p className="mb-3 starBefore">price (dollar)</p>
              <InputDefault
                disabled={false}
                type="text"
                value={productPrice}
                onChange={useCallback((event)=>handleNumberInputChange(event , setProductPrice),[])}
                placeholder="for examole: 3"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>

            <div className="">
              <p className="mb-3"> price (cent)</p>
              <InputDefault
                disabled={false}
                type="text"
                value={productPricePetty}
                onChange={changeProductPricepettyHandler}
                placeholder="for examole: 3"
                className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
              />
            </div>
            </div>




            <div className="mb-3">
              <p className="mb-3">import your product image</p>
              <div  className="max-[350px]:w-11/12  w-full h-max mx-auto mb-5 ">
        <label  className="cursor-pointer flex items-center justify-center flex-col gap-y-3"  htmlFor="changImage">
          <div className=" w-44 h-44 sm:w-full sm:h-48  relative">
            <img src={infos.profile_image_path ? infos.profile_image_path : "/images/defaultPerson.png"} alt="" className="w-full h-full  bg-fuchsia-400  mx-auto object-cover"/>
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white absolute -bottom-2 right-0 ">
            <svg className="w-6 h-6  fill-fuchsia-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
            </div>
            </div>
            { <> <div className="border w-full text-sm sm:text-base border-fuchsia-400 min-h-10 h-max flex  justify-start items-center p-1 rounded-lg ">
    
            <p className="mr-auto w-full sm:w-max truncate px-1"> <span className="font-semibold">file name:</span> {productImage?.name}</p>
           
            </div>
            <input  onChange={onInputChange} className=" bg-transparent border border-fuchsia-400 rounded-lg invisible hidden" id="changImage" type="file" /> </>}
           
            </label>
           <div className=" w-full h-max mt-4 flex items-center justify-center gap-x-5 mx-auto  max-[350px]:text-sm  ">
           {/* { isShowInputsForImageProfile && <ButtonDefault onClick={submitImage} loading={isLoadingForApi} className="bg-fuchsia-400  sm:px-2  py-1 rounded-md hoverScale " text="confirm image" />}
           { infos.profile_image_path && <ButtonDefault onClick={()=>setIsShowDeleteProfileImageModal(true)} className="bg-fuchsia-400  sm:px-2 py-1  rounded-md hoverScale " text="delete image" />} */}
            </div>
            
        </div>
              
              </div>





           
            <div className="mb-3">
              <p className="mb-3">import your description</p>
              <textarea
                value={productDescription}
                onChange={changeProductDescriptionHandler}
                className="w-full h-44 border focus:border-2 border-fuchsia-400 p-2 outline-none bg-transparent rounded-lg"
              />
            </div>

            <ButtonDefault
              loading={isLoadingForApi}
              text="send"
              className="hoverScale w-full bg-fuchsia-400 h-12 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
