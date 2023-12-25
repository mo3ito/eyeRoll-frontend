"use client";
import { useState, FormEvent, useContext, useCallback } from "react";
import Input from "../shared/inputs/input";
import InputPassword from "@/components/shared/inputs/inputPassword";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import  handleInputChange  from "@/utils/handleInputChange";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import updaterWithPatchWithoutId from "@/services/updatewithPatchWithoutIs";
import LoadingPage from "../loading/loadingPage";

interface EditPasswordPagePropsType {
    pathApi:string;
    pathRedirect:any
}

const EditPasswordPage = ({pathApi , pathRedirect}:EditPasswordPagePropsType) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
            const body = {
            username,
            email: email.toLowerCase(),
            new_password:password,
            repeat_new_password:repeatPassword
        }
    try {
        if (
          !email ||
          !username.length ||
          !password.length ||
          !repeatPassword.length
        ) {
          toast.warn("Please Fill in the empty inputs");
          return;
        } else if (password !== repeatPassword) {
         return toast.warn("Repeating the password is not the same as the password");
          
        } else if (password.length < 8) {
         return toast.warn("the password must be at least 8 characters long");
        }
        setIsLoading(true);
        const response = await updaterWithPatchWithoutId(pathApi, body);
        if (response?.status === 200) {
          setIsLoading(false);
          toast.success(response.data.message)
          router.push(pathRedirect);
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

  if(!pathRedirect){
    return <LoadingPage/>
  }

  return (
    <div className="bg-sky-100 w-full  h-max pt-28">
      <div className="container px-4  h-max mx-auto">
        <form autoComplete="off" onSubmit={submitHandler}>
        <div className=" max-xs:w-11/12 w-9/12 sm:w-4/5 lg:w-3/5 xl:w-2/5 h-max mx-auto py-12 sm:pt-32">
            <h2 className="mb-12 text-center text-lg font-semibold">
              set new password
            </h2>

            <div className="w-full flex flex-wrap sm:flex-nowrap justify-around gap-x-5">
              <Input
                className="mb-4 w-full sm:w-1/2"
                label="username"
                value={username}
                onChange={useCallback(
                  (event) => handleInputChange(event, setUsername),
                  []
                )}
                disabled={false}
                type="text"
              />

              <Input
                className="mb-4 w-full sm:w-1/2"
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
                label="new password"
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
              loading={isLoading}
              text="send"
              className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
            />
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPasswordPage;
