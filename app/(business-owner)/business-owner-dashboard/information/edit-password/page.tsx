'use client'
import {useCallback , useState , useContext} from 'react'
import InputPassword from '@/components/shared/inputs/inputPassword'
import handleInputChange from '@/utils/handleInputChange'
import ButtonDefault from '@/components/shared/button/buttonDefault'
import { BUSINESS_OWNER_CHANGE_PASSWORD } from '@/routeApi/endpoints'
import { AuthContext } from '@/context/authContext'
import useGetBusinessOwnerId from '@/hooks/useGet‌‌BusinessOwnerId'
import updaterWithPatch from '@/services/updaterWihPatch'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { InfosProps } from '@/types/authentication'



export default function EditPassword() {
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const {infos , login} = useContext(AuthContext)
    const {businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
    const router = useRouter()


    const changePassword = async ()=>{
        
        const body = {
          password:password,
          repeat_password:repeatPassword
        }
        if(password.trim() === "" || repeatPassword.trim() === ""){
           return toast.warn("please fill password or repeat password")
        }
        if(password !== repeatPassword){
           return toast.warn("Repeating the password is not the same as the password");
        }
        if (password !== "" && password.length < 8) {
           return toast.warn("the password must be at least 8 characters long");
        }

        try {
            const response = await updaterWithPatch(
              BUSINESS_OWNER_CHANGE_PASSWORD,
              businessOwnerId,
              body
            );
            if (response?.status === 200) {
              await login(response.data.businessOwnerInfos, response.data.token);
              toast.success("password updated successfully");
                router.push("/business-owner-dashboard")
            }
          } catch (error: any) {
            if (error.response?.status === 400) {
              const errorMessage = error?.response.data.message;
              toast.error(errorMessage);
            } else {
              toast.error("An error occurred while processing your request");
            }
          }
    }

  return (

    <div className=" flex flex-col items-center  h-max mx-auto mt-64 container px-2 sm:px-6 ">
      
    <div className="mb-4 w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12   ">
      <InputPassword
        className="mb-4 w-full"
        label="import new password"
        labelClassName="mb-3 starBefore"
        value={password}
        onChange={useCallback(
          (event) => handleInputChange(event, setPassword),
          []
        )}
        disabled={false}
      />
    </div>

    <div className="mb-4 w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12 ">
      <InputPassword
        className="mb-4 w-full"
        label="repeat new password"
        labelClassName="mb-3 starBefore"
        value={repeatPassword}
        onChange={useCallback(
          (event) => handleInputChange(event, setRepeatPassword),
          []
        )}
        disabled={false}
      />
    </div>
    <ButtonDefault
    onClick={changePassword}
              text="send"
              className=" hoverScale  mb-4 w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12 bg-fuchsia-400 h-12 rounded-lg "
            />
    </div>
    
   
  
    
  )
}
