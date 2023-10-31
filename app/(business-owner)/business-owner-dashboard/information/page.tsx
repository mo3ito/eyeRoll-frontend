"use client";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  ChangeEvent,
} from "react";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import LoadingPage from "@/components/loading/loadingPage";
import handleInputChange from "@/utils/handleInputChange";
import { BUSINESS_OWNER_UPDATE_INFORMATION } from "@/routeApi/endpoints";
import updaterWithPatch from "@/services/updaterWihPatch";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import EYEROLL_TOKEN from "@/help/tokenName";
import { useRouter } from "next/navigation";
import InputPassword from "@/components/shared/inputs/inputPassword";
import senderFormDataWithId from "@/services/senderFormDataWithId";

export default function Information() {
  const { infos, login } = useContext(AuthContext);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [workPhone, setWorkPhone] = useState<string>("");
  const [isBorderBold, setIsBorderBold] = useState<boolean>(false);
  const [profileImage , setProfileImage]=useState<string>("")
  const [isSendProfileImage , setIsProfileImage]=useState<boolean>(false)
  const [formDataToSend , setFormDataToSend]=useState({})
  const phoneNumberRef = useRef<null | HTMLDivElement>(null);
  const { businessOwnerId } = useGetBusinessOwnerId(infos);
  const token = Cookies.get(EYEROLL_TOKEN);
  const router = useRouter();

  console.log(businessOwnerId);
  console.log(token);

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

  console.log(infos);

  useEffect(() => {
    if (infos) {
      setName(infos?.name);
      setLastName(infos?.last_name);
      setUsername(infos?.username);
      setEmail(infos?.email);
      setPhoneNumber(infos?.phone_number);
      setCountry(infos?.country_name);
      setState(infos?.state_name);
      setCity(infos?.city_name);
      setAddress(infos?.address);
      setBrandName(infos?.brand_name);
      setPostalCode(infos.postal_code);
      setWorkPhone(infos?.work_phone);
    }
  }, [infos]);
  console.log(infos);

  console.log(phoneNumber);

  const informationSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const body = {
      name,
      last_name: lastName,
      phone_number: phoneNumber,
      username,
      email,
      country_name: country,
      state_name: state,
      city_name: city,
      address,
      brand_name: brandName,
      postal_code: postalCode,
      work_phone: workPhone,
      password,
    };
    if (
      !email ||
      !name.length ||
      !lastName.length ||
      !phoneNumber ||
      !username.length
    ) {
      toast.warn("Please Fill in the empty inputs");
      return;
    } else if (password !== "" && password.length < 8) {
      toast.warn("the password must be at least 8 characters long");
      return;
    } else if (password !== repeatPassword) {
      toast.warn("Repeating the password is not the same as the password");
      return;
    }
    try {
      const response = await updaterWithPatch(
        BUSINESS_OWNER_UPDATE_INFORMATION,
        businessOwnerId,
        body
      );
      if (response?.status === 200) {
        console.log(response);

        await login(response.data.userInfos, response.data.token);
        toast.success("information updated successfully");
        router.refresh();
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        const errorMessage = error?.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while processing your request");
      }
    }
  };

  const onInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setProfileImage(selectedFile);
      
    }
  };

  // const submitImage = async (event : FormEvent)=>{
  //   event.preventDefault()
  //   console.log("hello");

  //   if(profileImage){
  //     const formData = await new FormData()
  //     await formData.append("profileImage", profileImage)
    
  //     try {
  //       const response = await sender("http://localhost:5000/business-owner/upload-image" , formData )
  //     } catch (error) {
  //       console.log(error);
        
  //     }

        
  //   }
  
    
  // }
  const submitImage = async (event: FormEvent) => {
    event.preventDefault();
    console.log("hello");
  
    if (profileImage) {
      const formData = new FormData();
      formData.append("profileImage", profileImage);
      formData.append("businessOwnerId", businessOwnerId)
  
      try {
        const response = await senderFormDataWithId("http://localhost:5000/business-owner/upload-image" , businessOwnerId , formData )
        console.log(response?.data); 
       await login(response?.data.userInfos , response?.data.token )
       router.refresh()
      } catch (error) {
        console.error("خطا در ارسال درخواست:", error);
      }
    }
  };

  console.log(profileImage);
  

  if (!infos) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-sky-100 w-full h-screen">
      <div className="container px-4  h-max mx-auto">
        <form onSubmit={submitImage} className="w-2/4 h-max mx-auto mb-5 ">
        <label className="cursor-pointer flex items-center justify-center flex-col gap-y-3"  htmlFor="changImage">
            <img src="" alt="" className="w-32 h-32 rounded-full bg-green-200 mx-auto"/>
            <div className="border border-fuchsia-400 h-10 rounded-lg px-2 pt-[6px]">
            <span className="  inline-block ">file name:</span>
            <span className="inline-block pl-2">{profileImage?.name}</span>
            </div>
            <input  onChange={onInputChange} className=" bg-transparent border border-fuchsia-400 rounded-lg invisible hidden" id="changImage" type="file" />
            <button  className="bg-fuchsia-400 p-2 rounded-lg hoverScale">confirm</button>
            </label>
        </form>
        
        <form onSubmit={informationSubmitHandler}>
          <div className="w-2/4 h-max mx-auto  ">
           
         
            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/2 ">
                <p className="mb-3 starBefore ">name</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setName),[])}
                  value={name}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/2 ">
                <p className=" starBefore mb-3">last name</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setLastName),[])}
                  value={lastName}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
            </div>
            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-2/4 ">
                <p className="mb-3 starBefore ">username</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setUsername),[])}
                  value={username}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div ref={phoneNumberRef} className="mb-4 w-2/4">
                <p className="mb-3 starBefore ">phone number</p>
                <div
                  onClick={() => setIsBorderBold(true)}
                  className={`w-full h-10 border border-fuchsia-400 rounded-lg pl-2 ${
                    isBorderBold && "border-2"
                  }`}
                >
                  <PhoneInput
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">email</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setEmail),[])}
                  value={email}
                  disabled={false}
                  type="email"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <InputPassword
                  placeholder="if you want to change"
                  className="mb-4 w-full"
                  label="password"
                  labelClassName="mb-3 starBefore"
                  value={password}
                  onChange={useCallback(
                    (event) => handleInputChange(event, setPassword),
                    []
                  )}
                  disabled={false}
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <InputPassword
                  className="mb-4 w-full"
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
            </div>

            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">country</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setCountry),[])}
                  value={country}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">state</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setState),[])}
                  value={state}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">city</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setCity),[])}
                  value={city}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
            </div>

            <div className="w-full flex justify-around gap-x-5 ">
              <div className="mb-4 w-full ">
                <p className="mb-3 starBefore">address</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setAddress),[])}
                  value={address}
                  disabled={false}
                  type="text"
                  className="inputInformationForm  "
                />
              </div>
            </div>

            <div className="w-full flex justify-around gap-x-5">
              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">brand name</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setBrandName),[])}
                  value={brandName}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 starBefore">Postal code</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setPostalCode),[])}
                  value={postalCode}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-1/3 ">
                <p className="mb-3 ">work phone</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setWorkPhone),[])}
                  value={workPhone}
                  disabled={false}
                  type="text"
                  className="inputInformationForm !invalid:bg-red-200"
                />
              </div>
            </div>

            <ButtonDefault
              text="send"
              className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
