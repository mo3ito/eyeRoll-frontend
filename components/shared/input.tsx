
import { InputRegister } from '@/types/InputsType'

const Input = ({value , onChange , placeholder , label } : InputRegister ) => {
  return (
<div className='my-2 w-64 sm:w-96 h-10 '>
<label  className='relative top-3 bg-white px-2 -right-3 text-blue-600 '>{label}</label>
<input 
  value={value}
  onChange={onChange} 
  placeholder={placeholder}
  className='w-full border border-blue-600 px-2 rounded-sm h-10 outline-none text-blue-600 focus:border-2 '
  />
</div>
  )
}

export default Input

