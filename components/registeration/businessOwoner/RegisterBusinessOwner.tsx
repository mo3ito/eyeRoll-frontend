"use client";
import {
  useState,
  FormEvent,
  useContext,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Input from "../../shared/inputs/input";
import { toast } from "react-toastify";
import sender from "@/services/sender";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BUSINESS_OWNER_REGISTER } from "@/routeApi/endpoints";
import  handleInputChange  from "@/utils/handleInputChange";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import InputPassword from "@/components/shared/inputs/inputPassword";

const RegisterBusinessOwner = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const { login } = useContext(AuthContext);
  const phoneNumberRef = useRef<null | HTMLDivElement>(null);
  const [isBorderBold, setIsBorderBold] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleOutSidePhoneNumberRef = (event: MouseEvent) => {
      if (
        phoneNumberRef.current &&
        !phoneNumberRef.current.contains(event.target as Node)
      ) {
        setIsBorderBold(false);
      }
    };

    document.addEventListener("click", handleOutSidePhoneNumberRef);

    return () => {
      document.removeEventListener("click", handleOutSidePhoneNumberRef);
    };
  }, []);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
    const body = {
      name,
      last_name: lastName,
      phone_number: phoneNumber,
      username,
      password,
      repeat_password: repeatPassword,
      email: email.toLowerCase(),
    };
    try {
      if (
        !email ||
        !name.length ||
        !lastName.length ||
        !phoneNumber ||
        !username.length ||
        !password.length ||
        !repeatPassword.length
      ) {
        toast.warn("Please Fill in the empty inputs");
        return;
      } else if (password !== repeatPassword) {
        toast.warn("Repeating the password is not the same as the password");
        return;
      } else if (isNaN(+phoneNumber)) {
        toast.warn("the phoneNumber must be number");
        return;
      } else if (password.length < 8) {
        toast.warn("the password must be at least 8 characters long");
        return;
      }
      setIsLoading(true);
      const response = await sender(BUSINESS_OWNER_REGISTER, body);
      if (response?.status === 200) {
        await login(response?.data.userInfos, response?.data.token);
        setIsLoading(false);
        router.push("/business-owner-verify-email");
      }
    } catch (error: any) {
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

  return (
    <div className="bg-sky-100 w-full h-screen">
      <div className="container px-4  h-max mx-auto">
        <form autoComplete="off" onSubmit={submitHandler}>
          <div className=" max-[420px]:w-11/12 w-9/12 sm:w-4/5 lg:w-3/5 xl:w-2/5 h-max mx-auto pt-32">
            <h2 className="mb-12 text-center text-lg font-semibold">
              register as business owner
            </h2>
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-around gap-x-5">
              <Input
                className="mb-4 w-full sm:w-1/2"
                label="name"
                value={name}
                onChange={useCallback(
                  (event) => handleInputChange(event, setName),
                  []
                )}
                disabled={false}
                type="text"
              />

              <Input
                className="mb-4 w-full sm:w-1/2"
                label="last name"
                value={lastName}
                onChange={useCallback(
                  (event) => handleInputChange(event, setLastName),
                  []
                )}
                disabled={false}
                type="text"
              />
            </div>

            <div className="w-full  flex flex-wrap sm:flex-nowrap justify-around gap-x-5">
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

              <div ref={phoneNumberRef} className="mb-4 w-full  sm:w-1/2    ">
                <p className="mb-3 starBefore ">phone number</p>
                <div
                  onClick={() => setIsBorderBold(true)}
                  className={`w-full h-10 border border-fuchsia-400  rounded-lg  ${
                    isBorderBold && "border-2"
                  }`}
                >
                  <PhoneInput
                    className=" px-2 "
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                  />
                </div>
              </div>
            </div>

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
                label="repeat password"
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
              text="register"
              className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
            />
            <div className="flex items-center justify-center  space-x-1 mt-3">
              <p className="text-sm sm:text-base ">Do you have an account? </p>
              <Link
                href="/register-business-owner/login"
                className="text-fuchsia-500 underline text-sm sm:text-xl"
              >
                login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterBusinessOwner;
