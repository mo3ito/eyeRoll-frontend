'use client'
import {useState , FormEvent , useContext , useCallback} from 'react'
import { AuthContext } from '@/context/authContext'
import ButtonDefault from '@/components/shared/button/buttonDefault'
import handleInputChange from '@/utils/handleInputChange'
import InputPassword from '@/components/shared/inputs/inputPassword'
import Input from '@/components/shared/inputs/input'
import { toast } from 'react-toastify'
import sender from '@/services/sender'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ADMIN_LOGIN } from '@/routeApi/endpoints'

export default function page() {

    const [email , setEmail] = useState<string>("")
    const [password , setPassword] = useState<string>("")
    const [adminKey , setAdminKey]= useState<string>("")
    const [isLoading , setIsLoading]=useState<boolean>(false)
    const{login} = useContext(AuthContext)
    const router = useRouter()

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const body = {
          email: email.toLowerCase(),
          password,
          admin_key: adminKey,
          
        };
        try {
          if (
            !email || !password.length || !adminKey.length ){
           return toast.warn("Please Fill in the empty inputs");
            
          }else if (password.length < 8) {
           return toast.warn("the password must be at least 8 characters long");
            
          }else if(adminKey.trim().length === 0){
            return toast.warn("please fill admin key") 
          }
          setIsLoading(true);
          const response = await sender(ADMIN_LOGIN, body);
          if (response?.status === 200) {
            await login(response?.data.userInfos, response?.data.token);
            setIsLoading(false);
            router.push("/admin-eyeRoll");
          }
        } catch (error: any) {
          if (error.response.status === 400) {
            const errorMessage = error.response.data.message;
            setIsLoading(false);
            toast.error(errorMessage);
          } else {
            setIsLoading(false);
            toast.error("An error occurred while processing your request");
          }
        }
      };

  return (
    <div className="bg-sky-100 w-full  h-max pt-28">
    <div className="container px-4  h-max mx-auto">
      <form autoComplete="off" onSubmit={submitHandler}>
      <div className=" max-xs:w-11/12 w-9/12 sm:w-4/5 lg:w-3/5 xl:w-2/5 h-max mx-auto py-12 sm:pt-32">
          <h2 className="mb-12 text-center text-lg font-semibold">
            login as admin
          </h2>
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-around gap-x-5">
            <Input
              className="mb-4 w-full "
              label="email"
              value={email}
              onChange={useCallback(
                (event) => handleInputChange(event, setEmail),
                []
              )}
              disabled={false}
              type="email"
            />
          </div>

          <div className="w-full flex flex-wrap sm:flex-nowrap justify-around gap-x-5">
            <InputPassword
              className="mb-4 w-full sm:w-1/2"
              label="password"
              labelClassName="mb-3 starBefore"
              value={password}
              onChange={useCallback(
                (event) => handleInputChange(event, setPassword),
                []
              )}
              disabled={false}
            />

            <InputPassword
              className="mb-4 w-full sm:w-1/2"
              label="admin key"
              labelClassName="mb-3 starBefore"
              value={adminKey}
              onChange={useCallback(
                (event) => handleInputChange(event, setAdminKey),
                []
              )}
              disabled={false}
            />
          </div>

          <ButtonDefault
            loading={isLoading}
            text="login"
            className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
          />
          <div className="flex items-center justify-center  space-x-1 mt-3">
            <p className="text-sm sm:text-base ">Don't you have an account? </p>
            <Link
              href="/register-admin"
              className="text-fuchsia-500 underline text-sm sm:text-xl"
            >
              register
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}
