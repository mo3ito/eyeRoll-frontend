

import ModalDefault from '@/components/modal/modalDefault'
import InputPassword from '../inputs/inputPassword'
import handleInputChange from '@/utils/handleInputChange'
import { Dispatch, SetStateAction } from 'react';

interface ValidatorPasswordProps{
  onClick:()=> void;
  isShowModal: boolean;
  setIsShowModal:Dispatch<SetStateAction<boolean>>;
  passwordInput:string;
  setPasswordInput:Dispatch<SetStateAction<string>>
}

export default function ValidatorPassword({onClick , isShowModal , setIsShowModal , passwordInput , setPasswordInput }:ValidatorPasswordProps) {

  return (
    <ModalDefault
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      >
        <div className="w-full px-4 h-64 pt-12 ">
        <p className="text-center">input your password</p>
        <InputPassword isFocus={true} value={passwordInput} onChange={(event)=>(handleInputChange(event , setPasswordInput))} className=" h-max mx-auto  outline-none rounded-lg px-2 pt-4 " />
        <div className="px-2">
        <button onClick={onClick} className="w-full rounded-lg bg-fuchsia-400 h-12 mt-8 hoverScale">confirm</button>
        </div>
        </div>
    
      </ModalDefault>
  )
}
