
import { InputRegisterType } from '@/types/InputsType'



const Input = ({value , onChange , placeholder , type , className , label , disabled = false } : InputRegisterType ) => {
  return (
    <div className={className}>
    <p className=" starBefore mb-3">{label}</p>
    <input
    placeholder={placeholder}
     onChange={onChange}
    value={value}
      disabled={disabled}
      type={type}
      className="inputInformationForm"
    />
  </div>
  )
}

export default Input

