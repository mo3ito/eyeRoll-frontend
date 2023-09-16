
import { InputRegisterType } from '@/types/InputsType'


const Input = ({value , onChange , placeholder , label , type } : InputRegisterType ) => {
  return (
<div className='my-4 w-64 sm:w-96 h-9 '>
<label  className='relative top-3 text-xl bg-white px-2 -right-6 text-purple-500 '>{label}</label>
<input 
  value={value}
  onChange={onChange} 
  placeholder={placeholder}
  className='w-full text-[17px] border border-purple-500 px-2 rounded-2xl h-[53px] outline-none text-zinc-400  focus:border-2  '
  type={type}
  />
</div>
  )
}

export default Input

