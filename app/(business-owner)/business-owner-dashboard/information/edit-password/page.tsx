'use client'
import {useCallback , useState} from 'react'
import InputPassword from '@/components/shared/inputs/inputPassword'
import handleInputChange from '@/utils/handleInputChange'
import ButtonDefault from '@/components/shared/button/buttonDefault'

export default function EditPassword() {
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
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
              text="send"
              className="mb-4 w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12 bg-fuchsia-400 h-12 rounded-lg "
            />
    </div>
    
   
  
    
  )
}
