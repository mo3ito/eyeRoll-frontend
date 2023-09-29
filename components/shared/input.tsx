
import { InputRegisterType } from '@/types/InputsType'


const Input = ({value , onChange , placeholder , label , type  } : InputRegisterType ) => {
  return (
<div className='my-5 w-64 sm:w-96 h-9 hover:scale-[1.03] hover:duration-300 ease-in'>
<label  className='relative top-3 text-lg  bg-sky-100 px-2 -right-6 text-indigo-500 '>{label}</label>
<input 
  value={value}
  onChange={onChange} 
  placeholder={placeholder}
  className='w-full text-[17px] border  shadow-md border-indigo-600 px-2 rounded-2xl h-[53px] bg-sky-100 outline-none text-zinc-600  focus:border-2  '
  type={type}
  />
</div>
  )
}

export default Input

