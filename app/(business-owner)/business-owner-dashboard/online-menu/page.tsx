"use client";
import React, { ChangeEvent, FormEvent, useCallback, useState, useContext, useEffect  } from "react";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import { BUSINESS_OWNER_ONLINE_MENU_ADD_PRODUCT , BUSINESS_OWNER_ONLINE_MENU_IMAGE_PRODUCT } from "@/routeApi/endpoints";
import  handleInputChange  from "@/utils/handleInputChange";
import senderWithAuth from "@/services/senderWithAuth";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/authContext";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import handleNumberInputChange from "@/utils/handleNumberInputChange";
import senderFormDataWithId from "@/services/senderFormDataWithId";



export default function Facilities() {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string | number>("");
  const [productPricePetty , setProductPricePetty]=useState<string | number>("")
  const [productDescription, setProductDescription] = useState<string>("");
  const [productAssortment , setProductAssortment] = useState<string>("")
  const [isLoadingForApi , setIsLoadingForApi]=useState<boolean>(false)
  const [productImage , setProductImage]=useState<File | null>(null)
  const [productId , setProductId]=useState<string>("")
  const {infos}=useContext(AuthContext)
  const{businessOwnerId}=useGetBusinessOwnerId(infos)


  const clearStates = ()=>{
    setProductAssortment("")
    setProductDescription("")
    setProductName("")
    setProductPrice("")
    setProductPricePetty("")
    setProductId("")
    setProductImage(null)

}


  useEffect(()=>{

    const fetchData = async ()=>{
      if(productImage && productId && businessOwnerId){
        const formData = new FormData()
        formData.append("productImage",productImage)
  
        try {
        const response = await senderFormDataWithId(`${BUSINESS_OWNER_ONLINE_MENU_IMAGE_PRODUCT}?productId=${productId}`,businessOwnerId,formData)
        console.log(response);
        if(response?.status === 200){
           setIsLoadingForApi(false)
          toast.success("Product added to the online menu successfully")
          clearStates()
        }
        
        } catch (error : any) {
          console.error(error);
          if(error?.response.status === 400){
            setIsLoadingForApi(false)
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else{
            setIsLoadingForApi(false)
            toast.error("An error occurred while processing your request");
          }
        }
      }
    }

    fetchData()
   
  },[productId , productImage , businessOwnerId ])
  
  

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
        if(productImage === null){
          setIsLoadingForApi(false)
          toast.success("Product added to the online menu successfully")
          clearStates()
        }else{
          setProductId(response?.data?.product._id)
        }
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
            <label  className="cursor-pointer flex items-center justify-center flex-col gap-y-3"  htmlFor="changImage">
             <div className="border w-full text-sm sm:text-base border-fuchsia-400  h-10 flex  justify-start items-center p-1 rounded-lg ">
            { productImage && <p className="mr-auto w-full sm:w-max truncate px-1"> <span className="font-semibold">file name:</span> {productImage?.name}</p>}
            </div>
            <input  onChange={onInputChange} className=" bg-transparent border border-fuchsia-400 rounded-lg invisible hidden" id="changImage" type="file" />
            </label>
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
