"use client";
import Input from "../../shared/inputs/input";
import Button from "@/components/shared/button/button";
import {
  useState,
  FormEvent,
  useContext,
  MouseEventHandler,
  useEffect,
} from "react";
import sender from "@/services/sender";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";
import { toast } from "react-toastify";
import Link from "next/link";
import {
  BUSINESS_OWNER_LOGIN,
  BUSINESS_OWNER_RESEND_EMAIL_VERIFICATION,
  USERS_LOGIN,
  USERS_RESEND_EMAIL_VERIFICATION,
} from "@/routeApi/endpoints";
import  handleInputChange  from "@/utils/handleInputChange";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import InputPassword from "@/components/shared/inputs/inputPassword";
import LoadingPage from "@/components/loading/loadingPage";

interface LoginPropsType {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  path: any;
  isBusinessOwner: boolean;
  link: any;
}

const Login = ({
  text = "login",
  path,
  isBusinessOwner = false,
  link,
}: LoginPropsType) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isResendEmail, setIsResendEmail] = useState<boolean>(false);
  const [pathResendEmailApi, setPathResendEmailApi] = useState<string>("");
  const [pathLoginApi, setPathLoginApi] = useState<string>("");
  const { login } = useContext(AuthContext);
  const [pathVerifyEmail, setPathVerifyEmail] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isBusinessOwner) {
      setPathResendEmailApi(BUSINESS_OWNER_RESEND_EMAIL_VERIFICATION);
      setPathLoginApi(BUSINESS_OWNER_LOGIN);
      setPathVerifyEmail("/business-owner-verify-email");
    } else {
      setPathResendEmailApi(USERS_RESEND_EMAIL_VERIFICATION);
      setPathLoginApi(USERS_LOGIN);
      setPathVerifyEmail("/users-verify-email");
    }
  }, []);

  console.log(pathResendEmailApi);
  console.log(pathLoginApi);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      password,
      email: email.toLowerCase(),
    };

    try {
      if (!email || !password.length) {
        toast.warn("Please Fill in the empty inputs");
        return;
      } else if (password.length < 8) {
        toast.warn("the password must be at least 8 characters long");
        return;
      }
      setIsLoading(true);
      const response = await sender(pathLoginApi, body);
      if (response?.status === 200) {
        await login(response?.data.userInfos, response?.data.token);
        setIsLoading(false);
        router.push(path);
      } else if (response?.status === 201) {
        if (!isResendEmail) {
          toast.warn(
            "You have not confirmed your email, please click the resend email button"
          );
          setIsLoading(false);
          setIsResendEmail(true);
        }
      }
    } catch (error: any) {
      console.error(error);
      if (error.response.status === 400) {
        setIsLoading(false);
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        setIsLoading(false);
        toast.error("An error occurred while processing your request");
      }
    }
  };
  const resendEmailHandler = async () => {
    const body = {
      password,
      email,
    };
    try {
      setIsLoading(true);
      const response = await sender(pathResendEmailApi, body);
      if (response?.status === 200) {
        setIsLoading(false);
        router.push(pathVerifyEmail);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  if (!pathLoginApi && !pathResendEmailApi && !pathVerifyEmail) {
    return <LoadingPage />;
  }

 

  return (
    <div className="bg-sky-100 w-full h-max ">
      <div className="container px-4  h-max mx-auto">
        <form onSubmit={submitHandler}>
          <div className=" max-[420px]:w-11/12 w-8/12  sm:w-3/5 md:w-2/4  lg:w-2/5  xl:w-1/4 h-max mx-auto py-12 sm:pt-32 ">
            <h2 className="mb-12 text-center text-lg font-semibold">{text}</h2>
            <div className="w-full  flex justify-around gap-x-5">
              <Input
                className="mb-4 w-full"
                label="email"
                value={email}
                onChange={(event) => handleInputChange(event, setEmail)}
                disabled={false}
                type="email"
              />
            </div>
            <div className="w-full flex justify-around ">
              <InputPassword
                className="mb-4 w-full "
                labelClassName=" starBefore mb-3"
                label="password"
                value={password}
                onChange={(event) => handleInputChange(event, setPassword)}
                disabled={false}
              />
            </div>

            <div className="w-full mx-auto flex flex-col justify-around ">
              {!isResendEmail ? (
                <ButtonDefault
                  loading={isLoading}
                  text="login"
                  className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
                />
              ) : (
                <ButtonDefault
                  loading={isLoading}
                  className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
                  text="resend email"
                  onClick={resendEmailHandler}
                />
              )}
              <div className="flex items-center justify-center  space-x-1 mt-3">
                <p className="text-sm sm:text-base ">Don't you have an account? </p>
                <Link
                  href={link}
                  className="text-fuchsia-500 underline text-sm sm:text-xl"
                >
                  register
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
