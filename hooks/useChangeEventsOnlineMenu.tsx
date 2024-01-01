import { useRef , ChangeEvent , FormEvent, Dispatch, SetStateAction } from "react"
import { toast } from "react-toastify"
import { ProductDetailsType } from "@/types/onlineMenuUser/onlineMenuUser"
const useChangeEventsOnlineMenu = (setDetailsProduct:Dispatch<SetStateAction<ProductDetailsType|null>>  , setIsShowProduct:Dispatch<SetStateAction<boolean>> , setProductId:Dispatch<SetStateAction<string>> , setIsDeleteProductImageModal:Dispatch<SetStateAction<boolean>> , setImageFile:Dispatch<SetStateAction<File | null>> , setIsChangeImage:Dispatch<SetStateAction<boolean>>  )=>{
    const fileInputRef = useRef<null | HTMLInputElement>(null)

    const detailsHandler = async (producName:string , productPrice:string , productPricePetty:string , productDescription:string, productImage:string , productAssortment:string)=>{
     await setDetailsProduct({
        productImage,
        producName,
        productPrice,
        productPricePetty,
        productDescription,
        productAssortment
      })
      setIsShowProduct(true)
    }
  
    const proccessDelete = async (productId : string)=>{
     await setProductId(productId)
      setIsDeleteProductImageModal(true)
    }
  
  
    const onInputChange = async (event : ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        console.log(event.target.files[0].type);
        if(event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/jpg" || event.target.files[0].type === "image/png"){
          const selectedFile = event.target.files[0];
         await setImageFile(selectedFile);
         await setIsChangeImage(true)
        }else{
          toast.warn("Only photos in jpg , jpeg and png format are allowed")
        }
       
        
      }
    };
  
    const changeImageClick = async (event:FormEvent , productId : string)=>{
      event.preventDefault()
      if(fileInputRef && fileInputRef.current){
       await fileInputRef.current.click()
       await setProductId(productId)
      }
    }
  
    return {detailsHandler , proccessDelete , onInputChange , changeImageClick , fileInputRef}

}

export default useChangeEventsOnlineMenu;