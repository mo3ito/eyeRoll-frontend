

import ModalDefault from '@/components/modal/modalDefault'
import InputPassword from '../inputs/inputPassword'
import handleInputChange from '@/utils/handleInputChange'

export default function ValidatorPassword({onClick , isShowModal , setIsShowModal , passwordInput , setPasswordInput }) {

  return (
    <ModalDefault
        closeIconClassName="w-8 h-8 fill-red-400"
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
