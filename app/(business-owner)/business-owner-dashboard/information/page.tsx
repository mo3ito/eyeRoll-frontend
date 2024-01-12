"use client";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import {FormEvent, useContext, useEffect, useRef, useState, useCallback, ChangeEvent,} from "react";
import { AuthContext } from "@/context/authContext";
import LoadingPage from "@/components/loading/loadingPage";
import handleInputChange from "@/utils/handleInputChange";
import { BUSINESS_OWNER_UPDATE_INFORMATION , BUSINESS_OWNER_PROFILE_IMAGE , BUSINESS_OWNER_IS_PASSWORD_DELETE_PROFILE_IMAGE  } from "@/routeApi/endpoints";
import updaterWithPatch from "@/services/updaterWihPatch";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import EYEROLL_TOKEN from "@/help/tokenName";
import { useRouter } from "next/navigation";
import useDropDownHandler from "@/hooks/useDropDownHandler";
import { InfosProps } from "@/types/authentication";
import FormDataHandle from "@/components/FormDataHandle/FormDataHandle";


export default function Information() {
  const { infos, login } = useContext(AuthContext);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [workPhone, setWorkPhone] = useState<string>("");
  const [isBorderBold, setIsBorderBold] = useState<boolean>(false);
  // const [isLoadingForApi , setIsLosdingForApi]=useState<boolean>(false)
  const phoneNumberRef = useRef<null | HTMLDivElement>(null);
  const { businessOwnerId } = useGetBusinessOwnerId(infos as InfosProps);
  const token = Cookies.get(EYEROLL_TOKEN);
  const router = useRouter();
  useDropDownHandler(phoneNumberRef , setIsBorderBold )

  console.log(businessOwnerId);
  console.log(token);

 

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
     
    };
    if (
      !email ||
      !name.length ||
      !lastName.length ||
      !phoneNumber ||
      !username.length
    ) {
     return toast.warn("Please Fill in the empty inputs");
      
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

  console.log(infos);
  
  if (!infos) {
    return <LoadingPage />;
  }
  return (
    <div className="bg-sky-100 w-full min-h-screen h-max pb-20 pt-28">
      <div className="container px-4  h-max mx-auto">

        <div className="max-xs:w-10/12 w-7/12 sm:w-7/12 md:w-1/2 lg:w-4/12 xl:w-3/12 2xl:w-3/12 mx-auto">
        <FormDataHandle targetImage={infos?.profile_image_path} defaultSrc="/images/defaultPerson.png" srcImage={infos?.profile_image_path && infos?.profile_image_path  } fileName="profileImage"  pathApi={BUSINESS_OWNER_PROFILE_IMAGE } pathApiDelete={BUSINESS_OWNER_IS_PASSWORD_DELETE_PROFILE_IMAGE}  />
        </div>
        <form onSubmit={informationSubmitHandler}>
          <div className=" max-[450px]:w-11/12 w-8/12 sm:w-10/12  md:w-full  lg:w-10/12  xl:w-7/12 2xl:w-2/4 h-max mx-auto  ">
           
         
            <div className="w-full flex flex-col sm:flex-row justify-around gap-x-5">
              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore ">name</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setName),[])}
                  value={name}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-full sm:w-1/2 ">
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
            <div className="w-full flex flex-col sm:flex-row justify-around gap-x-5">
              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore ">username</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setUsername),[])}
                  value={username}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div ref={phoneNumberRef} className="mb-4 w-full sm:w-1/2">
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

            {/* <div className="w-full   flex flex-col md:flex-row justify-around gap-x-5">
              <div className="mb-4 w-full  ">
                <p className="mb-3 starBefore">email</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setEmail),[])}
                  value={email}
                  disabled={false}
                  type="email"
                  className="inputInformationForm"
                />
              </div>
            </div> */}

            <div className="w-full flex flex-col md:flex-row justify-around gap-x-5">
            <div className="mb-4 w-full md:w-1/3 ">
                <p className="mb-3 starBefore">country</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setCountry),[])}
                  value={country}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="flex flex-col sm:flex-row md:w-2/3 gap-x-5">        
              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore">state</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setState),[])}
                  value={state}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-full sm:w-1/2 ">
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

            <div className="w-full flex flex-col md:flex-row justify-around gap-x-5">
            <div className="flex flex-col sm:flex-row md:w-2/3 gap-x-5">  
            <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore">brand name</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setBrandName),[])}
                  value={brandName}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
                

              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore">Postal code</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setPostalCode),[])}
                  value={postalCode}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
              </div>

              <div className="mb-4 w-full md:w-1/3 ">
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
