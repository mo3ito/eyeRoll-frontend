
import { InputRegisterType } from '@/types/InputsType'


const Input = ({value , onChange , placeholder , label , type } : InputRegisterType ) => {
  return (
<div className='my-2 w-64 sm:w-96 h-10 '>
<label  className='relative top-3 text-lg bg-white px-2 -right-3 text-purple-600 '>{label}</label>
<input 
  value={value}
  onChange={onChange} 
  placeholder={placeholder}
  className='w-full text-[17px] border border-purple-600 px-2 rounded-sm h-10 outline-none text-purple-400 focus:border-2 '
  type={type}
  />
</div>
  )
}

export default Input

