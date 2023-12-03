'use client'
import {useState , useContext , ChangeEvent } from 'react'
import { AuthContext } from '@/context/authContext';
import ButtonDefault from '../shared/button/buttonDefault'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import useGetBusinessOwnerId from '@/hooks/useGet‌‌BusinessOwnerId';
import senderFormDataWithId from '@/services/senderFormDataWithId';
import Modal from '../modal/modal';
import { InfosProps } from '@/types/authentication';
import removal from '@/services/removal';
import { FormDataHandleProps } from '@/types/formDataHandle/formDataHandleProps';



export default function FormDataHandle({ pathApi , pathApiDelete , fileName , content , srcImage  } : FormDataHandleProps) {
    
    const{infos , login}=useContext(AuthContext)
    const router = useRouter()
    const [isLoadingForApi , setIsLosdingForApi]=useState<boolean>(false)
    const {businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
    const [isShowInputForFileName , setIsShowInputForFileName]=useState<boolean>(false)
    const [isShowDeleteFileModal , setIsShowDeleteFileModal]=useState<boolean>(false)
    const [fileData , setFileData]=useState<File | null>(null)
    const onInputChange = (event : ChangeEvent<HTMLInputElement>) => {

     
      
        if (event.target.files && event.target.files[0]) {
          console.log(event.target.files[0].type);
          if(event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/jpg" || event.target.files[0].type === "image/png"){
            const selectedFile = event.target.files[0];
            setFileData(selectedFile);
          }else{
            toast.warn("Only photos in jpg , jpeg and png format are allowed")
          }
         
          
        }
      };

    const submitImage = async () => {
        if (fileData) {
          const formData = new FormData();
          formData.append( fileName, fileData);
          try {
            setIsLosdingForApi(true)
            const response = await senderFormDataWithId( pathApi , businessOwnerId , formData )
            console.log(response?.data); 
            if(response?.status === 200){
              await login(response?.data.userInfos , response?.data.token )
              router.refresh()
              toast.success("Avatar updated successfully")
              setIsLosdingForApi(false)
              setIsShowInputForFileName(false)
            
            }
          } catch (error : any) {
            if (error.response?.status === 400) {
              setIsLosdingForApi(false)
              setIsShowInputForFileName(false)
              const errorMessage = error?.response.data.message;
              toast.error(errorMessage);
            } else {
              setIsLosdingForApi(false)
              setIsShowInputForFileName(false)
              toast.error("An error occurred while processing your request");
            }
          }
        }
      };

      const DeleteProfileImageHandler = async ()=>{
        try {
          const response = await removal(pathApiDelete , businessOwnerId)
          if(response?.status === 200){
            await login(response?.data.userInfos , response?.data.token )
          router.refresh()
          setIsShowDeleteFileModal(false)
          toast.success("Avatar deleted successfully")
          }
        } catch (error : any) {
          if (error.response?.status === 400) {
            const errorMessage = error?.response.data.message;
            setIsShowDeleteFileModal(false)
            toast.error(errorMessage);
          } else {
            setIsShowDeleteFileModal(false)
            toast.error("An error occurred while processing your request");
          }
        }
      
      }
    
     

  return (
    <>
    <div className='mb-5'>
      { content && <p className='text-center  my-3'>{content}</p>}
        <label onClick={()=>setIsShowInputForFileName(true)} className="cursor-pointer flex items-center justify-center flex-col gap-y-3"  htmlFor="changImage">
          <div className=" w-24 h-24 sm:w-32 sm:h-32 rounded-full relative">
            <img src={srcImage ? srcImage : "/images/defaultPerson.png"} alt="" className="w-full h-full rounded-full bg-fuchsia-400  mx-auto object-cover"/>
            <div className=" w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-white absolute bottom-2 -right-1 sm:bottom-3 sm:right-0 ">
            <svg className="w-6 h-6  fill-fuchsia-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
            </div>
            </div>
            {isShowInputForFileName && 
            <> 
            <p className=" border border-fuchsia-400 py-1 px-2 rounded-lg truncate  w-full"> <span className="font-semibold">file name:</span> {fileData?.name}</p>
            <input  onChange={onInputChange} className=" bg-transparent border border-fuchsia-400 rounded-lg invisible hidden" id="changImage" type="file" /> </>}
            </label>
           <div className=" w-full h-max mt-4 flex items-center justify-center gap-x-5 mx-auto text-sm ">
           { isShowInputForFileName && <ButtonDefault onClick={submitImage} loading={isLoadingForApi} className="bg-fuchsia-400  sm:px-2  py-1 rounded-md hoverScale " text="confirm image" />}
           { infos?.profile_image_path && <ButtonDefault onClick={()=>setIsShowDeleteFileModal(true)} className="bg-fuchsia-400  sm:px-2 py-1  rounded-md hoverScale " text="delete image" />}
            </div>
            </div>
       
        <Modal
        cancelHandler={() => setIsShowDeleteFileModal(false)}
        text="Are you sure to delete?"
        isShowModal={isShowDeleteFileModal}
        setIsShowModal={setIsShowDeleteFileModal}
        confirmHandler={DeleteProfileImageHandler}
      />
        </>
  )
}
